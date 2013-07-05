# Reflex
Reflex is a front-end development framework written in HTML5, JavaScript and Sass. It is designed to serve as a starting point for modern web projects, as such it does not dictate the style of the site and only intends to combine sensible defaults with optional Sass mixins.

## Grid System
Reflex is developed in response to the idea that preset grid systems do not match well with the challenges of responsive web design. Instead of fitting content into a preset grid system, it provides a number of Sass mixins to be used as tools to quickly create a unique responsive grid system around the content.

A Reflex based grid uses percentages as the primary horizontal measurement. The gutters and vertical measurements are sized with em or rem units, by default these use a typographic baseline measurement.

## Browser Support
Reflex is designed to work fully with the latest release versions of Chrome, Firefox, Safari, Opera and Internet Explorer 8+, as well as modern smartphone browsers (primarily Android and iOS) with the basic (non-media query) styles serving as a base for supporting older browsers.

If older versions of Internet Explorer must be fully supported then this can be achieved through the use of polyfills and additional stylesheets. Reflex leaves this open for the developer to choose what is best for each project.

## License
Reflex is released under the MIT license.