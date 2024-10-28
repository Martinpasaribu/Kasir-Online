
<template>

    <div>
            <div class="p-4 sm:m4">


                <div class="flex justify-end my-4">
                    <router-link :to="{ name: 'product' }" type="button" class="text-white bg-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 ">
                        <v-icon name="io-cube"   class="w-5 h-5 mr-2 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        Product
                    </router-link>

                    <router-link :to="{ name: 'transaction' }"type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                        </svg>
                        Transaction
                    </router-link>
                </div>

                <div class="p-4 border-2 border-green-500 border-dashed rounded-lg ">
                    
                    <div class="grid grid-cols-3 gap-4 mb-4">
                        <div class="flex items-center justify-center h-32 rounded bg-gray-50 dark:bg-gray-800">
                            <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                                <div class="flex justify-between">
                                    <div>
                                        <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">{{ formatCurrency(stateResTransactionSum && stateResTransactionSum[0].totalAmount) }}</h5>
                                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Amount Price All Transaction</p>
                                    </div>
                                    <div
                                        class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                                        12%
                                        <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="flex items-center justify-center h-48 rounded bg-gray-50 dark:bg-gray-800">
                            <div class="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-4">
                                <a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                                    <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                                    </svg>
                                    Date Summary
                                </a>
                                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Summary OnTime</h2>
                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">{{ formatDate(stateResTransactionSum && stateResTransactionSum[0].summaryDate) }}
                                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center h-46 rounded bg-gray-50 dark:bg-gray-800">
                            <div class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                                <div class="flex items-center">
                                <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
                                    <svg class="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                                    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
                                    <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">{{ stateResTransactionSum && stateResTransactionSum[0].totalTransactions }} </h5>
                                    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">People buy per week</p>
                                </div>
                                </div>
                                <div>
                                <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                                    <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                                    </svg>
                                    42.5%
                                </span>
                                </div>
                            </div>
                            <div class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                                <div class="flex items-center">
                                <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
                                    <v-icon name="io-cube"   class="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>

                                </div>
                                <div class="px-1">
                                    <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">{{ stateResTransactionSum && stateResTransactionSum[0].totalProduct }} </h5>
                                    <p class=" mr-5 text-sm font-normal text-gray-500 dark:text-gray-400">Product Available</p>
                                </div>
                                </div>
                                <div>
                                <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                                    <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                                    </svg>
                                    2.5%
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center  mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <div class=" flex justify-around w-full items-center p-4 rounded-lg">

                                    <div class=" flex bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
           
                                    <apexchart type="area" :options="chartOptions" :series="chartOptions.series"></apexchart>


                                    </div>

                                    <div class=" flex  bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
           

                                    <apexchart type="line" :options="chartOptions2" :series="series2" />

                                    </div>
                        
                            </div>
                       
                    </div>

                    <div class="flex flex-col   w-full">
                        <div class="flex items-center justify-start h-32 rounded bg-gray-50 dark:bg-gray-800">
                            <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                                <div class="grid grid-cols-4 gap-3 mb-2">
                                    <dl class="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                                        <dt class="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">64</dt>
                                        <dd class="text-blue-600 dark:text-blue-300 text-sm font-medium">Access</dd>
                                    </dl>
                                    <dl class="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                                        <dt class="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">{{ stateResTransactionSum && stateResTransactionSum[0].totalStock }}</dt>
                                        <dd class="text-teal-600 dark:text-teal-300 text-sm font-medium">Total Stock</dd>
                                    </dl>
                                    <dl class="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px] px-1">
                                        <dt class="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">{{ stateResTransactionSum && stateResTransactionSum[0].totalProductEmpty }}</dt>
                                        <dd class="text-orange-600 dark:text-orange-300 text-sm font-medium">Empty Product</dd>
                                    </dl>
                                    <dl class="bg-purple-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px] px-1">
                                        <dt class="w-8 h-8 rounded-full bg-purple-100 dark:bg-gray-500 text-purple-600 text-sm font-medium flex items-center justify-center mb-1">{{ stateResTransactionSum && stateResTransactionSum[0].totalTransactionDelete }}</dt>
                                        <dd class="text-purple-600 dark:text-purple-300 text-sm font-medium">Transaction Deleted</dd>
                                    </dl>
                                </div>
                            </div>

                        </div>
                        <div class="flex gap-4 px-4">                                   
                            <div class="w-full mb-10 ">
                                <div class="flex items-center justify-between mb-4 p-5 bg-gray-50">
                                        <h5 class="text-md font-bold leading-none text-gray-900 dark:text-white"> Stock product empty</h5>
                                        <div class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            View all
                                        </div>
                                </div>
                                <div v-for="transaction in stateResTransactionSum" :key="transaction.invoiceNo"  class="flex flex-col items-center justify-center px-[.5rem] py-5 overflow-y-auto rounded dark:bg-gray-800  border border-blue-200">         
                                    <div class="h-[10rem]">
                                            <ul  v-for="(item, index) in transaction.totalProductEmptyData" :key="index" role="list" class="divide-y divide-gray-200 dark:divide-gray-700 ">
                                                <li class="py-3 sm:py-4 px-6">
                                                    <div class="flex items-center px-12 py-4 gap-4 bg-gray-100">
                                                        <div class="flex-shrink-0">
                                                            <img class="w-10 h-10 rounded-full" src="https://assets.skor.id/crop/0x0:0x0/x/photo/2020/03/23/604720231.png" alt="Neil image">
                                                        </div>
                                                        <div class="flex-1 min-w-0 ms-4">
                                                            <p class="text-md font-medium text-gray-900 truncate dark:text-white">
                                                                {{ item.name }}
                                                            </p>
                                                            <p class="text-[10px] text-gray-500 truncate dark:text-gray-400">
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
                            <div class="w-full mb-10 ">
                                <div class="flex items-center justify-between mb-4 p-5 bg-gray-50">
                                        <h5 class="text-md font-bold leading-none text-gray-900 dark:text-white"> Transaction deleted</h5>
                                        <div class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            View all
                                        </div>
                                </div>
                                <div v-for="transaction in stateResTransactionSum" :key="transaction.invoiceNo"  class="flex flex-col items-center justify-center px-[.5rem] py-5 overflow-y-auto rounded dark:bg-gray-800  border border-blue-200">         
                                    <div class="h-[10rem]">
                                            <ul  v-for="(item, index) in transaction.totalTransactionDeletedData" :key="index" role="list" class="divide-y divide-gray-200 dark:divide-gray-700 ">
                                                <li class="py-3 sm:py-4 px-6">
                                                    <div class="flex items-center px-12 py-4 gap-4 bg-gray-100">
                                                        <div class="flex-shrink-0">
                                                            <img class="w-10 h-10 rounded-full" src="https://assets.skor.id/crop/0x0:0x0/x/photo/2020/03/23/604720231.png" alt="Neil image">
                                                        </div>
                                                        <div class="flex-1 min-w-0 ms-4">
                                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                No : {{ item.invoiceNo }}
                                                            </p>
                                                            <p class="text-[10px] text-gray-500 truncate dark:text-gray-400">
                                                                {{ item.deletedAt }}
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

                        </div>

                    </div>

                </div>
            </div>

    </div>

