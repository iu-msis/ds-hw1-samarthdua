var commentApp = new Vue({
  el: "#commentPage",
  data:{
    comment:{
      comment_id:'',
      comment_body:''
    },
    commentArray: [],
    commentForm: {}
  },
  computed: {},
  methods: {


    fetchComments() {
      fetch('api/comment.php')
      .then( response => response.json() )
      .then( json => {commentApp.commentArray = json; console.log(commentApp.CommentArray)} )
      .catch( err => {
        console.log('COMMENT LIST ERROR:');
        console.log(err);
      })
    },
    getEmptyCommentForm() {
      return {
        comment_body = ''
      }
    }
  },
  created() {
    this.fetchComments();
  }


});
