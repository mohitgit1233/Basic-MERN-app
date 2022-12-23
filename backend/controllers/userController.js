const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

//POST REGISTER
const registerUser = asyncHandler( async (req,res) =>{

    const {name,email,password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all details')
    }

    const userExists = await User.findOne({email})

        if(userExists){
            res.status(400)
            throw new Error('User already exists')
        }


    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password,salt)

    const newUser = await User.create({
        name,
        email,
        password:hashPass
    })

    if(newUser){
        res.status(201).json({
            _id:newUser.id,
            name:newUser.name,
            email:newUser.email,
            token: generateToken(newUser._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid data')
    }

    // res.json({message:'User registered'})
})

//POST LOGIN
const loginUser = asyncHandler( async (req,res) =>{

    const{email,password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error('Please enter all details')
    }
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password,user.password))){
        res.status(201).json({
            message:'login sucess',
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid Username or password')
    }

    // res.json({message:'User login'})
})



//GET User data Private
const getUser = asyncHandler( async (req,res) =>{
    const {_id,name,email,password} = await User.findById(req.user.id)

    res.status(200).json({
        id:_id,
        name,
        email,
       password
    })
    res.json({message:'User data token'})
})




//Generate JWT

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,
        {expiresIn:'30d'})
}

module.exports = {registerUser,loginUser,getUser}