// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import sum from 'sum'
import Vue from 'vue.common'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})

// new Vue({
//   el: "#app",
//   data:{
//     hi: "template 옵션만 있음"
//   },
//   template: "<span></span>"
// });