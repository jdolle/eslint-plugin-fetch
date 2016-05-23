# Prevent all requests using the jQuery library (no-jquery)

## Rule Details

This rule aims to promote cleaner code by relying less on third party libraries. Prefer native fetch API over jQuery ajax calls.

The following patterns are considered warnings:

```js

$('#foo').load('/bar')
jQuery('#foo').load('/bar')
$.ajax('/foo')
jQuery.ajax('/foo')
$.get('/foo')
jQuery.get('/foo')
$.getJSON('/foo')
jQuery.getJSON('/foo')
$.getScript('/foo')
jQuery.getScript('/foo')
$.post('/foo')
jQuery.post('/foo')

```

The following patterns are not warnings:

```js

fetch('/foo')

```
