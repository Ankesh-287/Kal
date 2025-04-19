import Product from '../models/ProductModel.js';

export const fetchAllProducts = async (req, res) => {
    try {
        const { category, subCategory, sort } = req.query;
        const filter = {};

        if (category) filter.category = category;
        if (subCategory) filter.subCategory = subCategory;

        let query = Product.find(filter);

        if (sort === 'asc') query = query.sort({ price: 1 });
        if (sort === 'desc') query = query.sort({ price: -1 });

        const products = await query;
        res.status(200).json({ success: true, data: products });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const data = req.body;
        if (Array.isArray(data)) {
            const saved = await Product.insertMany();
            res.json(saved);
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
    const updated = await Product.findOneAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

export const deleteProduct = async (req, res) => {
    await Product.findOneAndDelete(req.params.id);
    res.json({ message: 'Product Deleted' });
}