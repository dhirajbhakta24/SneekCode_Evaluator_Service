import express from 'express';
import serverConfig from './config/serverConfig';
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from './routes';
import SampleWorker from "./workers/SampleWorker";
import bullBoardAdapter from "./config/bullBoardConfig";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use('/api', apiRouter);
app.use('/ui', bullBoardAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
    console.log(`Server started at *:${serverConfig.PORT}`);
    console.log(`BullBoard dashboard running on: http://localhost:${serverConfig.PORT}/ui`);
    SampleWorker('SampleQueue');
    sampleQueueProducer('SampleJob', {
      name: "Dhiraj",
      company: "Microsoft",
      position: "SDE 1 L61",
      locatiion: "Remote | BLR | Noida"
    });
  });