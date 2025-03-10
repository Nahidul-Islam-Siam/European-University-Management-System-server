/* eslint-disable no-console */
import app from './app';
import config from './app/config';

import mongoose from 'mongoose';
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      // console.log(` app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error('Internal server error:', error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
