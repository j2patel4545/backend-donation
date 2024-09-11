import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactno: { type: String, required: true },
    bloodgroup: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

export default mongoose.model('User', UserSchema);