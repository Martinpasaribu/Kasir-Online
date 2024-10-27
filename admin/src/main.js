// Import necessary modules
import { createApp } from 'vue';
import './style.css';
import 'flowbite';
import store from './store';
import App from './App.vue';
import router from './router';

import { addIcons } from "oh-vue-icons";
import { OhVueIcon } from "oh-vue-icons";
import { CoOptions, MdNoteaddRound, MdOpeninbrowser , MdAddSharp , CoShopify,RiDeleteBin4Line , MdDeleteoutline,CoRipple       } from "oh-vue-icons/icons";

addIcons(CoOptions, MdNoteaddRound, MdOpeninbrowser, MdAddSharp , CoShopify,RiDeleteBin4Line , MdDeleteoutline,CoRipple      ); // Tambahkan ikon CoOptions

const app = createApp(App);

// Use router and store in the Vue application
app.use(router);
app.use(store);
app.component("v-icon", OhVueIcon);
// Mount the Vue application
app.mount('#app');
