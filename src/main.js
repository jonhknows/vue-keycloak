import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import keycloak from './keycloak'

Vue.config.productionTip = false
http://localhost:8080/about
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')


keycloak
  .init({ onLoad: "login-required" })
  .then(()  => {
    
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')

      
      localStorage.setItem("token", keycloak.token);
      localStorage.setItem("refresh-token", keycloak.refreshToken);

  })
  .catch(() => {
    Vue.$log.error("Authenticated Failed");
  });