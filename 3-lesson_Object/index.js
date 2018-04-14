var obj = {
  name: "Sam",
  age: 18
};

function checkProperty(obj) {
  if ('name' in obj) {
    return true;

  }
}

console.log(checkProperty(obj));
