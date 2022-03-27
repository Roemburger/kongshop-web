import {Injectable} from "@angular/core";
import {BehaviorSubject, tap} from "rxjs";
import {User} from "../model/user.model";
import {HttpService} from "./http.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = 'auth';
  public user = new BehaviorSubject<User | null>(null);

  constructor(private httpService: HttpService, private router: Router) {}

  signup({email, password, repeatPassword, firstName,
           lastName, street, number, postalCode,
           city, region, country}: any) {
    return this.httpService.post(this.auth + '/signup', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        street: street,
        number: number,
        postalCode: postalCode,
        city: city,
        region: region,
        country: country,
      })
      .pipe(
        tap((resData: any) => {
          this.authenticateUser(
            resData['userId'],
            resData['email'],
            resData['firstName'],
            resData['lastName'],
            resData['street'],
            resData['number'],
            resData['postalCode'],
            resData['city'],
            resData['region'],
            resData['country'],
            resData['isAdmin'],
            resData['token']
          );
        })
      );
  }

  private authenticateUser(
    userId: string,
    email: string,
    firstName: string,
    lastName: string,
    street: string,
    number: string,
    postalCode: string,
    city: string,
    region: string,
    country: string,
    isAdmin: boolean,
    token: string
  ) {
    const user = new User(
      userId,
      email,
      firstName,
      lastName,
      street,
      number,
      postalCode,
      city,
      region,
      country,
      isAdmin,
      token,
    );
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  getCurrentUser() {
    const userData: {
      userId: string;
      email: string;
      firstName: string,
      lastName: string,
      street: string,
      number: string,
      postalCode: string,
      city: string,
      region: string,
      country: string,
      isAdmin: boolean,
      _token: string,
    } = JSON.parse(<string>localStorage.getItem('userData'));

    const currentUser = new User(
      userData.userId,
      userData.email,
      userData.firstName,
      userData.lastName,
      userData.street,
      userData.number,
      userData.postalCode,
      userData.city,
      userData.region,
      userData.country,
      userData.isAdmin,
      userData._token,
    );

    if (currentUser.userToken) {
      return currentUser;
    }
    return null;
  }

  login(email: string, password: string) {
    return this.httpService.post(this.auth + '/login', {email: email, password: password,})
      .pipe(
        tap((resData: any) => {
          this.authenticateUser(
            resData['userId'],
            resData['email'],
            resData['firstName'],
            resData['lastName'],
            resData['street'],
            resData['number'],
            resData['postalCode'],
            resData['city'],
            resData['region'],
            resData['country'],
            resData['isAdmin'],
            resData['token']
          );
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
  }

  isAdmin() {
    const user = this.getCurrentUser();
    if (user) {
      return user.isAdmin;
    }
    return false;
  }
}
