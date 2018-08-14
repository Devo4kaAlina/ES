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
