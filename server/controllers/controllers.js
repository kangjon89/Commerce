const product = require('../models/models');

module.exports = {
    allProducts: (req, res) => {
      product.find()
        .then(data => {
          res.json({ message: "success", results: data });
        })
        .catch(err => {
          res.json({ message: "error", results: err });
        });
    },
  
    oneProduct: (req, res) => {
      product.findOne({ _id: req.params.id })
        .then(data => {
          res.json({ message: "success", results: data });
        })
        .catch(err => {
          res.json({ message: "error", results: err });
        });
    },

    createProduct: (req, res) => {
      console.log(req.body);
      product.create(req.body)
        .then(data => {
          res.json({ message: "success", results: data });
          product.updateOne(
            { _id: data._id },
            { skill: [req.body.skill1, req.body.skill2, req.body.skill3] }
          )
            .then(data => {
              res.json({ message: "success", results: data });
              console.log(data);
            })
            .catch(err => {
              console.log(err);
              res.json({ message: "error", results: err });
            });
        })
        .catch(err => {
          console.log(err);
          res.json({ message: "error", results: err });
        });
    },
    
    updateProduct: (req, res) => {
      let { _id, ...restOfData } = req.body;
      product.findOneAndUpdate({ _id: req.params.id }, restOfData, {
        runValidators: true,
        new: true
      })
        .then(data => {
          res.json({ message: "success", results: data });
         })
        .catch(err => {
          res.json({ message: "error", results: err });
        });
    },
    deleteProduct: (req, res) => {
      console.log("successs");
      product.findOneAndDelete({ _id: req.params.id })
        .then(data => {
          console.log(req.params.id);
          console.log(data);
          res.json({ message: "success", results: data });
        })
        .catch(err => {
          res.json({ message: "error", results: err });
        });
    },

  };
  