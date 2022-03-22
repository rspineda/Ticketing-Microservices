import mongoose from 'mongoose';

interface UserAttributes {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<any> {
  build(attributes: UserAttributes): any;
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

const User = mongoose.model<any, UserModel>('User', userSchema);

/* 
User.build({
  email: 'axsd@gmail.com',
  password: '12345'
});
*/

export { User };