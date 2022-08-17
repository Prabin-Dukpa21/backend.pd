const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
//----------------1------solution

//------------2------
const allBooksList = async function (req, res) {
    let list = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: list })
}

//------------3--------
const yearDetails = async function (req, res) {
    let yearList= await BookModel.find({ year: req.body.year }).select({bookName:1,_id:0})
    res.send(yearList)
 }

//------------4----------
const particularBooks = async function (req, res) {
    
    let specificBooks = await BookModel.find(req.body)
    res.send({msg:specificBooks})
}


//----------5------
const priceDetails= async function(req,res){
    let list = await BookModel.find({"prices.indianPrice": {$in: ["100INR", "200INR","500INR"]}} )
    res.send({ msg: list })
}

//----------6--------
const randomBooks= async function(req, res) {
    let allBooks = await BookModel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
    res.send({msg: allBooks })
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(data)
    res.send({msg: allBooks})
}



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.priceDetails= priceDetails
module.exports.allBooksList= allBooksList
module.exports.yearDetails= yearDetails
module.exports.particularBooks= particularBooks 
module.exports.randomBooks= randomBooks









