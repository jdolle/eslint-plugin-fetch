/**
 * @fileoverview Prefer fetch over other ajax requests
 * @author Jeff Dolle
 */

import requireIndex from 'requireindex'

module.exports = {
  configs: {
    recommended: {
      rules: {
        'fetch/no-jquery': 2,
        'fetch/no-xhr': 2,
        'fetch/no-$http': 0
      }
    }
  },
  rules: requireIndex(`${__dirname}/rules`)
}
