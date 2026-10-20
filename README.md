# Jixsaw — Cybersecurity Portfolio

Live site: https://jixsaw079.github.io/

A free, static GitHub Pages portfolio documenting Shadman Ibtesham (Jixsaw)'s cybersecurity learning journey, projects, CTF participation, achievements, and Deadweight Squad.

## Site map

- `index.html` — portfolio home, profile, activity, projects, roadmap, and contact links
- `writeups/index.html` — field-notes archive and publication standards
- `achievements/index.html` — certificates and digital badge archive
- `squad/index.html` — Deadweight Squad team page
- `style.css` — shared visual system and responsive styles
- `404.html` — friendly missing-page experience
- `robots.txt` and `sitemap.xml` — basic search-crawler guidance
- `.well-known/security.txt` — RFC 9116 responsible disclosure file

## Security posture (hardened)

This is a **zero-JavaScript** static site. Browser-side protections are delivered via meta tags because GitHub Pages does not allow custom HTTP response headers.

### Current controls

- **Content-Security-Policy** (strict):
  - `script-src 'none'` — no JavaScript of any kind
  - `object-src 'none'`, `frame-src 'none'`, `media-src 'none'`, `worker-src 'none'`, `connect-src 'none'`, `manifest-src 'none'`
  - `base-uri 'self'`, `form-action 'self'`
  - Images limited to `'self'` + `data:`
  - Styles and fonts narrowly allow Google Fonts only
  - `upgrade-insecure-requests`
- **X-Content-Type-Options: nosniff** (meta)
- **Referrer-Policy: strict-origin-when-cross-origin**
- External links use `rel="noopener noreferrer"`
- No forms, no cookies, no third-party analytics, no tracking scripts
- `security.txt` present for responsible disclosure

### Limitations of pure GitHub Pages

- `frame-ancestors` and true `X-Frame-Options` cannot be enforced via meta tags (browser limitation).
- Full HTTP security headers (HSTS, Permissions-Policy, etc.) require a reverse proxy such as Cloudflare in front of the site.

### Content rules

- Never commit passwords, API keys, tokens, private challenge flags, or other secrets.
- Only list achievements that can be substantiated.
- Publish CTF write-ups only when the explanation is reproducible and appropriate to share.

## Updating the site

1. Edit the relevant HTML or CSS file.
2. Keep links relative to the site root consistent with GitHub Pages paths.
3. Test the page on both a narrow mobile screen and a desktop-sized screen.
4. Check image paths and alt text when adding images.
5. Keep the Content-Security-Policy meta tag intact on every HTML page.
