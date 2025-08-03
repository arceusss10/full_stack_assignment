const express = require('express');
const router = express.Router();
const configuration = require('../models/configuration');

router.get('/api/configurations/:id', async (req, res) => {
    try {
        const config = await configuration.findOne({ configurationId: req.params.id});
        if(!config) return res.status(404).json({ message: 'Not found'});
        res.json(config.matrix);
    } catch (err){
        res.status(500).json({message: 'Server error'});
    }
});

router.put('/api/configurations/:id', async (req, res) => {
    try {
        await configuration.updateOne(
            { configurationId: req.params.id},
            { $set: { remark: req.body.remark}}
        );
        res.json({ message: 'success'});
    } catch (err){
        res.status(500).json({ message: 'Server error'});
    }
});

module.exports = router;