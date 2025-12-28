import mongoose from "mongoose"
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLenghth: 30,
        minLenght: 3,
    },
    lastName: {
        type: String,
        trim: true,
        maxLenghth: 30,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        unqiue: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    }
})

UserSchema.pre("save", async function (next) {
  // If our password is not modified than don't update it and simple go next()
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema);
export default User;