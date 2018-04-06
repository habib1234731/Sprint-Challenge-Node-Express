const express = require('express');

const router = express.Router();

const actionDb = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
    actionDb
    .get()
    .then(actions => {
        res.json(actions);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    actionDb
    .get(id)
    .then(actions => {
        res.json(actions);
    }).catch(error => {
        res.status(404).json(error);
    });
});

router.post('/', (req,res) => {
    const action = req.body;
    actionDb
    .insert(action)
    .then(response => {
        res
        .status(201)
        .json(response);
    })
    .catch(error => {
        res
        .status(500)
        .json({error:'There was an error while saving the action to the database'})
    })
})

router.delete('/:id', (req,res) => {
    let action;
    const { id } = req.params;
    actionDb
    .get(id)
    .then(response => {
        action = {...response[0]};
        actionDb
        .remove(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json(error)
        })
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const update = req.body;
    actionDb
    .update(id, update)
    .then(response => {
        res.status(200).json({ response });
    })
    .catch(error => {
    res.status(500).json({message:'There was an error updating the actions.'});
    });
  });

module.exports = router;