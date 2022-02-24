var valProd = 100
var valDisc = 50

var discountF = require("./calDisount")

var finalV = discountF(valProd, valDisc)

console.log("Valor do Produto: " + finalV)