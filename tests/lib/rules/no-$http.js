/**
 * @fileoverview Prevent all $http requests
 * @author Jeff Dolle
 */

import rule from '../../../src/lib/rules/no-$http'
import eslint from 'eslint'

const {RuleTester} = eslint

const functions = ['get', 'head', 'post', 'put', 'delete', 'jsonp', 'patch']
const ruleTester = new RuleTester()

ruleTester.run('no-$http', rule, {

  valid: [
    'fetch(\'smiles.png\')',
    'window.fetch(\'smiles.png\')'
  ],

  invalid: [
    ...[].concat(...[].concat(...functions.map(function(fn) {
      return {
        code: `$http.${fn}('http://foo.bar/example.json')`,
        errors: [{
          message: 'You should use \'fetch\' instead of \'$http\'',
          type: 'CallExpression'
        }]
      }
    }))),
    {
      code: '$http({method: \'GET\', url: \'/foo\'})',
      errors: [{
        message: 'You should use \'fetch\' instead of \'$http\'',
        type: 'CallExpression'
      }]
    }
  ]
})
