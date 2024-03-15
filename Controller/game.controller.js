const Game = require('../model/game.model')


//=============================create========================
const createGame = async function (req, res, next) {
    try {
        // console.log(req.body);
        if(!req.body.name || !req.body.type){
            throw new Error("Please add valid field")
        }
        const data = await Game.create(req.body)
        res.status(201).json({
            status: "Success",
            message: "Game is Generated",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }
};


//================================allGames===============================
const allGame = async function (req, res, next) {
    try {
        const data = await Game.find()
        res.status(200).json({
            status: "Success",
            message: "allGame found",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
};


//===========================update==============================
const editGame = async function (req, res, next) {
    try {
        const data = await Game.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            status: "Success",
            message: "Game is successfully updated",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
};


//===========================DeleTe==============================
const deleteGame = async function (req, res, next) {
    try {
        await Game.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Success",
            message: "Game is successfully remove",
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
};

//=======================searchbyName====================
const searchGame = async function (req, res, next) {
    try {
        const data = await Game.find({ name: req.body.name })
        res.status(200).json({
            status: "success",
            message: "Game sucessfully found",
            data
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "fail",
            message: error.message
        });

    }
};



module.exports = {
    createGame,
    allGame,
    editGame,
    deleteGame,
    searchGame
}