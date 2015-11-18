let HomeController = function(ContactService) {
  
  let vm = this;
  vm.title ='My Friends';

  
  ContactService.getMessages().then((res)=>{
    //console.log('res from HomeController', res);
    vm.contacts = res.data.results;
    //console.log('res', res.data.results);
    return vm.contacts;
  });
  

  //console.log(PARSE);
};

HomeController.$inject = ['ContactService'];

export default HomeController;