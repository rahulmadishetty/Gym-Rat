const express = require('express')
const router = express.Router()


//Fetching Basic Details all route
router.get('/', (req, res) => {
    res.send('Hello World')

})

//Fetching Basic Details byId route
router.get('/:id', (req, res) => {
    // req.params.id

})

//Creating Basic Details route
router.post('/', (req, res) => {

})


//Updating Basic Details route
router.patch('/', (req, res) => {
    
})

//Delete Basic Details route
router.delete('/:id', (req, res) => {
    
})






module.exports = router

