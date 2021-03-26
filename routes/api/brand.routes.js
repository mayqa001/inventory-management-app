const router = require('express').Router();
const BrandController = require('../../controllers/brand.controller');

router.get('/:id', BrandController.searchBrand);
router.post('/', BrandController.addBrand)
router.delete('/:id',BrandController.deleteBrand)
module.exports = router;
