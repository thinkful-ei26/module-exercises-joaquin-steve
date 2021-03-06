/*eslint-env jquery*/
/* global cuid */
'use strict';

const Item = (function() {
  function validateName(name) {
    if (name === '' || name === null) throw new Error('Name does not exist');
  }

  const create = function(name) {
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };
  return {
    validateName,
    create
  };
})();
