# WetLab Pro Public Pages

This folder contains ready-to-publish public pages for App Store Connect URLs:

- `support.md` -> Support URL
- `marketing.md` -> Marketing URL
- `privacy.md` -> Privacy Policy URL (public copy)

Recommended publishing target:
- A separate **public** GitHub repository (for example `wetlab-pro-public`)

Then use:
- `https://<owner>.github.io/<repo>/support.html`
- `https://<owner>.github.io/<repo>/marketing.html`
- `https://<owner>.github.io/<repo>/privacy.html`

Current production URLs:
- Support URL: `https://chronoweaver.github.io/LabMate-public/support.html`
- Marketing URL: `https://chronoweaver.github.io/LabMate-public/marketing.html`
- Privacy Policy URL: `https://chronoweaver.github.io/LabMate-public/privacy.html`

## Local Sync Script

Use the app repo script to sync these markdown files to your separate public repo.

Check differences only:

```bash
scripts/sync-public-docs.sh --target-repo /absolute/path/to/LabMate-public --check
```

Apply sync:

```bash
scripts/sync-public-docs.sh --target-repo /absolute/path/to/LabMate-public --apply
```

If target files are under a subdirectory in the public repo, add:

```bash
--target-subdir docs/public-site
```
