import { createApp } from 'vue';
import firebase from 'firebase';

import App from './App.vue';
import router from './router';
import store from './store';

import './assets/tailwind.css';

const firebaseConfig = {
	apiKey: process.env.FB_API_KEY,
	authDomain: process.env.FB_AUTH_DOMAIN,
	projectId: 'racinghaus-fa3fc',
	storageBucket: 'racinghaus-fa3fc.appspot.com',
	messagingSenderId: process.env.FB_MESSAGE_SENDER_ID,
	appId: process.env.FB_APP_ID,
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app');