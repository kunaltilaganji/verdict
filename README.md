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
    └── pdfs/             # drop paper.pdf / supplementary.pdf here (optional)
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

## Deploy to GitHub Pages

Two options. **Option A** gives you `https://<username>.github.io/verdict/`, **Option B** gives you
`https://<username>.github.io/` (one per account).

### Option A — project site (recommended)

1. Create a new **public** repository on GitHub, e.g. `verdict` (public is required for Pages on a
   free account).

2. Push this folder to it:

   ```bash
   cd /data1/kunal.prjt/verdict-project-page
   git init
   git add .
   git commit -m "VERDICT project page"
   git branch -M main
   git remote add origin https://github.com/<username>/verdict.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages**.
   - *Source*: **Deploy from a branch**
   - *Branch*: `main`, folder `/ (root)`
   - **Save**

4. Wait ~1–2 minutes (watch the **Actions** tab for the "pages build and deployment" run), then visit
   `https://<username>.github.io/verdict/`.

### Option B — user site

Name the repository exactly `<username>.github.io` and push the same way. It is served at
`https://<username>.github.io/` with no subpath.

### Updating the page later

```bash
git add -A && git commit -m "Update project page" && git push
```

Pages redeploys automatically on every push to the configured branch. Hard-refresh
(<kbd>Ctrl/Cmd</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>) if you still see the old version — the CDN caches
aggressively.

### Custom domain (optional)

Add a file named `CNAME` at the repo root containing just your domain (e.g. `verdict-eccv.com`),
point a DNS `CNAME` record at `<username>.github.io`, then set the domain under **Settings → Pages**.

---

## Before you publish — checklist

- [ ] **Code link.** The Code button and footer point to
      `https://github.com/rohitsinha-iitfellow/mllm_verifiers`. If that repo is private, either make it
      public or update the two links in `index.html` (search for `mllm_verifiers`) — otherwise visitors
      get a 404.
- [ ] **arXiv links.** Currently `https://arxiv.org/abs/2608.10665` and `.../pdf/2608.10665`.
      Confirm they resolve.
- [ ] **Supplementary button.** It currently reuses the arXiv PDF. If you have a separate
      supplementary PDF, put it in `static/pdfs/` and point the button at
      `static/pdfs/supplementary.pdf`.
- [ ] **Author links.** Author names are plain text. To link one to a homepage, wrap it:
      `<span class="author-block"><a href="https://...">Rohit Sinha</a><sup>1,*</sup>,</span>`
- [ ] **Social preview.** The `og:image` / `twitter:image` meta tags use a relative path, which some
      scrapers ignore. After deploying, replace them with the absolute URL, e.g.
      `https://<username>.github.io/verdict/static/images/method_overview.jpg`.
- [ ] **Poster / video.** If you get a poster or teaser video, add a button in `.publication-links`
      and a section — the CSS classes (`figure-block`, `section-title`, `carousel`) are reusable.

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

Loaded from CDN (no vendoring needed): Bulma 0.9.4, Font Awesome 6.4.2, Academicons 1.9.4,
MathJax 3, Google Fonts (Noto Sans). Everything else is local.

## License

Content and code of this website are licensed under
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/), following the
[Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)
by Eliahu Horwitz, which this page borrows from and links back to in the footer.
