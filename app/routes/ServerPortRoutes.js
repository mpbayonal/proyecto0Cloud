const express = require('express');
const app = express();
const ServerPortRoutes = express.Router();

const ServerPort = require('../models/ServerPort');

ServerPortRoutes.route('/add').post(function (req, res) {
    const serverport = new ServerPort(req.body);
    serverport.save()
        .then(serverport => {
            res.json('Server added successfully');
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});



ServerPortRoutes.route('/').get(function (req, res) {
    ServerPort.find(function (err, serverports){
        if(err){
            console.log(err);
        }
        else {
            res.json(serverports);
        }
    });
});

ServerPortRoutes.route('/edit/:id').get(function (req, res) {
    const id = req.params.id;
    ServerPort.findById(id, function (err, serverport){
        res.json(serverport);
    });
});

ServerPortRoutes.route('/update/:id').post(function (req, res) {
    ServerPort.findById(req.params.id, function(err, serverport) {
        if (!serverport)
            return next(new Error('Could not load Document'));
        else {
            // do your updates here
            serverport.nombre = req.body.nombre;
            serverport.lugar = req.body.lugar;
            serverport.fecha = req.body.fecha;

            serverport.save().then(serverport => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});


ServerPortRoutes.route('/delete/:id').get(function (req, res) {
    ServerPort.findByIdAndRemove({_id: req.params.id},
        function(err, serverport){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
});

module.exports = ServerPortRoutes;