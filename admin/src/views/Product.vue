
<template>
    <div class="relative">
        <div class="px-10 py-14 font-geist">
            <div class="text-lg font-semibold"><h1>Product</h1></div>
            <div class="flex gap-5 justify-end items-center">
                <button class="px-4 text-black py-2 border-[1.5px] border-slate-400 rounded-md">
                    <h1>Share</h1>
                </button>
                <button  @click="openModalAdd" class="px-4 text-white py-2 bg-blue-500 rounded-md">
                    <h1>Create</h1>
                </button>
            </div>

            <div class="">
                <ul class="flex gap-10 mt-4 ">
                <li 
                    v-for="tab in tabs" 
                    :key="tab" 
                    @click="activeTab = tab"
                    :class="{
                    'text-blue-500 ': activeTab === tab,
                    'text-gray-500 border-transparent': activeTab !== tab
                    }"
                    class="cursor-pointer  px-4 py-2 transition-all duration-300 relative"
                >
                    {{ tab }}
                    <div v-if="activeTab === tab" class="absolute -bottom-[1.5px] left-0 right-0 h-[2px] bg-blue-500 z-20"></div>

                </li>
                </ul>
                <div class="bg-gray-300 h-px  "></div>
            </div>

            <div class="mt-4">
                <div v-if="activeTab === 'Result'">
                    <!-- Content for Result -->
                    
                    <section  class="grid grid-cols-2 md:grid-cols-3 md1:grid-cols-4 gap-4">
                        <div v-for="product in stateResProduct" class="h-auto max-w-full p-6 rounded-lg bg-slate-100">
                            <div :key="product.uuid" class="relative  w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div  class="absolute top-2 right-3 bg-blue-500 text-white rounded-md px-2">  
                                    <h1>Qty : {{ product.quantity }}</h1>  
                                </div>
                                <a href="#">
                                    <img class="p-8 rounded-t-lg" src="https://assets.skor.id/crop/0x0:0x0/x/photo/2020/03/23/604720231.png" alt="product image" />
                                </a>
                                
                                <div class="px-5 pb-5">
                                    <a href="#">
                                        <h5 class=" text-sm md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.name }}</h5>
                                    </a>
                                    <div class="flex items-center mt-2.5 mb-5">
                                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                        </div>
                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-md md:text-xl lg:text-3xl  font-bold text-gray-900 dark:text-white">{{ formatCurrency(product.price) }}</span>
                                      
                                    </div>
                                    <div>
                                        <h1 class="text-sm md:text-md  ">{{ product.description }}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    




                </div>
                <div v-if="activeTab === 'Subject'">
                 
                    <p>This is the Materi tab content.</p>
                </div>
                <div v-if="activeTab === 'Setting'">
        
                    <p>This is the Setting tab content.</p>
                </div>
            </div>

        </div>         

        <!-- Modal Add-->
        <div v-if="modalAdd"  class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">        
            <div class="p-4 w-full max-w-md max-h-full z-50">            <!-- Modal toggle -->
               <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
                   <!-- Modal header -->
                   <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                       <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                           Add Product
                       </h3>
                       <button @click="closeModal()" type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                           <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                           </svg>
                           <span class="sr-only">Close modal</span>
                       </button>
                   </div>
                   <!-- Modal body -->
                   <div class="p-4 md:p-5">

                       <form @submit.prevent="submitProduct" class="space-y-4" >
                           <div>
                               <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Product</label>
                               <input v-model="form.name" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                           </div>
 
                           <div>
                               <label for="subtitle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                               <input  v-model="form.price" type="number" name="subtitle" id="subtitle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                           </div>

                           <div>
                               <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount Product</label>
                               <div class="relative flex items-center max-w-[8rem]">
                                   <button type="button" @click="min()" id="decrement-button"class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                       <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                        </svg>
                                    </button>
                                    <input v-model="this.amountChapter" type="text" id="quantity-input" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500-500 focus:border-blue-500-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500-500 dark:focus:border-blue-500-500" :placeholder="amountChapter" required />
                                    
                                    <button type="button" @click="plus()" id="increment-button"  class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                        </svg>
                                    </button>
                                </div>
                                
                            </div>
                            <div>
                                 <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                 <textarea v-model="form.description" id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500-500 focus:border-blue-500-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500-500 dark:focus:border-blue-500-500" placeholder="Write your thoughts here..."></textarea>
 
                             </div>
                            
                           <button  type="submit" class="w-full text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500">
                                Create Product
                            </button>
    
                       </form>
                   </div>
                
                </div> 

            </div>



        </div>

        <!-- Modal Info-->
        <div v-if="modalInfo"  class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">        
            <div class="p-4 w-full max-w-md max-h-full z-50">            
               
                <div class=" bg-white rounded-lg shadow dark:bg-gray-700">

                <!-- Modal header -->
                   <div  class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                       <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                         
                       </h3>
                       <button @click="closeModal()" type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                           <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                           </svg>
                           <span class="sr-only">Close modal</span>
                       </button>
                   </div>


                </div>
                
            </div> 

        </div>



        <!-- Baground Modal -->
        <div v-show="modalAdd || modalInfo || modalAddModule" @click="closeSideBar()" class="fixed inset-0 z-40 bg-black bg-opacity-50"></div>



        
    </div>
