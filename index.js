function Animal(legs, eyes, color, tail) {
    this.legs = legs;
    this.eyes = eyes;
    this.color = color;
    this.tail = tail;
}
Animal.protoype.getName = function() {
    return "checky";
}
var goose = new Animal(4, 2, "black", "short");
// console.log(goose);

console.log(goose.color);
