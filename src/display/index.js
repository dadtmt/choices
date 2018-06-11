// here we declare all functions that will determine if we want to show or not a section

// must be tested

// show services if a shop is selected
export const showServices = state =>
  state.shops.filter(shop => shop.selected).length > 0

// show sex if préparation is selected (the service with id 1)

export const showSex = state =>
  state.services.filter(service => service.selected && service.id === 1)
    .length > 0
