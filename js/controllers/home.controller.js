let HomeController = function(PARSE) {
  
  let vm = this;
  vm.title ='My Friends';

  console.log(PARSE);
};

HomeController.$inject = ['PARSE'];

export default HomeController;