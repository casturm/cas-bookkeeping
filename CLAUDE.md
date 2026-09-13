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

The site still serves from `creativebalanceworks.com`. Chris has purchased
`casbookkeepingpdx.com`; migration is a separate task. Coordinate the `CNAME`,
registrar DNS, GitHub Pages domain/HTTPS settings, and any Formspree domain restrictions.
The JavaScript success redirect uses relative `thanks.html` and needs no domain change.

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
- `#services` - Monthly bookkeeping as the primary offering, cleanup and QuickBooks setup, plus hourly consultation copy
- `#contact` - Contact form and business hours

## Contact

Inquiries arrive through a Formspree form (`https://formspree.io/f/xeelkrev`) with `contact.js` redirecting
to `thanks.html` after a successful response. Failed requests retain the entered details
and show an inline status message. Without JavaScript, Formspree handles the native POST
and its confirmation page. No email address or phone number is published on the site.
Business hours displayed: Monday-Friday 9 AM - 5 PM.
