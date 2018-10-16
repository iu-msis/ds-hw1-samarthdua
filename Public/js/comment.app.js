var commentApp = new Vue({
  el: "#commentPage",
  data:{
    comment:{
      "comment_id":'',
      "comment_body":''
    },
    commentArray: [],
    commentForm: {}
  },
  computed: {},
  methods: {


    fetchComments() {
      fetch('api/comment.php')
      .then( response => response.json() )
      .then( json => {commentApp.commentArray = json} )
      .catch( err => {
        console.log('COMMENT LIST ERROR:');
        console.log(err);
      })
    }
  },
  created() {
    this.fetchComments();
  }


});
