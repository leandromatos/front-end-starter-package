/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */
import Welcome from './components/Welcome.vue'

const app = new Vue({
    el: 'main',
    components: {
        Welcome
    }
});

import Header from './partials/Header'
import Content from './partials/Content'

$(function() {
    new Header()
    new Content()
})
