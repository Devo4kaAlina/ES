//Part 1
//Task 3
//v.1
var user = {
  name: 'Jhon',
  getName: function () {
    return this.name;
  }
}
console.log(user.getName());
//v.2---------------------------------------------------------------------------
var user = {
  name: 'Jhon',
  getName: getName
};
function getName(){
  return this.name;
}
console.log(user.getName());
//------------------------------------------------------------------------------s
//Task 1
//v.1
var rectangle = {
  height: 10,
  width: 15,
  getSquare: function () {
    return this.height * this.width;
  }
}
console.log(rectangle.getSquare());
//v.2---------------------------------------------------------------------------
//Не могу реализовать через фнкцию, чтобы вводить параметры для прямоугольника
//в аргументы фнкции
// function getSquare(param1, param2) {
//   var rectangle = {
//     height: param1,
//     width: param2
//   };
//    return function getElemSquare(){
//      return this.height * this.height;
//    }
//    console.log(rectangle.getElemSquare);
// }
// console.log(getSquare(5, 15));
//------------------------------------------------------------------------------
//Task 2
var things ={
  price: 10,
  discount: '15%',
  getPrice: function() {
    return this.price
  },
  getPriceWithDiscount: function(){
    return this.price - (this.price * parseInt(this.discount) / 100);
  }
};
console.log(things.getPrice());
console.log(things.getPriceWithDiscount());
//Task 4
