# Element Components

These components represent a set of standardized components meant to be used in place of the vanilla html element tags. These components aim to provide specific improved default functionality over the vanilla element tags.

## StandardImage

An `<img>` element that is automatically optimized for leveraging the [Netlify Image CDN](https://docs.netlify.com/image-cdn/overview/) if deployed via Netlify, with properties to leverage their image transformation API.

#### Classes

-   `standard-component`, `image`

#### Attributes

Default `<header>` attributes with a mandatory `src` attribute.

| Attribute           | Type     | Default | Description                                                     |
| ------------------- | -------- | ------- | --------------------------------------------------------------- |
| `options`           | `object` | null    | Provides url query parameters to the Netlify Image CDN          |
| `options.width`     | `number` | null    | Sets the image's width                                          |
| `options.height`    | `number` | null    | Sets the image's height                                         |
| `options.fit`       | `string` | null    | Sets the image's fit method                                     |
| `options.posittion` | `string` | null    | Sets the image's position method when using certain fit methods |
| `options.format`    | `string` | null    | Sets the image's output format                                  |
| `options.quality`   | `number` | 90      | Sets the image's quality scale                                  |

#### CSS Variables

| Variable                    | Fallback                  | Description                          |
| --------------------------- | ------------------------- | ------------------------------------ |
| `--header-height`           | 4rem                      | Sets the `height` property           |
| `--header-padding`          | `content-padding`, 0 1rem | Sets the `padding` property          |
| `--header-background-color` | black                     | Sets the `background-color` property |
| `--header-text-color`       | white                     | Sets the `color` property            |
