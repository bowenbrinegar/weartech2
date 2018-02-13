const db = require("../models");
const mongoose = require('mongoose')
const Moment = require('moment')
const json2csv = require('json2csv')
const fs = require('fs');

module.exports = {
  clear: function(req, res) {
    db.Institution.remove({}).then(res => console.log(res));
    db.CushionSensor.remove({}).then(res => console.log(res));
    db.BedSensor.remove({}).then(res => console.log(res));
    db.ShoeSensor.remove({}).then(res => console.log(res));
    db.ShoeData.remove({}).then(res => console.log(res));
    db.BedData.remove({}).then(res => console.log(res));
    db.CushionData.remove({}).then(res => console.log(res));
    res.send('success')
  },
  findAllInstitution: function(req, res) {
    db.Institution
      .find({})
      .then(result => res.send(result))
      .catch(err => console.log(err))
  },
  findAllInstitutionsByName: function(req, res) {
    db.Institution
      .find({institution: req.params.name})
      .then(result => res.send(result))
      .catch(err => console.log(err))
  },
  findInstitutionByID: function(req, res) {
    db.Institution
      .find({_id: req.params.institution})
      .populate('cushion')
      .populate('shoe')
      .populate('bed')
      .then(result => {
        res.send(result)
        console.log('working')
      })
      .catch(err => console.log(err))
  },
  getCushionByID: function(req, res) {
    db.CushionSensor
      .find({institution: req.params.id})
      .populate('data')
      .then(result => res.send(result))
      .catch(err => console.log(err))
  },
  getShoeByID: function(req, res) {
    db.ShoeSensor
      .find({institution: req.params.id})
      .populate('data')
      .then(result => res.send(result))
      .catch(err => console.log(err))
  },
  getBedByID: function(req, res) {
    db.BedSensor
      .find({institution: req.params.id})
      .populate('data')
      .then(result => res.send(result))
      .catch(err => console.log(err))
  },
  findAllBedSensor: function(req, res) {
    db.BedSensor
      .find({})
      .populate('data')
      .then(result => res.send(result))
      .catch(err => console.log(err))
  },
  findAllShoeSensor: function(req, res) {
    db.ShoeSensor
      .find({})
      .populate('data')
      .then(result => res.send(result))
      .catch(err => console.log(err))
  },
  findAllCushionSensor: function(req, res) {
    db.CushionSensor
      .find({})
      .populate('data')
      .then(result => res.send(result))
      .catch(err => console.log(err))
  },
  findOneCushionSensor: function(req, res) {
    db.CushionSensor
      .find({})
      .populate('data')
      .then(result => {
        fs.writeFile('cvsFiles/findFirstCushionSensor.json', result[0].data, function(err) {
          if (err) throw err;
          console.log('file saved');
        });
      })
      .catch(err => console.log(err))
  },
  createInstitution: function(req, res) {
    db.Institution
      .create(req.body)
      .then(result =>  res.send(result))
      .catch(err => console.log(err))
  },
  createCushion: function(req, res) {
    db.CushionSensor
      .create(req.body, (err, sensor) => {
        if (err) console.log(err);

        db.Institution.update({_id: req.body.institution},
          {$push: {cushion: sensor }})
          .then(result => {
            res.send(sensor)
          })
      })
  },
  createBed: function(req, res) {
    db.BedSensor
      .create(req.body, (err, sensor) => {
        if (err) console.log(err);

        db.Institution.update({_id: req.body.institution},
          {$push: {bed: sensor }})
          .then(result => {
            res.send(sensor)
          })
      })
  },
  createShoe: function(req, res) {
    db.ShoeSensor
      .create(req.body, (err, sensor) => {
        if (err) console.log(err);

        db.Institution.update({_id: req.body.institution},
          {$push: {shoe: sensor }})
          .then(result => {
            res.send(sensor)
          })
      })
  },
  findAllShoeData: function(req, res) {
    db.ShoeData
      .find({})
      .then(result =>  res.send(result))
      .catch(err => console.log(err))
  },
  findAllBedData: function(req, res) {
    db.BedData
      .find({})
      .then(result =>  res.send(result))
      .catch(err => console.log(err))
  },
  findAllCushionData: function(req, res) {
    db.CushionData
      .find({})
      .then(result =>  res.send(result))
      .catch(err => console.log(err))
  },
  createShoeData: function(req, res) {
    db.ShoeData
      .create(req.body, (err, dataResponse) => {
        if (err) console.log(err);
        db.ShoeSensor.update({_id: req.body.sensor},
          {$push: {data: dataResponse}})
          .then(result => {
            res.send(result);
          })
      })
  },
  createBedData: function(req, res) {
    db.BedData
      .create(req.body, (err, dataResponse) => {
        if (err) console.log(err);
        db.BedSensor.update({_id: req.body.sensor},
          {$push: {data: dataResponse}})
          .then(result => {
            res.send(result);
          })
      });
  },
  createCushionData: function(req, res) {
    db.CushionData
      .create(req.body, (err, dataResponse) => {
        if (err) console.log(err);
        db.CushionSensor.update({_id: req.body.sensor},
          {$push: {data: dataResponse}})
          .then(result => {
            res.send(result);
          })
      })
  }
};