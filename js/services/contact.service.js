let ContactService = function($http, PARSE,$state) {
  
  let url = PARSE.URL +'classes/contact';
  this.addContact = addContact;
  this.getMessages = getMessages;


  function Contact(contactObj){
    this.name     = contactObj.name;
    this.email    = contactObj.email;
    this.website  = contactObj.website;
    this.message  = contactObj.message;
  }

  function addContact(contactObj){
    let newcontact = new Contact(contactObj);
    return $http.post(url, newcontact, PARSE.CONFIG);
    //return state.go('root.home'); 
  }

  function getMessages(){
    console.log($http.get(url,PARSE.CONFIG));
    return $http.get(url, PARSE.CONFIG);
  }

};

ContactService.$inject = ['$http', 'PARSE', '$state'];

export default ContactService;