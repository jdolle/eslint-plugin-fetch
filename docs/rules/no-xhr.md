# Prevent XMLHttpRequest (no-xhr)

## Rule Details

This rule aims to promote cleaner code by using the new fetch API instead of ugly XHR

The following patterns are considered warnings:

```js

new ActiveXObject('Msxml2.XMLHTTP')
new ActiveXObject('Microsoft.XMLHTTP')
new XMLHttpRequest()

```

The following patterns are not warnings:

```js

fetch('http://foo.bar/example.json')

```
