import { GlobalEventsManager } from './../shared/global.eventmanager';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
 
@Injectable()
export class GlobalMessageService {
    
    constructor(private globalEventsManager: GlobalEventsManager) {
    }

    addMessage(message,type,timeoutInSeconds){
        var messageObject = {text:message,type:type,timeout:timeoutInSeconds};
        this.globalEventsManager.addMessage.emit(messageObject);
    }

    removeMessage(){
        this.globalEventsManager.removeMessage.emit(true);
    }

}