</template>



<script>

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';
import { CoOptions } from "oh-vue-icons/icons";

export default {

  data() {
    return {
      activeTab: 'Result', 
      tabs: ['Result', 'Subject', 'Settings'] ,
      modalAdd : false,
      modalInfo : false,
      modalAddModule : false,
      pickMateri : '',
      amountChapter:'0',
      id:'',

      form: {
        name: '',
        quantity: '',
        description: '',
        price:''
        },

        }
        
    },

  
  methods: {


        openModalAdd() {
            this.modalAdd = true;
        },
        openModalInfo() {
            this.modalInfo = true;
        },
        openModalAddModule() {
            this.modalAddModule = true;
        },
        closeModal() {
            this.modalAdd = false;
            this.modalInfo = false;
            this.modalAddModule = false;
            this.amountChapter = 0;
        },
        
        picksMateri(value){
            this.pickMateri = value
        },
        
        plus(){
            this.amountChapter++;
        },
        
        min(){
            if(this.amountChapter > 0){
                this.amountChapter--;
            };
        },

        async submitProduct() {

            const newMateri = {
                name: this.form.name,
                quantity: this.amountChapter,
                description: this.form.description, 
                price: this.form.price
            };

            await this.addProduct(newMateri);
            await this.getProduct();
            this.setNull();
            this.closeModal();

            toast(" Product Berhasil! Ditambah", {
                autoClose: 2000,
                position: "top-center",
                theme: "colored",
                type: "success",
                pauseOnHover: false,
                hideProgressBar: true,
                transition: "flip",
                dangerouslyHTMLString: true
            }); 
        },


        setNull(){
            this.form = {
                name: '',
                quantity: '',
                description: '',
                price:''
            };
            this.amountChapter='';
            
        },

        formatCurrency(value) {
            if (!value) return '';
            return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
            }).format(value);
        
        }, 

        async getAllProduct(){
            try {

                await this.getProduct();

            } catch (error) {
                console.error('Load Data Product error:', error);
                const errorMessage = error.response?.data?.message || "Server has problem Load Data Product failed.";
                toast.error(errorMessage, {
                    autoClose: 2000,
                    position: "top-right",
                    theme: "colored",
                    type: "error",
                    pauseOnHover: false,
                    hideProgressBar: true,
                    transition: "flip",
                    dangerouslyHTMLString: true
                });
            }
        },

        ...mapActions(['getProduct']),
        ...mapActions(['addProduct']),




    },

    computed: {

        ...mapState(['stateResProduct','isLoading']), 
        ...mapState(['stateResPostProduct']),


        
    },

    watch: {
        isLoading(newVal) {
        if (newVal) {
            toast.info("Loading data...", {
            autoClose: false,
            isLoading: true,
            position: "top-right",
            theme: "colored",
            type: "loading",
            pauseOnHover: false,
            hideProgressBar: true,
            transition: "side",
            dangerouslyHTMLString: true
            });
        } else {
            toast.clearAll();
        }
        }
    },
    

    mounted() {
        
        
        this.getAllProduct();



    }

}
</script>