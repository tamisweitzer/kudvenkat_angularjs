
// a filter is a function that returns another a function
app.filter("gender", function() {
    return function(gender) {
    switch (gender) {
      case 1:
       return "Male";
      case 2: 
      return "Female";
      case 3:
       return "Not Defined"
    }
  }
  })