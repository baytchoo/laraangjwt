import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { TokenService } from './Services/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor  {

  constructor(private tokenService : TokenService) { }

  intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.tokenService.loggedIn()) {
        	// code...
	        const idToken = localStorage.getItem("token");

	        if (idToken) {
	            const cloned = req.clone({
	                headers: req.headers.set("Authorization",
	                    "Bearer " + idToken)
	            });

	            return next.handle(cloned);
	        }
    	}
	    
	    return next.handle(req);
	    
    }
}
