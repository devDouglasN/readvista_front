import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  let token = localStorage.getItem('token')

  if(token){
    const cloneReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`)})
    return next(cloneReq)
  }else {

  }
  return next(req);

};
