import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AnswersService {
  domain: String = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public getAnswers(): Observable<any> {
    return this.http.get(`${this.domain}` + "/answers.php");
  }
  public saveSurvey(data): Observable<any> {
    return this.http.post(`${this.domain}` + "/savesurvey.php", data);
  }
  public getDepartaments(): Observable<any> {
    return this.http.get(`${this.domain}` + "/departaments.php");
  }
}
