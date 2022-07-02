const router = require('express').Router();
// import todo model 
const toDoItemsModel = require('../models/toDoItems');


// creation routes
router.post('/api/item', async (req, res) => {
    try {
        const newItem = new toDoItemsModel({
            item: req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json(saveItem)
    } catch (err) {
        res.json(err)
    }
})

router.get('/', (req, res) => {
    res.send('running for browser')
})

// second route
router.get('/api/items', async (req, res) => {
    try {
        const allTodoItems = await toDoItemsModel.find({});
        res.status(200).json(allTodoItems)
    } catch (err) {
        res.json(err);
    }
})
// update items 
router.put('/api/item/:id', async (req, res) => {
    try {
        const updateItem = await toDoItemsModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json('Item Updated Success')
    } catch (err) {
        res.json(err);
    }
})

// delete oparation
router.delete('/api/item/:id', async (req, res) => {
    try {
        const deleteItem = await toDoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Deleted Successfully')
    } catch (err) {
        res.json(err);
    }
})

// exports router
module.exports = router;