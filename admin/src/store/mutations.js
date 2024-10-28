

export function setLoading(state, res) {
  state.isLoading = res ;
}


// ===============================    Auth   ======================================


  export function setResponseLogin(state, res) {
    state.resLogin = res; 
  }
  export function setResponseRegister(state, res) {
    state.resRegister = res; 
  }
  export function setResponseLogout(state, res) {
    state.resLogout = res; 
  }

  // Response after fetch get packet
  export function setGetPacket(state, res) {
    state.statePacket = res; 
  }





// ===============================    Product   ======================================

  export function setResPostProduct(state, res) {
    state.stateResPostProduct = res; 
  }
  
  
  export function setResGetProduct(state, res) {
    state.stateResProduct = res; 
  }
  
  
  
  
  // ===============================    Transaction   ======================================
  
  export function setResGetTransaction(state, res) {
    state.stateResTransaction = res; 
  }
  
  
  export function setResGetTransactionSum(state, res) {
    state.stateResTransactionSum = res; 
  }
  
  
    export function setResPostTransaction(state, res) {
      state.stateResPostTransaction = res; 
      state.dataAddProduct = [];
    }
    
    export function setResetBucket(state) {
      state.dataAddProduct = [];
    }

    export function setResDeletedTransaction(state, res) {
      state.stateResDeletedTransaction = res; 
    }


    export function setPickProduct(state, value) {
      state.pickProduct = value;
    }

    export function setTransaction(state, value) {
      state.pickTransaction = value; 
    }




export function setAddProduct(state, value) {
 
  const existingProduct = state.dataAddProduct.find(product => product.uuid === value.product.uuid);
  
  if (!existingProduct) {
 
    state.dataAddProduct.push(value.product);
    console.log("Produk baru ditambahkan:", value.product);
    const respon = 'Produk masuk Bucket!'
    state.resAddProduct = respon ;
  } else {
    console.log("Produk sudah ada:", value.product);
    const respon = 'Produk sudah ada!'
    state.resAddProduct = respon ;
  }
}







