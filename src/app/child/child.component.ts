import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LoggerService} from "../shared/logger.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() private message:string;
  @Output() private outer = new EventEmitter<string>()
  constructor(private logger:LoggerService) { }

  ngOnInit() {
    this.logger.debug("这是子组件的服务应用")
  }
  sendMessage(){
    this.outer.emit('child component send message to parent')
  }
}
