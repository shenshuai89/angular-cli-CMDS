/**
 * Created by sam on 2017/6/19.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor() { }

    debug(msg:string){
      console.log(msg)
    }
}
