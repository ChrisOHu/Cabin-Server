'use strict';

  /**
   * The hook context:
   *
   * * method   - The method name: get, find, create, update, patch, remove, all ( methods )
   * * type     - The hook type (before or after)
   * * callback - The original callback (can be replaced but shouldn't be called in your hook)
   * * params   - The service method parameters
   * * data     - The request data (for create, update and patch)
   * * app      - The app object
   * * id       - The id (for get, remove, update and patch)
   */
exports.myHook = function(options) {
  return function(hook) {
    console.log('My custom global hook ran. Feathers is awesome!');
  };
};
