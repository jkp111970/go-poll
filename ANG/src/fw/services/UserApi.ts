import {Observable} from 'rxjs';

export abstract class UserApi {
    signIn : (userName: String, password: String, rememberMe: boolean) => Observable<any>;
    signOut : () => Observable<any>;
    isAuthenticated: () => boolean;
}