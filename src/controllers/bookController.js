const { count } = require("console")
const BookModel = require("../models/bookModel")
const authorModel = require("../models/authorModels")
const bookModel = require("../models/bookModel")
const createBook = async function(req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const getBooksData = async function(req, res) {
    let allBooks = await authorModel
    req.send({ msg: allBooks })

}

const bookbyChetanBhagat = async function(req, res) {
    const showAuthor = await authorModel.findOne({ author_name: "Chetan Bhagat" });
    const getAuthorID = showAuthor.author_id;
    const allBooks = await bookModel.find({ author_id: getAuthorID }).select({ bookName: 1, _id: 0 });
    res.send({ data: allBooks })
}

const findandUpdateTwoStates = async function(req, res) {
    const findUpdate = await bookModel.findOneAndUpdate({ bookName: "Two States" }, { $set: { price: 100 } }, { new: true });
    console.log(findUpdate)
    const getAuthorID = findUpdate.author_id;
    const getUpdatePrice = await bookModel.findOne({ author_id: getAuthorID, }).select({ price: 1, _id: 0 })
    const allBooks = await authorModel.findOne({ author_id: getAuthorID }).select({ author_name: 1, _id: 0 });
    res.send({ data: [allBooks, getUpdatePrice] });
}

const findBook = async function(req, res) {
    const getBooksPrice = await bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id: 0 });
    let getAuthorNames = []
    for (let i = 0; i < getBooksPrice.length; i++) {
        const getAuthorID = getBooksPrice[i].author_id;
        getAuthorNames = await authorModel.findOne({ author_id: getAuthorID }).select({ author_id: 1, _id: 0 });
    }
    res.send({ data: getAuthorNames });
}
module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.bookbyChetanBhagat = bookbyChetanBhagat;
module.exports.findandUpdateTwoStates = findandUpdateTwoStates;
module.exports.findBook = findBook;