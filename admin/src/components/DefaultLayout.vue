<template>

  <div class="bg-white ">



    <main class="pt-10">

      <!-- Overlay when sidebar is open -->
      <div v-show="sideBar" @click="closeSideBar" class="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
      
      <div class="flex w-full justify-start items-center">
            <button @click="openSideBar" class=" inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" >
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>

        </div>

      <router-view />

      <aside  v-show="sideBar" class="fixed top-0 left-0 z-40 w-64 h-screen animate-sidebar" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
            <a href="" class="flex items-center ps-2.5 mb-5">
                <v-icon name="co-ripple"   class="text-blue-500 size-10" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Inventaris Online</span>
            </a>
            <ul class="space-y-2 font-medium">
                <li>
                  <router-link :to="{ name: 'dashboard' }"  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span class="ms-3">Dashboard</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'product' }" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <v-icon name="io-cube"   class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                    <span class="flex-1 ms-3 whitespace-nowrap">              
                      Product
                    </span>
                    <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-gray-300">{{ stateResTransactionSum && stateResTransactionSum[0].totalProduct }}</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'transaction' }" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <v-icon name="io-bag-handle-sharp"   class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                    <span class="flex-1 ms-3 whitespace-nowrap">Trasanction</span>
                    <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{{ stateResTransactionSum && stateResTransactionSum[0].totalTransactions }}</span>
                  </router-link>
                </li>
                
                <li>
                    <button @click="handleLogout()" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      <v-icon name="md-logout"   class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                    <span class="flex-1 ms-3 whitespace-nowrap">Log Out</span>
                    </button>
                </li>
            </ul>
        </div>
      </aside>

    </main>


    
  </div>

</template>

<script >
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';


export default {

data () {
  return {
    
    sideBar : false,

  }
},

methods: {

  ...mapActions(['logoutUser']),

    openSideBar() {
      this.sideBar = true;
    },
    closeSideBar() {
      this.sideBar = false;
    },

    async handleLogout() {
    try {
      const response = await this.logoutUser(); 

      console.log('Logout response:', response); 
     
      if (response && response.data.pesan) {
       
        toast(response.message, {
          autoClose: 2000,
          position: "top-center",
          theme: "colored",
          type: "success",
          pauseOnHover: false,
          hideProgressBar: true,
          transition: "flip",
          dangerouslyHTMLString: true
        });
      } else {
        toast("Berhasil! Logout", {
            autoClose: 2000,
            position: "top-center",
            theme: "colored",
            type: "success",
            pauseOnHover: false,
            hideProgressBar: true,
            transition: "flip",
            dangerouslyHTMLString: true
        });
      }
      
    } catch (error) {
      toast.error("Logout gagal. Silakan coba lagi.", {
          autoClose: 2000,
          position: "top-center",
          theme: "colored",
          type: "error",
          pauseOnHover: false,
          hideProgressBar: true,
          transition: "flip",
          dangerouslyHTMLString: true
      });
      console.error("Logout error:", error); 
    }
  }

    },

computed: {
  ...mapState(['stateResTransactionSum'])
}
}


</script>