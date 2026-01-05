import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('user', userSchema);

export default User;
