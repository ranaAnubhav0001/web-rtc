import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        phone: { type: String, required: true },
        activated: { type: Boolean, required: false, default: false },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema, 'users');

export { User };
