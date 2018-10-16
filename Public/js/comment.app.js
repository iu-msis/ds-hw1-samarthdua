var randomUser = new Vue({
  el: "#user",
  data:{
    comment:{
      "comment_id":'',
      "comment_body":''
    }
  },
  computed: {},
  methods: {

  },
  created() {
    this.fetchProfile();
  }


});
