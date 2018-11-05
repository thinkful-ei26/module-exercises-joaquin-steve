/*eslint-env jquery*/
'use strict'

const store = (function() {
  const foo = 'bar'
  const items = []
  let hideCheckedItems = false

  const addItem = function(itemName) {}
  const updateItem = function(id, updateData) {}
  const toggleHideCheckedFilter = function() {}

  const findById = function(id) {
    return items.find(id)
  }

  return {
    items,
    hideCheckedItems,
    addItem,
    updateItem,
    toggleHideCheckedFilter
  }
})()
