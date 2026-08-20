# VERDICT — Project Page

Project page for **VERDICT: Training-Free Step-Wise Verification of Multimodal Reasoning via
Disagreement-Aware Consensus** (ECCV 2026).

Static site — plain HTML/CSS/JS, no build step, no npm, no Jekyll.

```
.
├── index.html            # the whole page
├── .nojekyll             # tells GitHub Pages to serve files as-is
├── LICENSE               # CC BY-SA 4.0 (site), matching the template it borrows from
└── static/
    ├── css/index.css     # all styles
    ├── js/index.js       # carousel, tabs, navbar burger, copy-BibTeX
    ├── images/           # figures exported from the paper
    └── pdfs/             # drop poster.pdf here when ready
```

## Preview locally

```bash
cd verdict-project-page
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly via `file://` also works, though a local server is closer to
how GitHub Pages will serve it.

---

## Deploy to GitHub Pages (Option A — project site)

The repo is already pushed to `github.com/kunaltilaganji/verdict`. To go live:

1. **Settings → Pages**
   - *Source*: **Deploy from a branch**
   - *Branch*: `main`, folder `/ (root)`
   - **Save**

2. Wait ~1–2 minutes (the **Actions** tab shows a "pages build and deployment" run), then visit
   **https://kunaltilaganji.github.io/verdict/**

> **Repo name casing.** The remote is currently `kunaltilaganji/VERDICT` (uppercase). GitHub Pages
> derives the URL path from the repository name, so to get exactly `.../verdict/` as intended, rename
> the repo to lowercase under **Settings → General → Repository name → `verdict`**. GitHub keeps a
> redirect from the old name, and `git push` continues to work from the existing remote. The
> `og:url` / `canonical` / social-card tags in `index.html` are already written against the lowercase
> URL — if you decide to keep the uppercase name instead, update those four tags in the `<head>`.

### Updating the page later

```bash
git add -A && git commit -m "Update project page" && git push
```

Pages redeploys automatically on every push to `main`. Hard-refresh
(<kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>) if you still see the old version — the CDN caches
aggressively.

### Custom domain (optional)

Add a file named `CNAME` at the repo root containing just your domain, point a DNS `CNAME` record at
`kunaltilaganji.github.io`, then set the domain under **Settings → Pages**.

---

## Outstanding items

- [ ] **Poster.** The Poster button points at `static/pdfs/poster.pdf`, which does not exist yet.
      Drop the file in at exactly that path and push — the button goes live with no HTML change.
      Until then it 404s, so either push the poster before announcing the page, or temporarily
      comment out that `<a>` block in `index.html` (it is marked with a `<!-- Placeholder -->` comment).
- [ ] **Code link.** Points at `https://github.com/rohitsinha-iitfellow/mllm_verifiers`, currently
      private. Make it public (or repoint the two links — hero button and footer) before launch.
- [ ] **Author links.** All six are live in the hero. To add ORCID/Scholar icons alongside, extend
      `.publication-links` in the same pattern.

---

## Where the content came from

All text, numbers, and figures are taken from the paper source in
`mllm_verifiers/6a4c8b42b833bb4bddb75637/`:

| Page section        | Source |
| ------------------- | ------ |
| Abstract            | `main.tex` |
| Key Idea            | `sections/1_2_introduction.tex`, `sections/4_Method.tex` |
| Method + equations  | `sections/4_Method.tex` |
| Results table       | `sections/main_table.tex` |
| Findings            | `sections/5_6_Exp_Results.tex` |
| Ablations           | `sections/7_2_Ablation.tex`, `suppl_sections/additional_results/` |
| Qualitative         | `suppl_sections/qualitative_samples_v2.tex` |
| Agent prompts       | `suppl_sections/prompt_template.tex` |
| Limitations         | `sections/8_9_2_discuss_concl.tex` |

Figures were exported from `figures/` — PDFs rasterized at 200 dpi with `pdftoppm`, PNGs downscaled
and (where large) converted to JPEG. To regenerate after updating a figure, re-export it into
`static/images/` under the same filename.

## External dependencies

Loaded from CDN: Bulma 0.9.4, Font Awesome 6.4.2, MathJax 3, Google Fonts (Noto Sans).
Everything else is local.

The arXiv icon is an **inline SVG** in `index.html`, not an icon font. The page originally pulled
Academicons for it, but the pinned version (`academicons@1.9.4`) does not exist on npm, so the
stylesheet 404'd and the glyph rendered as nothing. Inlining the path removes the dependency
entirely — the icon can no longer break from a CDN change. The `<span class="icon"><svg>` markup is
sized by the `.publication-links .icon svg` rule in `index.css`.

## License

Content and code of this website are licensed under
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/), following the
[Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)
by Eliahu Horwitz, which this page borrows from and links back to in the footer.
