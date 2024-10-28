
<template>
    <div class="relative">
        <div class="px-10 py-14 font-geist">
            <div class="text-lg font-semibold"><h1>Transaction</h1></div>
            <div class="flex gap-5 justify-end items-center">
                <button class="px-4 text-black py-2 border-[1.5px] border-slate-400 rounded-md">
                    <h1>Share</h1>
                </button>
                <button  @click="openModalAdd" class=" flex  gap-2 px-4 text-white py-2 bg-blue-500 rounded-md">
                    <v-icon name="co-shopify"  class="text-white"/><h1>Bucket</h1>
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
                    
                    <section class="grid grid-cols-2 md:grid-cols-2 md1:grid-cols-4 gap-4">
                        <div v-for="transaction in setParserJson" :key="transaction.invoiceNo" class="h-auto max-w-full p-6 rounded-lg bg-slate-100">
                            <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <div class="flex justify-end items-center gap-3">
                                   
                                    <button @click="openModalDeleted(),picksTransaction(transaction.invoiceNo)" class="bg-red-600 flex text-white rounded-md px-2 py-1"> 
                                        <v-icon name="ri-delete-bin-4-line"   class="text-white"/>
                                        <h1>Deleted</h1>
                                    </button>
                             
                                </div>
                
                                <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 my-5">
                                    <div class="mb-4 text-[10px] md:text-sm lg:text-md  font-medium text-gray-500 dark:text-gray-400">
                                        <h5 class="">No: {{ transaction.invoiceNo }}</h5>
                                        <p> Date: {{ formatDate(transaction.date) }}</p>
                                    </div>
                                    <span class="ms-1 text-sm md:text-md lg:text-lg font-normal text-gray-500 dark:text-gray-400">Total</span>
                                    <div class="flex items-baseline text-gray-900 dark:text-white">
                                      
                                        <span class="text-sm md:text-md lg:text-xl font-extrabold tracking-tight">{{ formatCurrency(transaction.totalPrice) }}</span>
                                        <span class="ms-1 text-sm md:text-md lg:text-lg font-normal text-gray-500 dark:text-gray-400">/Price</span>
                                    </div>
                                    <ul role="list" class="space-y-5 my-7">
                                        <li class="flex items-center">
                                            <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span class="text-sm md:text-md lg:text-lg font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Customer {{ transaction.customer }}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex items-center justify-between mb-4">
                                        <h5 class="text-md font-bold leading-none text-gray-900 dark:text-white">Product buy</h5>
                                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            View all
                                        </a>
                                </div>
                                <div class="flow-root">
                                        <ul  v-for="(item, index) in transaction.product" :key="index" role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                            <li class="py-3 sm:py-4">
                                                <div class="flex items-center">
                                                    <div class="flex-shrink-0">
                                                        <img class="w-8 h-8 rounded-full" src="https://assets.skor.id/crop/0x0:0x0/x/photo/2020/03/23/604720231.png" alt="Neil image">
                                                    </div>
                                                    <div class="flex-1 min-w-0 ms-4">
                                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            {{ item.name }}
                                                        </p>
                                                        <p class="text-[8px] text-gray-500 truncate dark:text-gray-400">
                                                            {{ item.uuid }}
                                                        </p>
                                                    </div>
                                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                        {{ item.quantity }}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
                <div v-if="activeTab === 'Product'">
                 
                    <section  class="h-[20rem] grid grid-cols-2 md:grid-cols-3 md1:grid-cols-4 gap-4">
                        <div v-for="product in stateResProduct" class="h-auto max-w-full p-6 rounded-lg bg-slate-100">
                            <div :key="product.uuid" class="relative  w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div  class="absolute top-2 left-3 bg-blue-500 text-white rounded-md px-1 text-sm md:text-md lg:text-lg">  
                                    <h1>Qty : {{ product.quantity }}</h1>  
                                </div>
                                <button @click="picksProduct(product.uuid),setQuantity(product.quantity),openModalInfo()"  class="absolute top-2 right-3 flex bg-green-500 text-white rounded-md px-2 py-0 md:px-3 md:py-1 lg:px-4 lg:py-2">  
                                    <v-icon name="co-shopify"   class="text-white"/>
    
                                    <h1 class=" text-white rounded-md px-1">   Add</h1>
                                    
                                </button>
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
                <div v-if="activeTab === 'Setting'">
        
                    <p>This is the Setting tab content.</p>
                </div>
            </div>

        </div>         

        <!-- Modal Deleted-->
        <div v-if="deleted"  class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">        
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button @click="closeModal"  type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span  class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this transaction?</h3>
                        <button @click="operator()" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Yes, I'm sure
                        </button>
                        <button @click="closeModal"  data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                    </div>
                </div>
            </div>
        </div>

         <!-- Modal bucket-->
        <div v-if="modalAdd"  class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">        
            <div class="p-4 w-full max-w-2xl max-h-full z-50">            <!-- Modal toggle -->
               <div class=" bg-white rounded-lg shadow dark:bg-gray-700">
                   <!-- Modal header -->
                   <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                       <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                           Add Transaction
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

                       <form @submit.prevent="submitTransaction" class="space-y-4" >
                           <div>
                               <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Customer</label>
                               <input v-model="customer" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                           </div>
                           <div class="overflow-y-auto">
                                <section  class="h-[20rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                    <div v-for="product in dataAddProduct" class="h-auto max-w-full p-6 rounded-lg bg-slate-100">
                                        <div :key="product.uuid" class="relative  w-full max-w-sm lg:w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <div  class="absolute top-2 right-3 bg-blue-500 text-white rounded-md px-1">  
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
                                                    <span class="text-md md:text-xl lg:text-2xl  font-bold text-gray-900 dark:text-white">{{ formatCurrency(product.price) }}</span>
                                                
                                                </div>
                                
                                            </div>
 
                                        </div>


                                    </div>
                                </section>
                           </div>

                           <div class=" flex justify-between pt-[2rem]">
                                <h1> Total Price : {{ formatCurrency(this.totalPrice) }}</h1>
                                <button @click="setResetBucket()" class="bg-red-500 rounded-md   p-2 ">
                                      <v-icon name="md-deleteoutline"   class="text-white"/>
                                </button>
                           </div>
                            
                           <button  type="submit" class="w-full text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500">
                                Create Transaction
                            </button>
    
                       </form>
                   </div>
                
                </div> 

            </div>



        </div>

        <!-- Modal add bucket-->
        <div v-if="modalInfo"  class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">        
            <div class="p-4 w-full max-w-md max-h-full z-50">            

                    <div class=" bg-white rounded-lg shadow dark:bg-gray-700 ">
                        <div class="flex items-center justify-between px-4 py-2 md:px-4  ">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                {{ filteredProduct[0].name }}
                            </h3>

                            
                            <button @click="closeModal()" type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div :class=" filteredProduct[0].quantity <= 0 ? ' mb-2 pb-2 px-5 text-[12px] flex justify-start items-center ':'hidden' " > 
                            <h1 class="bg-rose-200 p-1 px-2 rounded-lg text-red-700">Produk habis</h1>
                        </div>

                    <!-- Modal header -->
                    <div  class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">

                            <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount Product</label>
                            <div class="relative flex items-center max-w-[8rem]">
                                <button type="button" @click="min()" id="decrement-button"class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <input v-model="this.amountChapter"  type="number" id="quantity-input" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500-500 focus:border-blue-500-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500-500 dark:focus:border-blue-500-500" :placeholder="amountChapter" required />
                                <!-- @input="validateInput" -->
                                <button type="button" @click="plus()" id="increment-button"  class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                            
                    </div>

                    <div class="flex justify-center items-center p-5">
                            <button  @click="addProduct(filteredProduct[0].uuid,filteredProduct[0].name,amountChapter,filteredProduct[0].price)" 
                                type="submit" 
                                :disabled="amountChapter <= 0 || amountChapter > quantity " 
                                :class=" amountChapter <= 0 || amountChapter > quantity ? ' cursor-not-allowed max-w-md text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500'
                                                            :' max-w-md text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500'">
                                Add Bucket
                            </button>
                    </div>
                   
                    

                    </div>
                
            </div> 

        </div>



        <!-- Baground Modal -->
        <div v-show="deleted || modalInfo || modalAddModule || modalAdd" @click="closeSideBar()" class="fixed inset-0 z-40 bg-black bg-opacity-50"></div>



        
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
      tabs: ['Result', 'Product', 'Settings'] ,
      deleted : false,
      modalInfo : false,
      modalAdd : false,
      modalAddModule : false,
      pickMateri : '',
      amountChapter:'0',
      amountPrice:'0',
      id:'',
      quantity:'',
      customer: '',


    }
        
    },

  
  methods: {


        openModalAdd() {
            this.modalAdd = true;
        },
        openModalInfo() {
            this.modalInfo = true;
        },
        openModalDeleted() {
            this.deleted = true;
        },
        closeModal() {
            this.deleted = false;
            this.modalInfo = false;
            this.modalAddModule = false;
            this.amountChapter = 0;
            this.modalAdd = false;
        },
        picksMateri(value){
            this.pickMateri = value
        },

        validateInput(event) {
            const value = event.target.value;
            if (value < 0) {
                this.amountChapter = 0;
            } else if (value > this.quantity) {
                this.amountChapter = this.quantity;
            } else {
                this.amountChapter = value;
            }
        },

        formatDate(timestamp) {
            const date = new Date(timestamp);
            return date.toLocaleDateString(); // Mengonversi ke format tanggal lokal
            },

        handleAddProduct(product) {
            console.log("Product added:", product); // Debugging statement
            this.setQuantity(product.quantity);
            this.picksProduct(product.uuid);
            this.openModalInfo();
        },
        handleAddProduct(product) {
            console.log("Product added:", product); // Debugging statement
            this.setQuantity(product.quantity);
            this.picksProduct(product.uuid);
            this.openModalInfo();
        },

        setQuantity(value){
            this.quantity = value;
            console.log("hasil Qty : ",this.quantity);
        },
        
        plus(){
            if(this.quantity > this.amountChapter){
                this.amountChapter++;
            }
        },
        
        min(){
            if(this.amountChapter > 0){
                this.amountChapter--;
            };
        },

        async addProduct(w,x,y,z){
            const product = {
                uuid:w,
                name:x,
                quantity:y,
                price:z
            };
            console.log("hasil add:",product);
            

            try {
                await this.setAddProduct({product});

                if(this.resAddProduct){
                const errorMessage = this.resAddProduct
                toast.success(errorMessage, {
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
            } catch (error) {
                console.error('Add Bucket error:', error);
                const errorMessage = error.response?.data?.message || "Add Bucket gagal. Silakan coba lagi.";
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

        async operator(){
            await this.delTransaction(), 

            toast(" Transaction berhasil dihapus!", {
                autoClose: 2000,
                position: "top-center",
                theme: "colored",
                type: "success",
                pauseOnHover: false,
                hideProgressBar: true,
                transition: "flip",
                dangerouslyHTMLString: true
            }); 
            await this.getTransaction();
            this.closeModal();
        },

        async submitTransaction() {


            try {

                const newMateri = {
                    customer: this.customer,
                    product: this.dataAddProduct,
                    totalPrice: this.totalPrice
                };

            await this.addTransaction(newMateri);
            await this.getProduct();
            await this.getTransaction();

            this.setNull();
            this.closeModal();

            toast(" Transaction berhasil dibuat!", {
                autoClose: 2000,
                position: "top-center",
                theme: "colored",
                type: "success",
                pauseOnHover: false,
                hideProgressBar: true,
                transition: "flip",
                dangerouslyHTMLString: true
            }); 
            } catch (error) {
                console.error('Add Transaction error:', error);
                const errorMessage = error.response?.data?.message || "Add Transaction gagal. Silakan coba lagi.";
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


        setNull(){
            this.customer='',
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

        async getAllTransaction(){
            try {

                await this.getTransaction();

            } catch (error) {
                console.error('Load Data Transaction error:', error);
                const errorMessage = error.response?.data?.message || "Gagal Load Data Transaction.";
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

        async getAllProduct(){
            try {

                await this.getProduct();

            } catch (error) {
                console.error('Load Data Product error:', error);
                const errorMessage = error.response?.data?.message || "Gagal Load Data Product.";
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
        ...mapActions(['getTransaction','addTransaction','delTransaction']),
        ...mapActions(['picksProduct','picksTransaction']),
        ...mapMutations(['setAddProduct','setResetBucket'])



    },

    computed: {

        ...mapState(['stateResTransaction','dataAddProduct','resAddProduct']), 
        ...mapState(['stateResProduct','isLoading']), 
        ...mapGetters(['filteredProduct','totalPrice','setParserJson']),

 
        
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
        
        
        this.getAllTransaction();
        this.getAllProduct();

   
    }

}
</script>