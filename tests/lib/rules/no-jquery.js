/**
 * @fileoverview Prevent all requests using the jQuery library
 * @author Jeff Dolle
 */

import rule from '../../../src/lib/rules/no-jquery'
import eslint from 'eslint'

const {RuleTester} = eslint


const functions = [
  'ajax',
  'get',
  'getJSON',
  'getScript',
  'post'
]
const moduleNames = ['$', 'jQuery']
const ruleTester = new RuleTester()

ruleTester.run('no-jquery', rule, {

  valid: [
    'fetch(\'smiles.png\')',
    'window.fetch(\'smiles.png\')'
  ],

  invalid: [
    ...[].concat(...[].concat(...functions.map(function(fn) {
      return moduleNames.map(function(moduleName) {
        return {
          code: `${moduleName}.${fn}('http://foo.bar/example.json')`,
          errors: [{
            message: `You should use 'fetch' instead of '${moduleName}.${fn}'`,
            type: 'CallExpression'
          }]
        }
      })
    }))),
    ...moduleNames.map(function(jqueryName) {
      return {
        code: `${jqueryName}('#foo').load('/bar.json #example')`,
        errors: [{
          message: `You should use 'fetch' instead of '${jqueryName}.fn.load'`,
          type: 'CallExpression'
        }]
      }
    })
  ]
})
