import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  constructor(
    private _router:Router,private _toastr:ToastrService){}
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("user"))
      return true;
      this._router.navigateByUrl("/register");
      this._toastr.warning("kullanıcı kaydı yapmalısınız");
      return false;
  }
}
