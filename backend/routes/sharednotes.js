const { body, validationResult } = require("express-validator");
const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const SharedNote = require('../models/SharedNotes');
const User = require('../models/User');

const findUserEmailById = async (userId) => {
    try {
      const user = await User.findById(userId);
      if (user) {
        // console.log(user.email);
        return user.email;
      } else {
        return null; // User not found
      }
    } catch (error) {
      console.error("Error finding user:", error.message);
      throw error;
    }
  };
// Route to fetch notes for users with user1 or user2 IDs
// router.get('/fetchsharednotes', fetchuser, async (req, res) => {
    router.get('/fetchsharednotes', fetchuser, async (req, res) => {
        try {   
            console.log("HI");
            let userEmail = await findUserEmailById(req.user.id); 
            // userEmail = userEmail.toString();
            console.log(userEmail);
            // console.log(userEmail);
            // const userEmail = localStorage.getItem('userEmail');
            // Find shared notes where user1 or user2 is the current user's email
            const sharedNotes = await SharedNote.find({
                $or: [{ user1: userEmail }, { user2: userEmail }]
            });
        
            res.json(sharedNotes);
            } catch (error) {
            console.error(error.message);
            res.status(500).send('Some error occurred');
            }
    });

        router.post("/addsharednote", fetchuser, async (req, res) => {
            try {
              const {user2, title, description, tag } = req.body;
              const errors = validationResult(req);
              if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
              }
            //   const user1 = req.user.name;
            // const user1 = req.user.email.toString();
            // const user2 = req.user.email.toString();
              const user1 = await findUserEmailById(req.user.id); 
              const note = new SharedNote({
                user1,
                user2,
                title,
                description,
                tag,
              });
              const savedNote = await note.save();
              res.json(savedNote);
            } catch (error) {
              console.error(error.message);
              res.status(500).send("Some error occurred");
            }
          });

          router.delete("/deleteSharedNote/:id", fetchuser, async (req, res) => {

            try {
        
                const { id } = req.params;
                
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({errors: errors.array()});
                }
                
                
                const note = await SharedNote.findById(req.params.id);
                
                
                // if(note.user.id !== req.user.id){
                //     return res.status(401).send("Not Allowed");
                // }
                
                // Delete the note in the database
                const deleteNote = await SharedNote.findByIdAndDelete(id);
                res.json({"Success": "The note has been successfully deleted",note : deleteNote});
        
            } catch (error) {
                // Catch errors
        
                console.error(error.message);
                res.status(500).send("Some error occurred");
            }
            
        });

module.exports = router;