export const getUser = state => state.user;




export const filteredProduct = state => {
   
    if (!state.pickProduct) {
      return []; 
    }
    return state.stateResProduct.filter(packet => packet.uuid == state.pickProduct);
}

export const totalPrice = state => {
   
    if (!state.dataAddProduct) {
      return []; 
    }
    return state.dataAddProduct.reduce((total, product) => {
      return total + (product.price || 0) * (product.quantity || 0) ; 
    }, 0);
}


export const setParserJson = state => {

  if (!state.stateResTransaction) {
    return []; 
  }
  
  return state.stateResTransaction.map(transaction => {
    return {
      ...transaction,
      product: JSON.parse(transaction.product)
    };
  });


}

