let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
console.log("beforeCreate()", this.message);
  },
  created(){
    console.log("create", this.message);
  },
  beforeMount() {
console.log("mount", this.$el);
  },
  mounted(){
    console.log("mounted", this.$el);
  }
}).mount('#app')