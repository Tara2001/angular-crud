import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Ser01Service {

  constructor(private http: HttpClient) { }

  getdata() {
    return this.http.get("http://localhost:3000/users")
  }

  getbyid(id: any) {
    return this.http.get("http://localhost:3000/users/" + id)
  }

  postdata(data: any) {
    debugger
    return this.http.post("http://localhost:3000/users", data)
  }

  update(data: any, id: any) {
    debugger
    return this.http.put("http://localhost:3000/users/" + id, data)
  }

  delete(data: any) {
    debugger
    return this.http.delete("http://localhost:3000/users/" + data)
  }

  // login
  lgetdata() {
    return this.http.get("http://localhost:3000/logins")
  }
  getToken() {
    return !!localStorage.getItem("user");
  }
}

