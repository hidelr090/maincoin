import express from 'express';
import router from './routes';
import 'reflect-metadata';

export class App {
  public server;

  constructor(

  ){
    this.server = express();
    this.server.use(express.json());
    this.router();
  }

  private router (){ 
    router(this.server);
  }
}