const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { authenticator } = require("../middlewares/authenticator")
const{ NoteModel }= require("../models/NoteModel");
const noteRouter = express.Router();
noteRouter.use(authenticator);

noteRouter.get("/", async(req, res) => {
    let token = req.headers.authorization
    jwt.verify(token,"Sahil",async(err,decode)=> {
        try {
            
            let data = await NoteModel.find({user:decode.userId})
            res.send({
                data:data,
                message: "Success",
                status: 1,
            })
        } catch (error) {
            res.send({
                message:error.message,
                status: 0,
            })
        }
    })

   
})
noteRouter.post("/create", async (req, res) => {
    try {
        let note = new NoteModel(req.body);
        await note.save();
        res.json({
            message: "Note created",
            status: 1,
            data: note, // Optionally send the created note back in the response
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: 0,
        });
    }
});


noteRouter.patch("/:id", async (req, res) => {
    const { id } = req.params; // Extract note id from URL params
    try {
        await NoteModel.findByIdAndUpdate({ _id: id }, req.body);
        res.json({
            message: "Note updated",
            status: 1,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: 0,
        });
    }
});

    


noteRouter.delete("/:id", async (req, res) => {
    const { id } = req.params; // Extract note id from URL params
    try {
        await NoteModel.findByIdAndDelete({ _id: id });
        res.json({
            message: "Note deleted",
            status: 1,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: 0,
        });
    }
});









module.exports = {
    noteRouter,
};