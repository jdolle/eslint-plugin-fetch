ESLint-Plugin-Fetch
===================

Prefer fetch over other ajax requests

# Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-fetch`:

```
$ npm install eslint-plugin-fetch --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-fetch` globally.

# Recommended configuration


Add `fetch` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix.
This plugin exports a `recommended` configuration that enforces all the rules. You can configure the plugin as follows:

```json
{
    "plugins": ["fetch"],
    "extends": ["plugin:fetch/recommended"]
}
```

## List of Provided Rules

* [no-jquery](docs/rules/no-jquery.md): Prevent jQuery ajax requests.
* [no-xhr](docs/rules/no-xhr.md): Prevent XMLHttpRequest.

### Library Specific Rules

These rules are disabled by default to improve performance.

* [no-$http](docs/rules/no-$http.md): Prevent Angular's $http.



# Contributing

Contributions are always welcome.


# License

ESLint-plugin-fetch is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
