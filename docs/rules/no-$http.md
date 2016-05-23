# Prevent all requests using the jQuery library (no-jquery)

## Rule Details

This rule aims to prevent usage of unnecessary libraries when fetch has it all.

The following patterns are considered warnings:

```js

$http({method: 'GET', url: '/foo'})
$http.get('http://foo.bar/example.json')
$http.post('http://foo.bar/example.json')
$http.put('http://foo.bar/example.json')
$http.delete('http://foo.bar/example.json')
$http.head('http://foo.bar/example.json')
$http.patch('http://foo.bar/example.json')
$http.jsonp('http://foo.bar/example.json')

```

The following patterns are not warnings:

```js

fetch('http://foo.bar/example.json')

```


## When Not To Use It

If the project is not using Angular, then there is no reason to use this rule. This rule is disabled by default.
