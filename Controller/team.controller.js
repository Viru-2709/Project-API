const Team = require('../model/team.model')
var jwt = require('jsonwebtoken');


const createTeam = async function (req, res, next) {
    try {
        console.log(req.body);
        if (
            !req.body.teamname ||
            !req.body.players ||
            !req.body.organization ||
            !req.body.manager ||
            !req.body.gamename
        ) {
            throw new Error("Please add valid field")
        }
        const players = Object.keys(req.body.players).length
        // console.log("length", players.length);
        if (players < 4) {
            throw new Error("Team is not complete")
        }
        const data = await Team.create(req.body)
        res.status(201).json({
            status: "Success",
            message: "Team is  Created",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })

    }
};


//================================allTeam===============================
const allTeam = async function (req, res, next) {
    try {
        const data = await Team.find()
        res.status(200).json({
            status: "Success",
            message: "allTeam found",
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
const editTeam = async function (req, res, next) {
    try {
        const data = await Team.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            status: "Success",
            message: "Team is successfully updated",
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
const deleteTeam = async function (req, res, next) {
    try {
        await Team.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Success",
            message: "Team is successfully remove",
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
};

//=======================searchbyName====================
const searchTeam = async function (req, res, next) {
    try {
        let team;
        if (req.body.gamename) {
            team = await Team.find(
                { gamename: req.body.gamename }
            );
        } else if (req.body.teamname) {
            team = await Team.findOne(
                { teamname: req.body.teamname }
            );
        }
        if (!team) {
            return res.status(404).json({
                status: "fail",
                message: "No team found with the provided criteria."
            });
        }
        res.status(200).json({
            status: "success",
            message: "Team successfully found",
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
    createTeam,
    allTeam,
    editTeam,
    deleteTeam,
    searchTeam
}