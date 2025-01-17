
import { Injectable } from '@angular/core';
import { HttpResponse as Response } from '@angular/common/http';

import { ToastyService } from 'ng2-toasty';
import { NotAuthenticatedError } from '../security/tlc-http.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService, private router: Router) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Sua sessão expirou!';
      this.router.navigate(['/login']);

    } else if (errorResponse instanceof Response
        && errorResponse.status >= 400 && errorResponse.status <= 499) {
      let errors;
      msg = 'An error has occurred when processing your request.';

      try {
        errors = JSON.parse(errorResponse.body);

        msg = errors[0].userMessage;
      } catch (e) { }

      console.error('An error has occurred.', errorResponse);

    } else {
      msg = 'Error when processing remote service. Please try again.';
      console.error('An error has occurred', errorResponse);
    }

    this.toasty.error(msg);
  }

}
