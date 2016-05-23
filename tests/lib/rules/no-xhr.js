/**
 * @fileoverview Prevent XMLHttpRequest
 * @author Jeff Dolle
 */

import rule from '../../../src/lib/rules/no-xhr'
import eslint from 'eslint'

const {RuleTester} = eslint
const ruleTester = new RuleTester()

ruleTester.run('no-xhr', rule, {

  valid: [
    'fetch(\'smiles.png\')',
    'window.fetch(\'smiles.png\')'
  ],

  invalid: [
    {
      code: 'new ActiveXObject(\'Msxml2.XMLHTTP\')',
      errors: [{
        message: 'You should use \'fetch\' instead of \'new ActiveXObject(\'Msxml2.XMLHTTP\')\'',
        type: 'NewExpression'
      }]
    },
    {
      code: 'new ActiveXObject(\'Microsoft.XMLHTTP\')',
      errors: [{
        message: 'You should use \'fetch\' instead of \'new ActiveXObject(\'Microsoft.XMLHTTP\')\'',
        type: 'NewExpression'
      }]
    },
    {
      code: 'new XMLHttpRequest()',
      errors: [{
        message: 'You should use \'fetch\' instead of \'new XMLHttpRequest\'',
        type: 'NewExpression'
      }]
    }
  ]
})
