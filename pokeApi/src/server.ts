import express from 'express';
import cors from 'cors';

import router from "./routes/index"

const app = express();

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(router)

app.listen(3333, () => console.log("sever running!!"))