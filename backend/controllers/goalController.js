const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')
const User = require('../model/userModel')

//@desc Get Goals

const { json } = require("body-parser");

//@route GET /api/goals
const getGoals = asyncHandler( async (req,res) =>{

    const goals = await Goal.find({user : req.user.id});

    res.status(200).json(goals);

})

//@desc Set Goals
//@route POST /api/goals
const setGoal = asyncHandler( async (req,res) =>{

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a message')

    }

    const goal = await Goal.create({
        user: req.user.id,
        text: req.body.text
    })
    res.status(200).json(goal);

})

//@desc Get Goals
//@route GET /api/goals/:id
const updateGoals = asyncHandler( async (req,res) =>{

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Not Found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not authorized')
    }

    //Goals updated
    if(goal.user.toString() !== user.id ){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updateGoal);

})

//@desc Get Goals
//@route GET /api/goals
const deleteGoals = asyncHandler( async (req,res) =>{

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Not Found')
    }
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not authorized')
    }

    //Goals updated
    if(goal.user.toString() !== user.id ){
        res.status(401)
        throw new Error('User not authorized')
    }
    
     await Goal.remove()

    res.status(200).json({id:req.params.id});

})

module.exports = {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoals
}