const express = require('express');

const router = express.Router();

const projectDb = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    projectDb
    .get()
    .then(projects => {
        res.json(projects);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    projectDb
    .get(id)
    .then(projects => {
        res.json(projects);
    }).catch(error => {
        res.status(404).json(error);
    });
});

router.get('/:id/actions', (req, res) => {
    projectDb
    .getProjectActions(req.params.id)
    .then(actions => {
        res.json(actions);
    });
});

router.post('/', (req,res) => {
    const project = req.body;
    projectDb
    .insert(project)
    .then(response => {
        res
        .status(201)
        .json(response);
    })
    .catch(error => {
        res
        .status(500)
        .json({error:'There was an error while saving the project to the database'})
    })
})

router.delete('/:id', (req,res) => {
    let project;
    const { id } = req.params;
    projectDb
    .get(id)
    .then(response => {
        project = {...response[0]};
        projectDb
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
    projectDb
    .update(id, update)
    .then(response => {
        res.status(200).json({ response });
    })
    .catch(error => {
    res.status(500).json({message:'There was an error updating the projects.'});
    });
  });

module.exports = router;