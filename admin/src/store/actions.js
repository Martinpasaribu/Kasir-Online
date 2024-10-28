import accessServer from '../acsessServer.js'
import router from '../router/index.js';
import accessTokens from '../accessToken.js'


// ===============================    Auth   ======================================

export async function loginUser({ commit }, packet) {
  try {
    const response = await accessServer.post('/login', packet);
    const res = response.data;
    commit('setResponseLogin', res);
    console.log("Res Login...", res);


    setTimeout(() => {
      router.push({ name: 'dashboard' });
    }, 1500); // At

    return res; 
    
  } catch (error) {
    console.error("Error during login:", error);
    throw error; 
  }
}
export async function registerUser({ commit }, packet) {
  try {
    const response = await accessServer.post('/users', packet);
    const res = response.data;
    commit('setResponseRegister', res);
    console.log("Res Register...", res);


    setTimeout(() => {
      router.push({ name: 'login' });
    }, 1500); // At

    return res; 
    
  } catch (error) {
    console.error("Error during register:", error);
    throw error; 
  }
}

export async function logoutUser({ commit }) {
  try {
    const response = await accessServer.delete('/logout');
    const res = response.data;
    commit('setResponseLogout', res);
    console.log("Res Logout...", res);


    setTimeout(() => {
      router.push({ name: 'login' });
    }, 1500); 

    return res; 
    
  } catch (error) {
    console.error("Error during logout:", error);
    throw error; 
  }
}



// ===============================    Product   ======================================

export async function addProduct({ commit }, packet) {
  try {
    const response = await accessTokens.post('/product', packet);
    const res = response.data;
    commit('setResPostProduct', res);
    return res; 
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error; 
  }
}


export async function getProduct({ commit }) {
  console.log("Fetching Product...");
  commit('setLoading', true);

  try {
    const response = await accessTokens.get('/product');
    commit('setResGetProduct', response.data.data);
  } catch (error) {
    console.error("Error fetching Product:", error);
    throw error;
  } finally {
    commit('setLoading', false);
  }

}





// ===============================    Transaction   ======================================

export async function addTransaction({ commit }, packet) {
  try {
    const response = await accessTokens.post('/transaction', packet);
    const res = response.data;
    commit('setResPostTransaction', res);
    return res; 
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error; 
  }
}



export async function getTransaction({ commit }, value) {
  console.log("Fetching Transaction...");
  commit('setLoading', true);

  try {
    const response = await accessTokens.get('/transaction');
    commit('setResGetTransaction', response.data.data);
  } catch (error) {
    console.error("Error fetching transaction:", error);
    throw error;
  } finally {
    commit('setLoading', false);
  }

}

export async function getTransactionSum({ commit }) {
  console.log("Fetching Transaction SUM...");
  commit('setLoading', true);

  try {
    const response = await accessTokens.get('/transactionSum');
    commit('setResGetTransactionSum', response.data.data);
  } catch (error) {
    console.error("Error fetching transaction SUM:", error);
    throw error;
  } finally {
    commit('setLoading', false);
  }

}

export async function delTransaction({ commit, state }, ) {
  try {
    const response = await accessTokens.delete(`/transaction/${state.pickTransaction}`);
    const res = response.data;
    commit('setResDeletedTransaction', res);
    return res; 
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error; 
  }
}

export function picksProduct({ commit }, value) {
  commit('setPickProduct', value);
  console.log(`Pick ID :   ${value}`)
  
}
export function picksTransaction({ commit }, value) {
  commit('setTransaction', value);
  console.log(`Pick ID :   ${value}`)
  
}

