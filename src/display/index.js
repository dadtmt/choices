// here we declare all functions that will determine if we want to show or not a section

// must be tested

export const showServices = state =>
  state.shops.filter(shop => shop.selected).length > 0
