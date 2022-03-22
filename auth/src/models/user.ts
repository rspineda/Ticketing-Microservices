import mongoose from 'mongoose';

//Properties that are required to create a new User
interface UserAttributes {
  email: string;
  password: string;
}

//Properties that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attributes: UserAttributes): UserDoc;
}

//Properties that a User Document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

/* 
const user = User.build({
  email: 'axsd@gmail.com',
  password: '12345'
});
*/


export { User };