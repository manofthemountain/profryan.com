---
title: "Blog Authoring Standard – Astro Markdown Format"
description: "Formatting and structural requirements for generating blog posts for profryan.com using Astro content collections."
---

# Blog Authoring Standard (Astro Markdown)

This document defines the required formatting standard for all blog posts generated for profryan.com.

All articles must comply with these structural and stylistic requirements.

---

## 1. Frontmatter Requirements

Every post must begin with this exact structure:

```yaml
---
title: "Clear, Technical Title"
description: "Concise 1–2 sentence technical summary optimized for SEO."
pubDate: "YYYY-MM-DD"
updatedDate: "YYYY-MM-DD"
heroImage: "/images/blog/<slug>/<filename>.jpg"
heroImageAlt: "Descriptive alt text explaining the image context."
tags:
  - Tag1
  - Tag2
  - Tag3
---
```

### Rules

- Use double quotes.
- Dates must be ISO format (YYYY-MM-DD).
- Do not include `slug` (Astro derives it from filename).
- Do not include `draft` unless explicitly requested.
- Do not add fields not listed above.
- The file must be compatible with Astro content collections.

---

## 2. Markdown Formatting Standards

All content must be valid Markdown only.

- No JSX.
- No Astro components.
- No React syntax.
- No inline HTML unless explicitly required.
- No embedded scripts.

### Headings

- Use `##` for main sections (not `#`).
- Use `###` for subsections.
- Do not skip heading levels.
- Use horizontal rules (`---`) only between major sections.

### Lists

- Use hyphen bullets (`-`).
- Use numbered lists only for procedural steps.
- Avoid excessive nested lists.

### Prohibited Formatting

- No emojis.
- No decorative characters.
- No excessive bolding.
- No conversational filler.
- No marketing tone.

---

## 3. Tone and Writing Style

Write in a professional technical tone consistent with:

- NIST-style clarity  
- DoD-style assessment writing  
- Structured analytical reporting  
- Objective and precise language  

Avoid:

- Marketing tone  
- Motivational language  
- Casual phrasing  
- Overly dramatic language  

Content should read like a technical assessment, not a blog rant.

---

## 4. Screenshot and Figure Formatting

Images must follow this structure:

```md
![Figure X: Clear description of what the image demonstrates](/images/blog/<slug>/<image-name>.jpg)

*Figure X. Clear description of what the image demonstrates.*
```

### Requirements

- Include figure number.
- Include descriptive alt text.
- Include caption line below image.
- Maintain consistent numbering.
- Use public image paths beginning with `/images/blog/`.
- Do not use local relative paths.
- Do not embed base64 images.

---

## 5. Structured Assessment Sections (When Applicable)

When appropriate, structure technical sections using:

- Context  
- Methodology  
- Observations  
- Analysis  
- Impact  
- Mitigation  
- Recommendations  

Keep sections clearly separated and logically ordered.

Description and analysis must not be blended.

---

## 6. Code Blocks

- Use triple backticks.
- Always specify language (bash, json, http, etc.).
- No inline styling.
- No HTML wrappers unless required.
- Code must be copy-ready.

Example:

```bash
curl -I https://example.com
```

---

## 7. References Section

If including references, use:

```md
## References

Cloudflare – HTTP/2 Rapid Reset Analysis  
https://blog.cloudflare.com/technical-breakdown-http2-rapid-reset-ddos-attack/
```

### Rules

- Do not inline hyperlinks.
- Place URLs on their own line.
- Use clean citation formatting.
- No hyperlink markdown syntax.

---

## Output Requirement for AI Generation

When generating blog content:

- Return only the Markdown file.
- Do not include commentary outside the file.
- Do not include explanations.
- Do not include meta commentary.
- Output must be ready to paste directly into `/src/content/blog/`.