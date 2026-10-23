# Security Policy

## Scope

This policy covers the public static website at https://jixsaw079.github.io/ and this site's source repository:
https://github.com/jixsaw079/jixsaw079.github.io

## Reporting a vulnerability

Please report suspected security issues privately by emailing shadmanibtesham79@gmail.com. Include the affected URL or file, a concise description, steps to reproduce, and the potential impact. Avoid sending passwords, personal data, or other sensitive information.

Please do not publish an unpatched vulnerability or exploit details in a public issue. I will review reports as time and availability allow; this is a personal project and no response-time guarantee or bug bounty is offered.

## Safe testing

- Test only the website and repository within the scope above.
- Do not attempt denial-of-service, spam, social engineering, account compromise, or access to other users' data.
- Do not access, modify, or delete data that is not yours.
- Stop testing if you encounter information that appears private.

## Security design and limitations

This is intended to be a static, zero-JavaScript GitHub Pages site. The HTML Content Security Policy is defense in depth, not a guarantee against compromise. GitHub Pages does not let this repository configure arbitrary HTTP response headers, so protections such as HSTS, X-Content-Type-Options, Permissions-Policy, and an HTTP-header-delivered frame-ancestors policy depend on the hosting platform. Repository access controls and account security also remain essential.
