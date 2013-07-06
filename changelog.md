# Changelog

## 1.2.1
+ Removed excess testing code from 1.2.0 base file.

## 1.2.0
+ Moved max-width from `body` to `.container`, now generated with container mixin.
+ Corrected favicon reference.
+ Paragraphs and lists now have default styling.
+ Grids now share a single Sass mixin, direction set by CSS in modules.
+ Imports Compass complete now.
+ New config file for Compass compatibility.
+ Added `#menu` id to `nav` element.
+ Root Em fallback mixin now accepts multiple values (e.g. `+rem(margin, 20px 0`).
+ Added basic rem value generator.

## 1.1.1
+ Fixed description meta tag.

## 1.1.0
+ Added support for Internet Explorer 8+ as default with respond.js
+ Added OpenGraph metadata for social media sites.
+ Added Google Analytics snippet to index file.
+ Added JQuery version 2.0.3, version 1.10.2 will be served to Internet Explorer 8 and below.
+ JavaScript files now stored in js/libs.
+ Updated iPhone retina display icon to 120x120 in accordance with iOS7 guidelines.

## 1.0.1
+ Moved variables from reset to base.
+ Renamed reset to normalize to reflect the shared codebase with the normalize.sass repository.

## 1.0.0
+ First public release.