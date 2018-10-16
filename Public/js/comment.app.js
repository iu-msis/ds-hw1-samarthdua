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

    handleCommentForm(e) {
      const s = JSON.stringify(this.commentForm);
      console.log(s);

      fetch('api/comment.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s
      })

      .then( response => response.json() )
      .then( json => {this.commentArray.push(json)})
      .catch( err => {
        console.error('WORK POST ERROR:');
        console.error(err);
      })

      this.commentForm = this.getEmptyCommentForm();
    },

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
        comment_body : ''
      }
    }
  },
  created() {
    this.fetchComments();
    this.commentForm = this.getEmptyCommentForm();
  }


});