</template>

<style scoped>
.apexcharts-canvas {
  max-width: 100%;
}
</style>

<script>

import ApexCharts from 'apexcharts';
import VueApexCharts from "vue3-apexcharts";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';


export default {

    components: {

        apexchart: VueApexCharts,

    },
    data () {
      return {
        
        sideBar : false,
    

        chartOptions: {
            chart: {
                height: "100%",
                maxWidth: "100%",
                type: "area",
                fontFamily: "Inter, sans-serif",
                dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
            },
            tooltip: {
                enabled: true,
                    x: {
                        show: false,
                    },
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.55,
                    opacityTo: 0,
                    shade: "#1C64F2",
                    gradientToColors: ["#1C64F2"],
                },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
                width: 6,
            },
            grid: {
                show: false,
                strokeDashArray: 4,
                padding: {
                    left: 2,
                    right: 2,
                    top: 0
                },
            },
            series: [
                {
                    name: "New users",
                    data: [6500, 6418, 6456, 6526, 6356, 6456],
                    color: "#1A56DB",
                },
            ],
            xaxis: {
            categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
            labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },

            },
            yaxis: {
                show: false,
                },
            },


        series2: [
            {
            name: 'Website Traffic',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            },
        ],
        chartOptions2: {
            chart: {
                height: 350,
                width:500,
                type: 'line',
            },
            title: {
                text: 'Traffic transaction',
                align: 'left',
            },
            xaxis: {
            categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            ],
            },
        },
        };
        
      },
    

    methods: {

        openSideBar() {
        this.sideBar = true;
        },

        closeSideBar() {
        this.sideBar = false;
        },

        formatDate(timestamp) {
            const date = new Date(timestamp);
            return date.toLocaleDateString(); // Mengonversi ke format tanggal lokal
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

        async getSummary(){
            try {

                await this.getTransactionSum();



            } catch (error) {
                console.error('Load Data Summary error:', error);
                const errorMessage = error.response?.data?.message || "Server has problem Load Data Summary failed.";
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

        ...mapActions(['getTransactionSum','']),
    },
    
    computed: {

        ...mapState(['stateResTransactionSum','isLoading'])

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
        
        
        this.getSummary();

   
    }
}

</script>