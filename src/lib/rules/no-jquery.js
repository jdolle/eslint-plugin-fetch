/**
 * @fileoverview Prevent all requests using the jQuery library
 * @author Jeff Dolle
 */

module.exports = function(context) {
  return {

    CallExpression(node) {

      if (node.callee.type === 'MemberExpression') {
        const objectName = node.callee.object.name

        if (objectName === '$' || objectName === 'jQuery') {
          const name = node.callee.property.name

          switch (name) {
          case 'ajax':
          case 'get':
          case 'getJSON':
          case 'getScript':
          case 'post':
            context.report({
              node,
              message: `You should use 'fetch' instead of '${objectName}.${name}'`
            })
            break
          default:
          }
        }
      } else if (node.callee.name === '$' || node.callee.name === 'jQuery') {
        const parentProperty = (node.parent && node.parent.property) || {}

        if (parentProperty.type === 'Identifier' && parentProperty.name === 'load') {
          context.report({
            node,
            message: `You should use 'fetch' instead of '${node.callee.name}.fn.load'`
          })
        }
      }
    }

  }

}

module.exports.schema = []
