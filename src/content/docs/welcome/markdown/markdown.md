---
title: Standard markdown pages
sidebar:
  order: 2
---

The astro starlight engine uses all standard markdown with Yaml style for
frontmatter. Frontmatter is used to pass variables to the preprocessor.
The `title` variable is the only required variable.

```md
// example.md
---
title: Example markdown frontmatter
sidebar:
  order: 1
---
```

The remaining markdown specification is largely consistent with github
markdown. You can read more about the starlight markdown 
[here](https://starlight.astro.build/guides/authoring-content/). Starlight
allows for extended markdown syntax which can be found 
[here](https://www.markdownguide.org/extended-syntax/).
