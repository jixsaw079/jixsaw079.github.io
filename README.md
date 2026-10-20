# Jixsaw — Cybersecurity Portfolio

Live site: https://jixsaw079.github.io/

A free, static GitHub Pages portfolio documenting Shadman Ibtesham (Jixsaw)'s cybersecurity learning journey, projects, CTF participation, achievements, and Deadweight Squad.

## Site map

- `index.html` — portfolio home, profile, activity, working method, projects, roadmap, and contact links
- `projects/bank-management-system/index.html` — project case study and planned reliability work
- `writeups/index.html` — field-notes archive and publication standards
- `achievements/index.html` — certificates and digital badge archive
- `squad/index.html` — Deadweight Squad team page
- `style.css` — shared visual system and responsive styles
- `404.html` — friendly missing-page experience
- `robots.txt` and `sitemap.xml` — basic search-crawler guidance
- `.well-known/security.txt` — RFC 9116 responsible disclosure file

## Security posture (static-site baseline)

This is a **zero-JavaScript** static site. The site uses a restrictive meta-delivered CSP and no JavaScript. Meta policies are a useful baseline, but some security controls only work as HTTP response headers; the site does not claim those server-side headers are enabled.

### Current controls

- **Content-Security-Policy** (strict):
  - `script-src 'none'` — no JavaScript of any kind
  - `object-src 'none'`, `frame-src 'none'`, `media-src 'none'`, `worker-src 'none'`, `connect-src 'none'`, `manifest-src 'none'`
  - `base-uri 'self'`, `form-action 'self'`
  - Images limited to `'self'` + `data:`
  - Styles and fonts narrowly allow Google Fonts only
  - `upgrade-insecure-requests`
- **`X-Content-Type-Options: nosniff`** is documented as a desired HTTP header, but cannot be enforced through a meta tag; do not count it as active protection on GitHub Pages.
- **Referrer policy** via the supported `referrer` meta element: `strict-origin-when-cross-origin`
- External links use `rel="noopener noreferrer"`
- No forms, no cookies, no third-party analytics, no tracking scripts
- `security.txt` present for responsible disclosure

### Limitations of pure GitHub Pages

- `frame-ancestors` and true `X-Frame-Options` cannot be enforced via meta tags (browser limitation).
- Full HTTP security headers (including `X-Content-Type-Options`, HSTS, `Permissions-Policy`, and `frame-ancestors`) require host/proxy support. The CSP meta tag is useful but is not equivalent to a server-delivered CSP header; directives such as `frame-ancestors` are ignored in meta-delivered CSP.

### Content rules

- Never commit passwords, API keys, tokens, private challenge flags, or other secrets.
- Only list achievements that can be substantiated.
- Publish CTF write-ups only when the explanation is reproducible and appropriate to share.

## Project documentation

The Bank Management System page describes the intended project scope and planned improvements. It explicitly distinguishes planned work from tested implementation. Add a source link only after the code is published and verified.

## Updating the site

1. Edit the relevant HTML or CSS file.
2. Keep links relative to the site root consistent with GitHub Pages paths.
3. Test the page on both a narrow mobile screen and a desktop-sized screen.
4. Check image paths and alt text when adding images.
5. Keep the Content-Security-Policy meta tag intact on every HTML page.
