import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class NotifiersUtilService {

  DEFAULT_ERROR_MESSAGE = "Sorry, something went wrong";

  handleError(e: any) {
    console.log({error: e});
  }

  notify(message: string) {
    console.log({notify: message});
  }

}


