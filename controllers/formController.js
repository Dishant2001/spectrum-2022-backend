const Form = require('../models/formModel')
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose')


const registerUser = asyncHandler(async (req,res) => {
    const {email, heist_in_vit, kbc, brainfunk, sharks_tank } = req.body;

    const userExists = await Form.findOne({ email });

    if(userExists){
        if(heist_in_vit){
            if(userExists.heist_in_vit.team_name=="none"){
                userExists.heist_in_vit=heist_in_vit;
                userExists.save();
            }
        }
        if(kbc){
            if(userExists.kbc.name=="none"){
                userExists.kbc=kbc;
                userExists.save();
            }
        }
        if(brainfunk){
            if(userExists.brainfunk.name=="none"){
                userExists.brainfunk=brainfunk;
                userExists.save();
            }
        }
        if(sharks_tank){
            if(userExists.sharks_tank.company_name=="none"){
                userExists.sharks_tank=sharks_tank;
                userExists.save();
            }
        }
        res.status(201).json({
            email:email,
            heist_in_vit:heist_in_vit,
            kbc:kbc,
            brainfunk:brainfunk,
            sharks_tank:sharks_tank
        });
        // throw new Error('User already exists'); 
    }

    else{
        const user = await Form.create({
        email, heist_in_vit, kbc, brainfunk, sharks_tank
        })

        if(user){
            res.status(201).json({
                email:email,
                heist_in_vit:heist_in_vit,
                kbc:kbc,
                brainfunk:brainfunk,
                sharks_tank:sharks_tank
            });

        }else{
            res.status(400);
            throw new Error("Error occured");
        }
    }

});

module.exports={registerUser};