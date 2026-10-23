(() => {
  "use strict";
  const path = window.location.pathname;
  const pageName = path.includes("/achievements") ? "achievements" : path.includes("/writeups") ? "writeups" : path.includes("/projects/bank-management-system") ? "project" : path.includes("/squad") ? "squad" : path.endsWith("404.html") ? "404" : "home";
  const commands = {
    help: "Available commands:\n  help             show this help\n  whoami           show profile identity\n  ls               list portfolio sections\n  about            jump to the about section\n  skills           jump to skills and current learning\n  activity         jump to field activity\n  projects         jump to projects\n  project          open the Bank Management System case study\n  writeups         open CTF field notes\n  achievements     open certificates and badges\n  squad            open Deadweight Squad\n  contact          jump to contact details\n  home             return to the homepage\n  clear            clear terminal output\n  date             show this session's date\n  theme            show the active color theme",
    whoami: "Shadman Ibtesham (Jixsaw)\nCSE student at East West University\nCybersecurity learner | CTFs | Digital forensics | Networking\nCurrently learning Python.",
    ls: "about/   skills/   activity/   projects/   writeups/   achievements/   squad/   contact/",
    theme: "Active palette: Jixsaw original purple / indigo / blue.\nTerminal mode: enabled.",
    date: function() { return new Date().toLocaleString(); }
  };
  const main = document.querySelector("main");
  if (main) { main.classList.add("terminal-frame"); main.setAttribute("data-terminal-page", pageName); }

  const panel = document.createElement("section");
  panel.className = "terminal-console is-idle";
  panel.setAttribute("aria-label", "Interactive portfolio terminal");
  panel.innerHTML =
    '<div class="terminal-console-bar"><span class="terminal-lights" aria-hidden="true"><i></i><i></i><i></i></span><span class="terminal-console-title">jixsaw@portfolio:~ — interactive shell</span><span class="terminal-console-status"><span></span> READY</span></div>' +
    '<div class="terminal-output" aria-live="polite" aria-label="Terminal output" hidden></div>' +
    '<form class="terminal-input-row" autocomplete="off"><label for="terminal-command" class="terminal-prompt">jixsaw@portfolio:~$</label><input id="terminal-command" name="command" type="text" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Enter a terminal command" placeholder="type help and press Enter"><span class="terminal-caret" aria-hidden="true"></span><button type="submit" class="terminal-run" aria-label="Run command">↵</button></form>';
  document.body.appendChild(panel);
  document.body.classList.add("has-terminal-console");
  const form = panel.querySelector("form");
  const input = panel.querySelector("input");
  const output = panel.querySelector(".terminal-output");
  const status = panel.querySelector(".terminal-console-status");
  const history = [];
  let historyIndex = 0;

  function print(text, kind) {
    output.hidden = false;
    const line = document.createElement("div");
    line.className = "terminal-output-line " + (kind || "result");
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
    panel.classList.add("has-output");
  }
  function jumpTo(id) {
    const target = document.getElementById(id);
    if (!target) return false;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }
  function goTo(url) { window.location.href = url; }
  function run(raw) {
    const line = raw.trim();
    if (!line) return;
    print("jixsaw@portfolio:~$ " + line, "terminal-command-echo");
    const parts = line.toLowerCase().split(/\s+/);
    const cmd = parts[0];
    const arg = parts.slice(1).join(" ");
    if (cmd === "clear" || cmd === "cls") {
      output.replaceChildren(); output.hidden = true; panel.classList.remove("has-output"); return;
    }
    if (Object.prototype.hasOwnProperty.call(commands, cmd)) {
      print(typeof commands[cmd] === "function" ? commands[cmd]() : commands[cmd], "result"); return;
    }
    const sections = {
      about: { id: "profile", text: "Opening profile / about section..." },
      skills: { id: "skills", text: "Opening skills and current learning..." },
      activity: { id: "operations", text: "Opening field activity log..." },
      projects: { id: "builds", text: "Opening project directory..." },
      contact: { id: "contact", text: "Opening contact details..." }
    };
    if (sections[cmd]) {
      if (pageName !== "home") {
        print("Opening homepage section: " + cmd + " ...", "result");
        goTo("/#" + sections[cmd].id);
      } else if (jumpTo(sections[cmd].id)) print(sections[cmd].text, "result");
      else print("Section not found: " + sections[cmd].id, "terminal-error");
      return;
    }
    const routes = { home: "/", writeups: "/writeups/", achievements: "/achievements/", squad: "/squad/", project: "/projects/bank-management-system/" };
    if (cmd === "cd") {
      const dest = arg.replace(/^\/+|\/+$/g, "").replace(/\/$/, "");
      const aliases = { "~": "/", home: "/", projects: "/projects/bank-management-system/", "projects/bank-management-system": "/projects/bank-management-system/", writeups: "/writeups/", achievements: "/achievements/", squad: "/squad/" };
      if (aliases[dest]) { print("Opening " + (dest || "home") + " ..."); goTo(aliases[dest]); }
      else print("Directory not found: " + (arg || "(empty)") + "\nTry: cd home | cd projects | cd writeups | cd achievements | cd squad", "terminal-error");
      return;
    }
    if (routes[cmd]) { print("Opening " + cmd + " ..."); goTo(routes[cmd]); return; }
    if (cmd === "cat") {
      const file = arg.replace(/\.txt$/, "").replace(/\.md$/, "");
      const files = {
        about: commands.whoami,
        skills: "C programming · HTML · Cryptography (learning) · Steganography (learning) · OSINT (learning) · Python (currently learning)",
        readme: "Welcome to Jixsaw's cybersecurity portfolio.\nUse help to explore commands, or use the navigation and scrollable page content."
      };
      if (files[file]) print(files[file], "result");
      else print("cat: " + arg + ": file not found", "terminal-error");
      return;
    }
    if (cmd === "sudo" || cmd === "hack") { print("Nice try. This is a portfolio terminal, not a system shell. 🙂", "terminal-hint"); return; }
    print("command not found: " + cmd + "\nType help to see available commands.", "terminal-error");
  }
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const value = input.value;
    if (!value.trim()) return;
    history.push(value); historyIndex = history.length;
    panel.classList.remove("is-idle"); status.lastChild.textContent = " EXECUTED";
    run(value); input.value = ""; input.focus();
  });
  input.addEventListener("input", function() { panel.classList.remove("is-idle"); status.lastChild.textContent = " INPUT"; });
  input.addEventListener("focus", function() { panel.classList.remove("is-idle"); });
  input.addEventListener("blur", function() { if (!input.value) panel.classList.add("is-idle"); });
  input.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") { event.preventDefault(); if (historyIndex > 0) input.value = history[--historyIndex]; }
    else if (event.key === "ArrowDown") { event.preventDefault(); if (historyIndex < history.length - 1) input.value = history[++historyIndex]; else { historyIndex = history.length; input.value = ""; } }
    else if (event.key === "Escape") { input.value = ""; input.blur(); }
  });
  panel.querySelector(".terminal-run").addEventListener("click", function() { input.focus(); });
  print("Interactive session ready. Type help to explore the portfolio.", "result");
  panel.classList.add("is-idle");
})();