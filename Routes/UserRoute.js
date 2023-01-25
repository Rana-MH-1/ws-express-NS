const express = require('express');
const router = express.Router()
const {UserLists} = require('../UserLists')

//method: @GET
// afficher la liste des users 
router.get('/', (req,res)=>{
    res.json(UserLists)
})

//@POST
//Add a new user
router.post('/',(req,res)=>{
    const newUserLists = [...UserLists, req.body]
    res.json(newUserLists)
})

//@PUT
//update data user
router.put('/:id', (req,res)=>{
    const updatedUserLists = UserLists.map(user=> (user.id === +req.params.id)? {...user,...req.body} : user)
    res.json(updatedUserLists)
})

//@delete
//delete Data User
router.delete('/:id',(req,res)=>{
    const FilteredUserLists = UserLists.filter(user=> user.id !== +req.params.id)
    res.json(FilteredUserLists)
})



module.exports = router