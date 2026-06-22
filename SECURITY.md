# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in Web4SDK, please report it responsibly.

### How to Report

**Do NOT open a public GitHub issue for security vulnerabilities.**

Instead, please email us at: **security@eaco.group**

### What to Include

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 1 week
- **Fix Release**: Dependent on severity

### Disclosure Policy

- We follow responsible disclosure
- We'll credit you in the security advisory (unless you prefer to remain anonymous)
- We'll coordinate the public disclosure date with you

## Security Best Practices for Users

### For SDK Users

1. **Never hardcode private keys** in your code
2. **Use environment variables** for sensitive configuration
3. **Keep dependencies updated** — run `npm audit` regularly
4. **Use HTTPS** for all API calls
5. **Validate all user input** before passing to SDK methods

### Common Vulnerabilities to Avoid

- **Private Key Exposure**: Never commit `.env` files or private keys to version control
- **Dependency Confusion**: Only install packages from the official NPM registry
- **Prototype Pollution**: Keep dependencies updated to patched versions
- **ReDoS**: Validate regex patterns if accepting user input

## Dependency Management

We regularly update dependencies to patch security vulnerabilities.

Check the [GitHub Security Advisories](https://github.com/ucoingroup/web4sdk/security/advisories) page for disclosed vulnerabilities.

## License Security

This project is licensed under MIT License. See [LICENSE](./LICENSE) for details.

---

Thank you for helping keep Web4SDK and its users safe!
