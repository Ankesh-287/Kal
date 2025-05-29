import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: String,
  image: String,
  price: Number,
  color: String,
  size: String,
  quantity: { type: Number, default: 1 },
});

cartItemSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret.productId; 
    delete ret._id;
    delete ret.__v;
  }
});

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  items: [cartItemSchema],
});

cartSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default mongoose.model('Cart', cartSchema);
