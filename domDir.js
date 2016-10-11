angular.module("angularLinks")
.directive("domDir", function(){
  var link = function(scope, element){
    scope.name = "Lance";
    element.on("click", function(){
      element.css("color", "red");
      // when the element is clicked we can tell it to do something on the second line of element
    })
  };

  return{
    template: '<h1>HEY {{name}}</h1>',
    restrict: "E",
    link: link
    // easier if you name a link function above the return to reference here
    // use the link function in angular instead of jquery
    // if you create a view with a controller associated with that view and you put a view in that controller than it works...when jquery will work with angular
  }
});
