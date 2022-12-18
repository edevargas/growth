import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class NotifiersUtilService {

  DEFAULT_ERROR_MESSAGE = "Sorry, something went wrong";

  constructor(@Inject('timeoutNotifiers') private timeoutNotifiers: number) { }

  handleError(e: any) {
    console.log({error: e});
  }

  notify(message: string) {
    console.log({notify: message});
  }

}


