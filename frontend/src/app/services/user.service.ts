import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly allUsersURL = '/api/users';
  private readonly currUserInfoUrl = '/api/user';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.allUsersURL);
  }

  getUserInfo() {
    return this.http.get<User>(this.currUserInfoUrl);
  }
}
