# Good For You Standard Components

## Components

This is a growing set of standardized react components that can be used to quickly build web applications. The primary goal of these components is to provide standardized base components, including ones that can be used to develop the very base layout of your application.

### Root Components

#### Footer

`<footer>` element.

#### Header

`<header>` element.

#### Page

`<main>` element.

#### PageSection

`<section>` element.

### Wrapper Components

#### Wrapper

`<div>` element.

| Property    | Type    | Default | Function                                                                                                        |
| ----------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `fullWidth` | boolean | false   | Determines whether the wrapper will set it's max width to `content-max-width` or extend to 100% of it's parent. |

## Styling

Styling for these components is minimal handled by css modules, and can be extended both through your own css modules, as well as setting certain established CSS Variables. Not setting these variables will ca

### CSS Variables

#### content-padding

> Fallback Value: none

`--content-padding` is used as a general source to determine the horizontal padding that is applied to content. It is used by several other variables as a fallback.

#### footer-background-color

> Fallback Value: black

`--footer-background-color` is used to determine the background color of the full width of the `Footer` component.

#### footer-height

> Fallback Value: 1.5rem

`--footer-height` is used to determine the height of the `Footer` component.

#### footer-padding

> Fallback Value: --content-padding, 1rem

`--footer-padding` is used to determine the horizontal padding applied to the `Footer` component in order to prevent content going to the edge of the screen on small devices.

#### footer-text-color

> Fallback Value: white

`--footer-text-color` is used to determine the color of text within the `Footer` component.

#### header-background-color

> Fallback Value: black

`--header-background-color` is used to determine the background color of the full width of the `Header` component.

#### header-gap

> Fallback Value: 2rem

`--header-gap` is used to add additional padding at the top of the `Page` component to add space between the `Header` component and the start of `Page` content

#### header-height

> Fallback Value: 4rem

`--header-height` is used to determine the height of the header component. Additionally, this variable is used to add padding at the top of the Page component to prevent content being covered up by the header.

#### header-padding

> Fallback Value: --content-padding, 1rem

`--header-padding` is used to determine the horizontal padding applied to the `Header` component in order to prevent content going to the edge of the screen on small devices.

#### header-text-color

> Fallback Value: white

`--header-text-color` is used to determine the color of text within the `Header` component.

#### page-section-padding

> Fallback Value: --content-padding, 1rem

`--page-section-padding` is used to determine the horizontal padding applied to the `PageSection` component in order to prevent content going to the edge of the screen on small devices.
