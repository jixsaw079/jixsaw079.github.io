# Security Policy

## Scope

This policy covers the public static website at https://jixsaw079.github.io/ and this site's source repository:
https://github.com/jixsaw079/jixsaw079.github.io

## Reporting a vulnerability

Please report suspected security issues privately by emailing **shadmanibtesham79@gmail.com**.

Include:
- the affected URL or file
- a concise description
- steps to reproduce
- the potential impact

Avoid sending passwords, personal data, or other sensitive information.

Please do not publish an unpatched vulnerability or exploit details in a public issue. Reports are reviewed as time and availability allow. This is a personal project; no response-time guarantee or bug bounty is offered.

## Safe testing

- Test only the website and repository within the scope above.
- Do not attempt denial-of-service, spam, social engineering, account compromise, or access to other users' data.
- Do not access, modify, or delete data that is not yours.
- Stop testing if you encounter information that appears private.

## Security design

This is a **static, zero-JavaScript** GitHub Pages site with a strict Content Security Policy:

- `script-src 'none'` — no scripts allowed
- `object-src 'none'` — no plugins/embeds
- `connect-src 'none'` — no network requests from the page
- `form-action 'none'` — no form submissions
- `frame-src 'none'` / `child-src 'none'` — no frames
- `style-src-attr 'none'` — no inline style attributes
- `upgrade-insecure-requests` — force HTTPS for subresources

Additional meta protections: `X-Content-Type-Options: nosniff`, `referrer: no-referrer`.

## Limitations

GitHub Pages does not allow this repository to set arbitrary HTTP response headers. Protections such as HSTS, Permissions-Policy, and an HTTP-header-delivered `frame-ancestors` policy depend on the hosting platform. Repository access controls and GitHub account security remain essential. CSP delivered via `<meta>` is defense in depth, not a guarantee against compromise of the hosting account or CDN.
