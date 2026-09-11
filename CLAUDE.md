# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CAS Bookkeeping LLC is a static single-page website for a professional bookkeeping service
owned by Chris A Sturm (the initials behind "CAS"). The site is hosted on GitHub Pages and
uses Tailwind CSS via CDN.

The business was previously branded "Creative Balance Works"; the site was rebranded to
CAS Bookkeeping LLC in September 2026.

## Architecture

- **Single-page application**: All content is in `index.html` with smooth-scrolling navigation between sections
- **Styling**: Tailwind CSS loaded via CDN (`https://cdn.tailwindcss.com`)
- **Hosting**: GitHub Pages with custom domain `creativebalanceworks.com` (configured via CNAME)
- **No build process**: The site is pure HTML/CSS/JS with no compilation or bundling steps

### Pending domain migration

The site still serves from `creativebalanceworks.com` because `casbookkeeping.com` has not
been purchased yet. Once it is, three things must change together:

1. `CNAME` — replace with `casbookkeeping.com`
2. `index.html` — the Formspree `_next` hidden input, which hardcodes the redirect origin
3. DNS at the registrar — point the apex record at GitHub Pages, then re-enable HTTPS in the
   repo's Pages settings (the TLS certificate is per-domain and must be reissued)

## Naming convention

- **`CAS Bookkeeping LLC`** — formal/legal contexts: `<title>`, nav heading, image alt text, footer copyright
- **`CAS Bookkeeping`** — mid-sentence prose, where the legal suffix reads as clutter

## Development

### Local Testing
Open `index.html` directly in a browser to preview changes. No local server is required, though one can be used:
```bash
python3 -m http.server 8000
# or
npx serve .
```

### Deployment
Changes pushed to the `main` branch are automatically deployed to GitHub Pages.

## Site Structure

The single-page site contains these sections (accessible via anchor links):
- `#home` - Hero section with call-to-action
- `#about` - Background on the business and owner
- `#services` - Six service offerings (QuickBooks Setup, Monthly Bookkeeping, etc.)
- `#contact` - Contact form and business hours

## Contact

Inquiries arrive through a Formspree form (`https://formspree.io/f/xeelkrev`) that redirects
to `thanks.html` on success. No email address or phone number is published on the site.
Business hours displayed: Monday-Friday 9 AM - 5 PM.
