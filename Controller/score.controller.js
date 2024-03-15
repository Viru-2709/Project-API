const Score = require('../model/score.model')


//=============================create========================
const createTeamScore = async function (req, res, next) {
    try {
        // console.log(req.body);
        if(!req.body.team || !req.body.kill || !req.body.totalpoints || !req.body.mvp || !req.body.tournament ){
            throw new Error("Please add valid field")
        }
        const data = await Score.create(req.body)
        res.status(201).json({
            status: "Success",
            message: "Score is Generated",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }
};


//================================allScore===============================
const allTeamScore = async function (req, res, next) {
    try {
        const data = await Score.find().populate('tournament')
        res.status(200).json({
            status: "Success",
            message: "all team Score found",
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
const editTeamScore = async function (req, res, next) {
    try {
        const data = await Score.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            status: "Success",
            message: "Score is successfully updated",
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
const deleteTeamScore = async function (req, res, next) {
    try {
        await Score.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Success",
            message: "Team score is successfully remove",
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
};


//=======================searchbyName====================
const searchTeamScore = async function (req, res, next) {
    try {
        team = await Score.find(
                { team: req.body.team })
        res.status(200).json({
            status: "success",
            message: "Game Score  successfully found",
            data: team
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
    createTeamScore,
    allTeamScore,
    editTeamScore,
    deleteTeamScore,
    searchTeamScore
}