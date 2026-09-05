# Repository Guidance

## Project Basics

- This is an Astro 5 static site.
- Run `npm run build` after changes. It validates all localized routes and produces `dist/`.
- Keep changes focused. Do not introduce dependencies or abstractions for small content changes.

## Localization

- Supported locales are `en` and `de`; English is the fallback. Maintain them in `src/data/languages.mjs`.
- Keep parallel English and German pages aligned when changing shared structure or navigation.
- Use `getLocalizedPath(language, Astro.url.pathname)` for language-switcher links so the switcher keeps the visitor on the equivalent page.
- Use `getSupportedLanguage()` before indexing language-specific data.
- Do not hard-code locale-path conversion logic in components or duplicate language-normalization logic.
- Do not claim language preference persistence unless the UI writes it and the root route reads it.

## Shared Data

- Keep reusable company facts in `src/data/company.json`, including contact data, address, registration number, and VAT ID.
- Reference shared company values in pages and components instead of duplicating them.
- Update localized display names through the language data or the localized values in `company.json`; do not add page-specific copies of shared facts.

## Components and Content

- `Layout.astro` owns the document shell, metadata, optional analytics injection, toast UI, and common client behavior.
- `Header.astro` owns localized navigation and language switching. `Footer.astro` owns localized footer content.
- Keep user-facing content localized in the appropriate `en` and `de` subpath pages or component language maps.
- Preserve the existing custom CSS visual language and responsive behavior for UI changes.

## Documentation

- Keep `README.md` consistent with the actual routing and language behavior.
- Do not document features that are no longer wired into the UI, such as a manual language preference setter.
