const asyncHandler = require('express-async-handler')


//@desc Get Goals

const { json } = require("body-parser");

//@route GET /api/goals
const getGoals = asyncHandler( async (req,res) =>{

    res.status(200).json({message:'Get goals'});

})

//@desc Set Goals
//@route POST /api/goals
const setGoal = asyncHandler( async (req,res) =>{

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a message')

    }
    res.status(200).json({message:'Create a goal'});

})

//@desc Get Goals
//@route GET /api/goals/:id
const updateGoals = asyncHandler( async (req,res) =>{

    res.status(200).json({message:`Update goal ${req.params.id}`});

})

//@desc Get Goals
//@route GET /api/goals
const deleteGoals = asyncHandler( async (req,res) =>{

    res.status(200).json({message:`Delete goal ${req.params.id}`});

})

module.exports = {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoals
}