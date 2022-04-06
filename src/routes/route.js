const express = require('express');
const logger = require('../logger/logger.js')
const helper = require('../util/helper.js')
const formatter = require('../validation/formatter.js')

const router = express.Router();

router.get('/test-me', function(req, res) {

    logger.welcome();
    helper.printDate();
    helper.printMonth();
    helper.getBatchInfo();
    formatter.trim("functionUP");
    formatter.changetoLowerCase("FunctioUp is Coding BootCamp");
    formatter.changetoLowerCase("FunctioUp is Coding BootCamp");
    res.send('My first ever api!')
});
router.get('/hello', function(req, res) {
    let monthNames = ["january", "March", "April", "May", "June", "July",
        "August", "september", "October", "November", "December"
    ];

    let _ = require("lodash");
    console.log(_.chunk(monthNames, monthNames.length / 4));
    let oddArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    console.log(_.tail(oddArray))

    let unionFx = function(...a) {
        return _.union(...a);
    }
    let a1 = [1, 5, 6, 4];
    let a2 = [3, 4, 5, 7];
    let a3 = [7, 6, 7, 9];
    let a4 = [3, 2, 3, 4];
    let a5 = [1, 8, 3, 9];
    console.log(unionFx(a1, a2, a3, a4, a5));

    let movies = [
        ["horror", "The Shining"],
        ["drama", "Titanic"],
        ["Thriller", "Shutter Island"],
        ["fantasy", "pans Labyrinth"]
    ]
    console.log(_.fromPairs(moviesArr));
    res.send('problem 4');
});


module.exports = router;
// adding this comment for no reason