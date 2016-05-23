/**
 * @fileoverview Prevent all angular $http
 * @author Jeff Dolle
 */

module.exports = function(context) {
  return {

    CallExpression(node) {

      if (node.callee.type === 'MemberExpression') {
        const objectName = node.callee.object.name

        if (objectName === '$http') {
          context.report({
            node,
            message: 'You should use \'fetch\' instead of \'$http\''
          })
        }
      } else if (node.callee.name === '$http') {
        context.report({
          node,
          message: 'You should use \'fetch\' instead of \'$http\''
        })
      }
    }

  }

}

module.exports.schema = []
