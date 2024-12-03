## StandardSection

A `<section>` element.

#### Classes

-   `standard-component`, `section`, `standard-section`
    -   `wrapper`
        -   `section-content`

#### Attributes

Default `<section>` attributes.

| Attribute | Type           | Default | Description                                        |
| --------- | -------------- | ------- | -------------------------------------------------- |
| `heading` | `ReactElement` | null    | Renders the provided heading component if provided |

#### CSS Variables

| Variable            | Fallback                    | Description                 |
| ------------------- | --------------------------- | --------------------------- |
| `--section-padding` | `--content-padding`, 0 1rem | Sets the `padding` property |

## HeroSection

A `<section>` element that displays content side by side with enough room.

#### Classes

-   `standard-component`, `section`, `hero-section`
    -   `wrapper`
        -   `section-content`

#### Attributes

Default `<section>` attributes.

| Attribute          | Type           | Default | Description                                                      |
| ------------------ | -------------- | ------- | ---------------------------------------------------------------- |
| `heading`          | `ReactElement` | null    | Renders the provided heading component if provided               |
| `layoutBreakpoint` | string         | 1024px  | Sets the breakpoint for swiching from `narrow` to `wide` layout. |

#### CSS Variables

| Variable            | Fallback                    | Description                 |
| ------------------- | --------------------------- | --------------------------- |
| `--section-padding` | `--content-padding`, 0 1rem | Sets the `padding` property |
| `--hero-gap`        | 1rem                        | Sets the `gap` property     |
