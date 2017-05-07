Router.route('/', {
  template: 'main',
  onBeforeAction: function() {
    
  }
});


Router.route('/home', {
 name: 'home',
  template: 'home',
  data: function() {

  },
  onBeforeAction: function() {
  
    this.next();
  }
  
});