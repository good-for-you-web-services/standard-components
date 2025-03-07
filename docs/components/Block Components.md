# Block Components

These components represent a set of standardized page building blocks.

## StandardHeader

A `<header>` element.

#### Classes

-   `standard-component`, `header`
    -   `wrapper`

#### Attributes

Default `<header>` attributes.

#### CSS Variables

| Variable                    | Fallback                  | Description                          |
| --------------------------- | ------------------------- | ------------------------------------ |
| `--header-height`           | 4rem                      | Sets the `height` property           |
| `--header-padding`          | `content-padding`, 0 1rem | Sets the `padding` property          |
| `--header-background-color` | black                     | Sets the `background-color` property |
| `--header-text-color`       | white                     | Sets the `color` property            |

## StandardPage

A `<main>` element.

#### Classes

-   `standard-component`, `page`
    -   `wrapper`

#### Attributes

Default `<main>` attributes.

| Attribute | Type           | Default | Description                                        |
| --------- | -------------- | ------- | -------------------------------------------------- |
| `meta`    | `object`       | null    | Sets `<head>` meta tags relevant to page seo       |
| `heading` | `ReactElement` | null    | Renders the provided heading component if provided |

#### CSS Variables

| Variable          | Fallback | Description                                                |
| ----------------- | -------- | ---------------------------------------------------------- |
| `--footer-gap`    | 4rem     | Sets the `padding-bottom` property on the wrapper element. |
| `--header-height` | 4rem     | Sets the `padding-top` property on the main element.       |
| `--header-gap`    | 2rem     | Sets the `padding-top` property on the wrapper element.    |

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

## StandardFooter

A `<footer>` element.

#### Classes

-   `standard-component`, `footer`
    -   `wrapper`

#### Attributes

Default `<footer>` attributes.

#### CSS Variables

| Variable                    | Fallback                  | Description                          |
| --------------------------- | ------------------------- | ------------------------------------ |
| `--footer-height`           | 1.5rem                    | Sets the `height` property           |
| `--footer-padding`          | `content-padding`, 0 1rem | Sets the `padding` property          |
| `--footer-background-color` | black                     | Sets the `background-color` property |
| `--footer-text-color`       | white                     | Sets the `color` property            |
