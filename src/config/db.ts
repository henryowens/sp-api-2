import { connect, ConnectionOptions } from 'mongoose';

const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(
      'mongodb+srv://admin:U3SChQwwrEIYqI9u@social-point.tlkcf.mongodb.net/users?retryWrites=true&w=majority',
      options
    );
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export { connectDB };
