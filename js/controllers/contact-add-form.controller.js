let ContactAdd = function(ContactService, $scope) {
 
  let vm = this; 
  vm.addContact       = addContact;
  vm.validateName     = validateName;
  vm.validateEmail    = validateEmail;
  vm.validateWebsite  = validateWebsite; 
  vm.validateMessage  = validateMessage;
  vm.validateAll      = validateAll;

  function addContact(contactObj){
    ContactService.addContact(contactObj).then((res)=>{
      //console.log('res', res);
      //console.log('cont', contactObj);
      $scope.contactObj.name = "";
      $scope.contactObj.email ="";
      $scope.contactObj.website="";
      $scope.contactObj.message="";
      console.log('now', contactObj);
    });
  } 
  //validating name
  let validateName =(name)=>{
    console.log(name.length);
    if(name.length <= 1){
      vm.errMsgName="Name cannot be left empty";
      console.log("Name cannot be left empty");
    }else{
      vm.errMsgName ="";
      //vm.errMsgName = name.length;  
    }
  };

  $scope.$watch('contactObj.name', function(newVal, prevVal){
    if(!newVal) return;

    console.log(newVal);
    validateName(newVal);
  });

  //validating email
  let validateEmail =(email)=>{
    if(email.search('@') < 0){
      vm.errMsgEmail="Email must have an '@'";
    } else {
      vm.errMsgEmail = "";
    }
  };

  $scope.$watch('contactObj.email', function(newVal, prevVal){
    if(!newVal) return;
    validateEmail(newVal);
  });

  //validating message
  let validateMessage =(message)=>{
    if(message.length <= 1){
      vm.errMsgMessage="Message cannot be left empty";
    }else{
      vm.errMsgMessage="";
    }
  };

  $scope.$watch('contactObj.message', function(newVal, prevVal){
    if(!newVal) return;
    validateMessage(newVal);
  });



  //validate website
  let validateWebsite =(website)=>{
    if( (website.indexOf('http://') < 0 ) && (website.indexOf('https://') < 0) ){
      vm.errMsgWebsite="Website must start with 'http://' or 'https://'";
    } else {
      vm.errMsgWebsite = "";
    }
  };

  $scope.$watch('contactObj.website', function(newVal, prevVal){
    if(!newVal) return;
    validateWebsite(newVal);
  });


  //validate ALL again ---THANKS TIM !!!!
  let validateAll = (contactObj)=>{
    console.log(contactObj);
    validateName(contactObj.name);
    validateEmail(contactObj.email);
    validateWebsite(contactObj.website);
    validateMessage(contactObj.message);
  };

};

ContactAdd.$inject = ['ContactService', '$scope'];

export default ContactAdd;