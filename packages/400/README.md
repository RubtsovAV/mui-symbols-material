<!-- markdownlint-disable-next-line -->
<p align="center">
  <a href="https://mui.com/core/" rel="noopener" target="_blank"><img width="150" height="133" src="https://mui.com/static/logo.svg" alt="MUI Core logo"></a>
</p>

# mui-symbols-material

This package provides the Google [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) converted to [`SvgIcon`](https://mui.com/material-ui/api/svg-icon/) components.

## Installation

Install the package in your project directory with:

<!-- #default-branch-switch -->

```bash
npm install mui-symbols-material
```

<!-- #default-branch-switch -->

These components use the Material UI's [SvgIcon](https://mui.com/material-ui/api/svg-icon) component to render the SVG path for each icon.

If you are not already using Material UI in your project, you can add it with:

```bash
npm install @mui/material
```

## Documentation

<!-- #default-branch-switch -->

- [The SvgIcon documentation](https://mui.com/material-ui/icons/#svgicon)
- [The Material Design symbols search](https://fonts.google.com/icons)

## Contributing

This icon set is meant to be in sync with Google's Material Symbols.
Therefore, we don't accept fixes, additions, or any other contributions that would make this package diverge from the source.

To synchronize with Material Icons, do the following:

1. Inside this workspace run `pnpm src:download`
2. Inside this workspace run `pnpm src:icons && pnpm build`
