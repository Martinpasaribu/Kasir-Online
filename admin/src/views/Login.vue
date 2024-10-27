
<template>

    <div>


        <div class="text-5xl font-extrabold text-center md:my-[4rem]">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                Login Your Account
            </span>
        </div>

        <form @submit.prevent="submitLogin()" class="space-y-4" >
            <div  class="max-w-sm mx-auto">
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
                    <input v-model="login.email"  type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Password</label>
                    <input v-model="login.password"  type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-5">
                    <label for="confPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                    <input v-model="login.confPassword"  type="confPassword" id="confPassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </form>


    </div>

</template>



<script>

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';

export default {

    data () {
      return {
        
        login: {
            email: '',
            password: '',
            confPassword: ''
        }
    
      }
    },

    methods: {
        
        ...mapActions(['loginUser']),

        async submitLogin() {

            const newModule = {
                email: this.login.email,
                password: this.login.password,
                confPassword: this.login.confPassword
            };

            try {

                await this.loginUser(newModule);
                
            
                toast("Berhasil! Login", {
                    autoClose: 2000,
                    position: "top-center",
                    theme: "colored",
                    type: "success",
                    pauseOnHover: false,
                    hideProgressBar: true,
                    transition: "flip",
                    dangerouslyHTMLString: true
                });
                
                this.setNull();

            } catch (error) {
                console.error('Login error:', error);
                const errorMessage = error.response?.data?.msg || "Login gagal. Silakan coba lagi."; 
                toast.error(errorMessage, {
                    autoClose: 2000,
                    position: "top-center",
                    theme: "colored",
                    type: "error",
                    pauseOnHover: false,
                    hideProgressBar: true,
                    transition: "flip",
                    dangerouslyHTMLString: true
                });
            }
        },

        setNull() {
            this.login = {
                email: '',
                password: '',
                confPassword: ''
            };
        },


    }
}

</script>