import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  cart: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: {type: Number, default: 1},
  }],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],

}, { timestamps: true }
);

UserSchema.pre('save', async function(next) {
  if(!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.comparePassword = function (enterPassword) {
  return bcrypt.compare(enterPassword, this.password);
}

export default mongoose.model('User', UserSchema);
