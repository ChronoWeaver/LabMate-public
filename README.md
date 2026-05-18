# WetLab Pro Public Pages

This folder contains the source public pages and deployable static pages for both public websites:

- China mainland / zh-Hans primary site: `https://wetlabpro.cn/`
- English / global mirror site: `https://chronoweaver.github.io/LabMate-public/`

Both destinations should be published from this same folder so the public copy does not drift.
The main content stays the same across both destinations. The GitHub Pages mirror removes the mainland filing footer during sync, while `wetlabpro.cn` keeps the ICP and public-security filing footer.

- `support.md` -> Support URL
- `marketing.md` -> Marketing URL
- `privacy.md` -> Privacy Policy URL (public copy)
- `terms.md` -> Terms of Service / User Agreement

Current governance source of truth:
- `docs/release/public-web-and-url-governance.md`

Current GitHub Pages mirror URLs:
- Support URL: `https://chronoweaver.github.io/LabMate-public/support.html`
- Marketing URL: `https://chronoweaver.github.io/LabMate-public/marketing.html`
- Privacy Policy URL: `https://chronoweaver.github.io/LabMate-public/privacy.html`

Current mainland primary URLs:
- Marketing URL: `https://wetlabpro.cn/`
- Support URL: `https://wetlabpro.cn/support.html`
- Privacy Policy URL: `https://wetlabpro.cn/privacy.html`
- Terms URL: `https://wetlabpro.cn/terms.html`

## Publishing Scripts

Use the app repo scripts to publish the same source content to both destinations.

One-shot publishing:

```bash
scripts/publish-public-web.sh
```

GitHub Pages mirror sync:

`scripts/sync-public-docs.sh` copies:

- `docs/public-site/*.md` -> public repo root
- `docs/public-site/static/*.html` -> public repo root
- `docs/public-site/static/styles.css`, `lang-toggle.js`, and `beian-icon.png` -> public repo root

For GitHub Pages project URLs such as `https://chronoweaver.github.io/LabMate-public/`, the script rewrites root-relative static HTML links like `/privacy.html` and `/styles.css` to relative links. It also copies the homepage static HTML to `marketing.html` so the App Store Connect marketing URL stays available.
During this sync, the mainland filing footer block is removed from generated HTML pages.

Mainland ECS deployment:

`scripts/deploy-mainland-static-site.sh` deploys `docs/public-site/static/` to `wetlabpro.cn`.
The mainland deployment keeps the filing footer exactly as authored in `docs/public-site/static/`.

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
