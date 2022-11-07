# Common HTML tags

## Hints for if you get stuck!

    <!DOCTYPE html>

All HTML documents must start with a `<!DOCTYPE html>` declaration. Technically, this isn't an HTML tag - rather it's "information" to tell the browser what type of document to expect. You'll notice this declaration is self closing.

    <html lang="en"></html>

The `<html>` tag represents the root of an HTML document. This tag is the container for all other HTML elements except for the <!DOCTYPE> declaration.

You'll notice this has a "lang" attribute which specifies the language of the elements content such as "en" or English or "fr" for French etc.

    <head></head>

The `<head>` tag contains metadata and is placed above the `<body>` tag.

Metadata is data about the HTML document. Metadata is not visible in the browser.

Metadata typically defines the document title, character set, styles, scripts, and other meta information.

    <body></body>

The `<body>` element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

Note: There can only be one `<body>` element in an HTML document.

    <header></header>

The `<header>` element represents a container for introductory content and/or a set of navigational links.

A `<header>` element typically contains logos, icons, one or more heading element (`<h1> - <h6>`) and
authorship information.

You can have several `<header>` elements in one HTML document. However, they cannot be placed within a `<footer>`, `<address>` or another `<header>` element.

    <nav></nav>

The `<nav>` tag is used to define a set of navigational links, usually to help guide you through different pages on a website (such as Home, About, FAQs etc). The `<nav>` tag should only be used for main navigational content. For other links, use the `<a>` tag.

    <ul></ul>

The `<ul>` tag defines an unordered (bulleted) list.

Use the `<ul>` tag together with the `<li>` tag to create unordered lists.

    <li></li>

The `<li>` tag defines a list item.

The `<li>` tag is used inside ordered lists(`<ol>`), unordered lists (`<ul>`), and in menu lists (`<menu>`).

    <a></a>

The `<a>` tag defines a hyperlink, which is used to link from one page to another.

The the href attribute is the most important attribute of the `<a>` element. This indicates the link's destination.

By default, links will appear as follows in all browsers:

An unvisited link is underlined and blue
A visited link is underlined and purple
An active link is underlined and red

    <button></button>

The `<button>` tag defines a clickable button.

A `<button>` element can contain text (and tags like `<i>`, `<b>`, `<strong>`, `<br>`, `<img>`, etc.). That is not possible with a button created with the `<input>` element.

You always need to specify the type attribute for a `<button>` element, to tell browsers what type of button it is.

Buttons can be styled in many different ways using CSS

    <section><section>

A `<section>` tag defines a section in a document

    <h1></h1>
    <h2></h2>
    ...
    <h6></h6>

The `<h1>` to `<h6>` tags are used to define HTML headings.

`<h1>` defines the most important heading. `<h6>` defines the least important heading.

Please note that only one `<h1>` should be in the document per page - this should represent the main heading/subject for the whole page. Always start with `<h1>`, then use `<h2>`, and so on.

    <strong></strong>

The strong tag is used to define text with higher importance, this is displayed in `<strong></strong>` tags

    <em></em>

The em tag is used to define emphasised text, typically displayed as itallics

    <p></p>

The `<p>` tag defines `<a>` paragraph of text.

    <form></form>

The `<form>` tag is used to create an HTML form for user input and can contain one or more of the following elements:
`<input>`
`<textarea>`
`<button>`
`<select>`
`<option>`
`<optgroup>`
`<fieldset>`
`<label>`
`<output>`
