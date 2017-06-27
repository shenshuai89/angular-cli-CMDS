import {Component, OnInit} from '@angular/core';
import {LoggerService} from "./shared/logger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  private toChild:string = "message from parent to child";
  private fromChildMessage:string;
  private count:number;

  constructor(private logger:LoggerService){
  }

  ngOnInit(){
    this.logger.debug("这是父组件上的服务应用")
    this.count = 8
  }

  receivedMessage(msg:string){
    this.fromChildMessage = msg
  }
}
