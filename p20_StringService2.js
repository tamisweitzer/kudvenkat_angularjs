app.factory('stringService2', function() {
  return   {
    processString: function(input) {
      let output = input.toUpperCase();
      return output
    }
    
  }
})