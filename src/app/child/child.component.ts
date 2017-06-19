import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  @Input() private message:string;
  @Output() private outer = new EventEmitter<string>();
  constructor() {

  }
  ngOnInit(){}
  sendToParent(){
    this.outer.emit('message from child to Parent')
  }
}
