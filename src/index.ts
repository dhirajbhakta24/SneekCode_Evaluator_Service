import express from 'express';
import serverConfig from './config/serverConfig';
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from './routes';
import SampleWorker from "./workers/SampleWorker";


const app = express();

app.use('/api', apiRouter)

app.listen(serverConfig.PORT, () => {
    console.log(`Server started at *:${serverConfig.PORT}`);
    SampleWorker('SampleQueue');
    sampleQueueProducer('SampleJob', {
      name: "Dhiraj",
      company: "Microsoft",
      position: "SDE 1 L61",
      locatiion: "Remote | BLR | Noida"
    });
  });