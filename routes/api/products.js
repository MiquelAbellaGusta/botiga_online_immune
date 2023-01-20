const router = require('express').Router();
const product = require('../../models/product.model');


router.get('/', async (req, res) => {
    try {
        const result = await product.find()
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const result = await product.findById(productId);

        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});


router.put('/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const result = await product.findByIdAndUpdate(productId, req.body, { new: true });
        res.json(result)
    }
    catch (error) {
        res.json({ fatal: error.message })
    }

});

router.post('/', async (req, res) => {
    try {
        const result = await product.create(req.body)
        res.json(result);
    } catch (error) { res.json({ fatal: error.message }) }

});


router.delete('/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const result = await product.findByIdAndDelete(productId);
        res.json(result)
    }
    catch (error) {
        res.json({ fatal: error.message })
    }

});
module.exports = router;