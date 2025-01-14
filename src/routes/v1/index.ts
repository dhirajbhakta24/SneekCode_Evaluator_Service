import express from "express";
import submissionRouter from "./submissionRoutes";

const v1Router = express.Router();
v1Router.use('/submissions', submissionRouter);
v1Router.get('/',()=>{});

export default v1Router;