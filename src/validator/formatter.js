const trim = function(){
    let name = "   Prabin Dukpa     "
    name = name.trim()
    console.log(name)
}

const changeToUpperCase = function() {
    let upperCaseString = "PRabIN "
    upperCaseString = upperCaseString.toUpperCase()
    console.log(upperCaseString)
}

const changetoLowerCase = function() {
    let lowerCaseString = "PrABiN "
    lowerCaseString = lowerCaseString.toLowerCase()
    console.log(lowerCaseString)
}

module.exports.trimMyString = trim
module.exports.getUpperCaseString = changeToUpperCase
module.exports.changetoLowerCase = changetoLowerCase
