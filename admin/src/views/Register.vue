
<template>

    <div class="w-full">


        <div class="text-5xl font-extrabold text-center md:my-[4rem]">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                Register New Account
            </span>
        </div>
        


        <form @submit.prevent="submitRegister()" class="max-w-sm mx-auto">
            <div class="mb-5">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input  v-model="register.name" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input  v-model="register.email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input v-model="register.password" type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div class="mb-5">
                <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                <input v-model="register.confPassword" type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div class="mb-5">
                <label for="phoneNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PhoneNumber</label>
                <input v-model="register.phoneNumber" type="text" id="phoneNumber" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>

            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
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
        
        register: {
            name:'',
            email: '',
            password: '',
            confPassword: '',
            phoneNumber:''
        }
    
      }
    },

    methods: {
        
        ...mapActions(['registerUser']),

        async submitRegister() {

            const newModule = {
                name:this.register.name,
                email: this.register.email,
                password: this.register.password,
                confPassword: this.register.confPassword,
                phoneNumber: this.register.phoneNumber,
            };

            try {

                await this.registerUser(newModule);
                
            
                toast("Berhasil! Register", {
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
                console.error('Register error:', error);
                const errorMessage = error.response?.data?.msg || "Register gagal. Silakan coba lagi."; 
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
            this.register = {
                name:'',
                email: '',
                password: '',
                confPassword: '',
                phoneNumber:'',
            };
        },


    }
}

</script>