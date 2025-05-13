import Product from '../models/ProductModel.js';


export const fetchAllProducts = async (req, res) => {
    try {
        const { category, subCategory, sort } = req.query;
        const filter = {};

        if (category) filter.category = category;
        if (subCategory && subCategory !== 'null') { filter.subCategory = subCategory; }

        let query = Product.find(filter);

        if (!sort) query = query.sort({ createdAt: -1 });
        if (sort === 'asc') query = query.sort({ price: 1 });
        if (sort === 'desc') query = query.sort({ price: -1 });
        if (sort === 'rating') query = query.sort({ rating: -1 });
        if (sort === 'latest') query = query.sort({ createdAt: -1 });

        const products = await query.exec();
        res.status(200).json({ success: true, data: products });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


export const createProduct = async (req, res) => {
    try {
        const data = req.body;
        if (Array.isArray(data)) {
            const saved = await Product.insertMany(data);
            res.status(201).json(saved);
        } else {
            const product = new Product(data);
            const saved = await product.save();
            res.json(saved);
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

export const fetchProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
        res.json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product Deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
