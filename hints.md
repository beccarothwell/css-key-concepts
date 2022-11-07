Here are a list of HTML tags that you might find in a doctors surgery website 😉

<!DOCTYPE html>

All HTML documents must start with a <!DOCTYPE html> declaration. Technically, this isn't an HTML tag - rather it is is "information" to tell the browser what type of document to expect. You'll notice this declaration is self closing.

<html lang="en"></html>

The <html> tag represents the root of an HTML document. This tag is the container for all other HTML elements except for the <!DOCTYPE> declaration.

You'll notice this has a lang attribute which specifies the language of the elements content such as "en" or English or "fr" for French etc.

<head></head>

The <head> tags contain metadata and are placed above the <body> tag.

The <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.

Metadata is data about the HTML document. Metadata is not displayed.

Metadata typically define the document title, character set, styles, scripts, and other meta information.

The following elements can go inside the <head> element:

<body></body>

The <body> tag defines the document's body.

The <body> element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

Note: There can only be one <body> element in an HTML document.

<header></header>

The <header> element represents a container for introductory content or a set of navigational links.

A <header> element typically contains:

one or more heading elements (<h1> - <h6>)
logo or icon
authorship information
Note: You can have several <header> elements in one HTML document. However, <header> cannot be placed within a <footer>, <address> or another <header> element.

<nav></nav>

The <nav> tag defines a set of navigation links.

Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended only for major blocks of navigation links.

Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.

<ul></ul>

The <ul> tag defines an unordered (bulleted) list.

Use the <ul> tag together with the <li> tag to create unordered lists.

<li></li>

The <li> tag defines a list item.

The <li> tag is used inside ordered lists(<ol>), unordered lists (<ul>), and in menu lists (<menu>).

<a></a>

The <a> tag defines a hyperlink, which is used to link from one page to another.

The the href attribute is the most important attribute of the <a> element. This indicates the link's destination.

By default, links will appear as follows in all browsers:

An unvisited link is underlined and blue
A visited link is underlined and purple
An active link is underlined and red

<button></button>

The <button> tag defines a clickable button.

A <button> element can contain text (and tags like <i>, <b>, <strong>, <br>, <img>, etc.). That is not possible with a button created with the <input> element.

You always need to specify the type attribute for a <button> element, to tell browsers what type of button it is.

Buttons can be styled in many different ways using CSS

<section><section>

A <section> tag defines a section in a document

<h1></h1>
<h2></h2>
...
<h6></h6>

The <h1> to <h6> tags are used to define HTML headings.

<h1> defines the most important heading. <h6> defines the least important heading.

Please note that only one <h1> should be in the document per page - this should represent the main heading/subject for the whole page. Always start with <h1>, then use <h2>, and so on.

<strong></strong>

The strong tag is used to define text with higher importance, this is displayed in <strong>bold</strong>

<em></em>

The em tag is used to define emphasised text, typically displayed as itallics

<p></p>

The p tag defines a paragraph of text.

<form></form>

The <form> tag is used to create an HTML form for user input and can contain one or more of the following elements: <input><textarea><button><select><option><optgroup>

<fieldset><label><output>
