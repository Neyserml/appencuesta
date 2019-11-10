import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class UserService {
  domain: String = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public isAuth() {
    let user = localStorage.getItem("userLogged");
    if (user) {
      return true;
    }
    return false;
  }
  public login(data): Observable<any> {
    return this.http.post(`${this.domain}` + "/user.php", data);
  }
  // public login(user, pass): Observable<any> {
  //   return this.http.get(
  //     `${this.domain}` + "/user.php?usuario=" + user + "&clave=" + pass
  //   );
}
