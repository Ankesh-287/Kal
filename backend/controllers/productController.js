import Product from '../models/ProductModel.js';
import asyncHandler from '../utils/asyncHandler.js';

export const fetchAllProducts = asyncHandler(async (req, res) => {
    const { category, subCategory, page = 1, limit = 10, sort } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const filter = {};

    if (category) filter.category = category;
    if (subCategory && subCategory !== 'null') { filter.subCategory = subCategory; }

    let query = Product.find(filter);

    switch (sort) {
        case 'asc':
            query = query.sort({ price: 1 });
            break;
        case 'desc':
            query = query.sort({ price: -1 });
            break;
        case 'rating':
            query = query.sort({ rating: -1 });
            break;
        case 'latest':
            query = query.sort({ createdAt: -1 });
            break;
    }

    query = query.skip(skip).limit(parseInt(limit));
    const total = await Product.countDocuments(filter);
    const products = await query.exec();

    res.status(200).json({ success: true, data: products, total });

});


export const createProduct = asyncHandler(async (req, res) => {
    const data = req.body;
    if (Array.isArray(data)) {
        const saved = await Product.insertMany(data);
        return res.status(201).json(saved);
    }

    if (!data.name || !data.price) {
        return res.status(400).json({ success: false, message: 'Name and price are required' });
    }

    const product = new Product(data);
    const saved = await product.save();
    res.status(201).json(saved);


});

export const updateProduct = asyncHandler(async (req, res) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updated) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json(updated);
});

export const fetchProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: product });
});

export const getProductsBySubcategory = asyncHandler(async (req, res) => {
    const products = await Product.find({ subCategory: req.params.subcategory });
    res.json(products);
});

export const deleteProduct = asyncHandler(async (req, res) => {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ success: true, message: 'Product deleted', data: deleted });
});
