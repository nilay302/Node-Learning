const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');

router.get('/', async (req, res, next) => {
    try {
        const product = await Product.find().exec();
        res.status(200).json({
            result: product
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    };
});

router.post('/', async (req, res, next) => {
    try {
        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        });
        const result = await product.save();
        console.log(result);
        res.status(201).json({
            message: 'products working post request',
            createdProduct: product
        })
    }
    catch (err) {
        console.log(err);
    };
});

router.get('/:productId', async (req, res, next) => {
    try {
        const id = req.params.productId;
        const result = await Product.findById(id).exec();
        if (result) {
            res.status(200).json({
                message: "Product found by given id",
                result: result
            })
        } else {
            res.status(404).json({
                message: "id not found"
            })
        }

    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    };
});

router.patch('/:productId', async(req, res, next) => {
    try{
        const id = req.params.productId;
        const updateOps={};
        for(const ops of req.body){
            updateOps[ops.propName]=ops.value;
        }
        const result = await Product.updateOne(
            {_id:id},{$set:updateOps}).exec();
        res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
    
});

router.delete('/:productId', async (req, res, next) => {
    try {
        const id = req.params.productId;
        const product = await Product.deleteOne({ _id: id }).exec();
        res.status(200).json(product);
    }
    catch (err) {
        console.log(err);
    }

});

module.exports = router;