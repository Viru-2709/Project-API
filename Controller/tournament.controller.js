const Tournament = require('../model/tournament.model')


//=============================create========================
const createTournament = async function (req, res, next) {
    try {
        console.log(req.body);
        if (!req.body.name || !req.body.orgainizer || !req.body.pricepoll || !req.body.game) {
            throw new Error("Please add valid field")
        }
        const data = await Tournament.create(req.body)
        res.status(201).json({
            status: "Success",
            message: "Tournament is  Created",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }
};


//================================allTorunament===============================
const allTournament = async function (req, res, next) {
    try {
        const data = await Tournament.find().populate('game')
        res.status(200).json({
            status: "Success",
            message: "allTournament find",
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
const editTournament = async function (req, res, next) {
    try {
        const data = await Tournament.findByIdAndUpdate(req.params.id, req.body,{new :  true})
        res.status(200).json({
            status: "Success",
            message: "Tournament is successfully updated",
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
const deleteTournament = async function (req, res, next) {
    try {
        await Tournament.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Success",
            message: "Tournament is successfully delete",
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
};

//=======================searchbyName====================
const searchTournament = async function (req, res, next) {
    try {
        const regex = new RegExp(req.body.name, 'i');
        const tournaments = await Tournament.find({ name: regex }).select('name');

        res.status(200).json({
            status: "Success",
            message: "Tournaments successfully found",
            data: tournaments
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
};


module.exports = {
    createTournament,
    allTournament,
    editTournament,
    deleteTournament,
    searchTournament
}