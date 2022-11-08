import dotenv from 'dotenv';
import { TOptions } from '../utils/types'

dotenv.config();



const options:TOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};



const mongoProd = process.env.WIKINOTES_DB_TEST_URL || '';
const mongoDev = "mongodb://localhost:27017/wiki-notes";
const dbConnection = () : string => {
  if(process.env.NODE_ENV === 'production'){
    return mongoProd;
  } 
  return mongoDev
}
const db = dbConnection();

export interface IConfig {
  db: string;
  options: TOptions;
  serverPort: number;
  serverStart: boolean;
  verbose: boolean;
  token: string;
}

const config: IConfig = {
  db,
  options,
  serverPort: Number(process.env.PORT) || 5000,
  serverStart: true,
  verbose: true,
  token: process.env.WIKINOTES_TOKEN_SECRET || 'notsecure',
};

export default config;
