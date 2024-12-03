## Navigation

A `<nav>` element.

#### Classes

-   `standard-component`, `navigation`
    -   `navigation-button`
    -   `navigation-menu`
        -   `navigation-menu-wrapper`
            -   `navigation-list`
                -   `navigation-list-item`

#### Attributes

| Attribute          | Type             | Default | Description                                                                                                |
| ------------------ | ---------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `links`            | `ReactElement[]` | null    | Contains elements that will be mapped into `<li>` elements inside of the `<ul>` classed `navigation-list`. |
| `layoutBreakpoint` | string           | 1024px  | Sets the threshold that the element will switch from `standard` layout to `alternate` layout.              |

#### CSS Variables

| Variable                        | Fallback    | Description                                                                                                              |
| ------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `--transition-time`             | 0.1s        | Sets the time of the `transition` property                                                                               |
| `--button-outline-color`        | transparent | Sets the `border-color` property                                                                                         |
| `--button-color`                | transparent | Sets the `background-color` property                                                                                     |
| `--button-fill-color`           | white       | Sets the `fill` property of the child `<svg>` element                                                                    |
| `--button-outline-color-hover`  | white       | Sets the `border-color` property when hovering                                                                           |
| `--button-color-hover`          | transparent | Sets the `background-color` property when hovering                                                                       |
| `--button-fill-color-hover`     | white       | Sets the `fill` property of the child `<svg>` element when hovering                                                      |
| `--button-outline-color-active` | white       | Sets the `border-color` property when active                                                                             |
| `--button-color-active`         | white       | Sets the `background-color` property when active                                                                         |
| `--button-fill-color-active`    | black       | Sets the `fill` property of the child `<svg>` element when active                                                        |
| `--menu-gap`                    | 1rem        | Sets the `gap` property for the `.navigation-menu` children                                                              |
| `--menu-padding`                | 2rem 1rem   | Sets the `padding` property of the `.navigation-menu-wrapper` element                                                    |
| `--menu-font-size`              | 1.25rem     | Sets the `font-size` property of `.navigation-list-item` elements                                                        |
| `--menu-font-weight`            | 600         | Sets the `font-weight` property of `.navigation-list-item` elements                                                      |
| `--menu-text-color`             | white       | Sets the `color` property of `.navigation-list-item` elements                                                            |
| `--menu-text-color-hover`       | white       | Sets the `color` property of `.navigation-list-item` elements when hovering                                              |
| `--menu-text-color-active`      | white       | Sets the `color` property of `.navigation-list-item` elements when active                                                |
| `--header-height`               | 4rem        | Sets the `top` property of the `.navigation-menu` element when `[data-layout='standard']`                                |
| `--menu-max-width`              | 100%        | Sets the `max-width` property of the `.navigation-menu` element when `[data-layout='standard']` and `[data-show='true']` |
| `--menu-color`                  | black       | Sets the `background-color` property of the `.navigation-menu` element.                                                  |
| `--menu-transition-time`        | 0.25s       | Sets the time of the `transition` property on the `.navigation-menu` element                                             |
