<!-- markdownlint-disable-next-line -->
<p align="center">
  <a href="https://mui.com/core/" rel="noopener" target="_blank"><img width="150" height="133" src="https://mui.com/static/logo.svg" alt="MUI Core logo"></a>
</p>

# @mui-symbols-material/w500

This package provides the Google [Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with weight 500 converted to [`SvgIcon`](https://mui.com/material-ui/api/svg-icon/) components.

## Installation

Install the package in your project directory with:

<!-- #default-branch-switch -->

```bash
npm install @mui-symbols-material/w500
```
<!-- #default-branch-switch -->

To install icons of a different weight, simply replace `500` with the desired weight in the installation command.

These components use the Material UI's [SvgIcon](https://mui.com/material-ui/api/svg-icon) component to render the SVG path for each icon.

If you are not already using Material UI in your project, you can add it with:

```bash
npm install @mui/material
```

## Usage

Once installed, you can use the icons in your React components:

```jsx
import React from 'react';
import { 
  FavoriteOutlined, 
  FavoriteRounded, 
  FavoriteSharp, 
  FavoriteFilledOutlined, 
  FavoriteFilledRounded, 
  FavoriteFilledSharp,
} from '@mui-symbols-material/w500'; // Replace 500 with your desired weight

/**
 * Renders all variants of the favorite icon from Material Symbols.
 */
function MyComponent() {
  return (
    <>
      <FavoriteOutlined />
      <FavoriteRounded />
      <FavoriteSharp />
      <FavoriteFilledOutlined />
      <FavoriteFilledRounded />
      <FavoriteFilledSharp />
    </>
  );
}
```

## Styles

1. **Outlined**: These icons have a distinct outline, providing a clear and crisp appearance.
2. **Rounded**: These icons have rounded edges, offering a softer and more subtle appearance.
3. **Sharp**: These icons have sharp edges, giving a bold and striking appearance.

## Filled Version

Each icon also comes in a filled version, providing a different aesthetic and allowing for greater versatility in their usage.

## Weights

Icons are available in multiple weights (100, 200, ..., 700), providing flexibility in design and emphasis.

## Design Specifications

All icons are based on a standard 24px optical size and a default 0 grade.

## Documentation

<!-- #default-branch-switch -->

- [The SvgIcon documentation](https://mui.com/material-ui/icons/#svgicon)
- [The Material Design symbols search](https://fonts.google.com/icons?icon.set=Material+Symbols)

## Contributing

This icon set is meant to be in sync with Google's Material Symbols.
Therefore, we don't accept fixes, additions, or any other contributions that would make this package diverge from the source.

To synchronize with Material Icons, do the following:

1. Inside this workspace run `pnpm src:download`
2. Inside this workspace run `pnpm src:icons && pnpm build`
