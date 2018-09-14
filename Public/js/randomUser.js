var randomUser = new Vue({
  el: "#user",
  data:{
    profile:{
      "name":'',
      "email":'',
      "location":'',
      "birthdate":'',
      "picture":'',
    }
  },
  computed: {},
  methods: {
    fetchProfile(){
      fetch('https://randomuser.me/api')
      .then( response => response.json())
      .then(json=>{
        randomUser.profile.name = json.results[0].name.first + " " + json.results[0].name.last;
        randomUser.profile.email = json.results[0].email;
        randomUser.profile.location = json.results[0].location.city + ", " + json.results[0].location.state + " " +json.results[0].nat;
        randomUser.profile.birthdate = json.results[0].dob.date;
        randomUser.profile.picture = json.results[0].picture.large;
      })
      .catch(err => {
        console.log("FETCH Error:");
        console.log(err);
      })
    },

    calculateAge(d) {
      return moment().diff(d,'years');
    },
    prettyDate(d) {
      return moment(d).format('l');
    }
  },
  created() {
    this.fetchProfile();
  }


});
