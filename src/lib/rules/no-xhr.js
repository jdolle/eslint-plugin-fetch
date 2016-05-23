/**
 * @fileoverview Prevent XMLHttpRequest
 * @author Jeff Dolle
 */

module.exports = function(context) {

  return {
    NewExpression(node) {
      if (node.callee.name === 'XMLHttpRequest') {
        context.report({
          node,
          message: 'You should use \'fetch\' instead of \'new XMLHttpRequest\''
        })
      } else if (node.callee.name === 'ActiveXObject') {
        const argument = node.arguments[0].value

        switch (argument) {
        case 'Microsoft.XMLHTTP':
        case 'Msxml2.XMLHTTP':
          context.report({
            node,
            message: `You should use 'fetch' instead of 'new ActiveXObject('${argument}')'`
          })
          break
        default:
        }
      }
    }
  }
}

module.exports.schema = []
