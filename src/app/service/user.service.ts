import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/domain/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private readonly baseUrl = "http://localhost:3000/api/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }
}
