 import say from './src/util.js'
 console.log('tewat')
 say();


 import Vue from 'vue';
 import App from './app.vue';


 var app = new Vue({
     el: '#app',
     data: {
         message: 'tettttttt!'
     },
     template: '<App/>',
     components: { App }
 });