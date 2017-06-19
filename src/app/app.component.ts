import { Component, OnInit } from '@angular/core';
import {LoggerService} from "./logger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private title:string;
  private msgToChild:string;
  private msgFromChild:string;


  constructor(private logger:LoggerService){  }

  ngOnInit() {
    this.msgToChild = 'message from parent'
    this.title = 'angular 2'
    this.logger.debug("loggerService服务初始化完成")
  }

  receive (msg: string){
    this.msgFromChild = msg;
  }
}
