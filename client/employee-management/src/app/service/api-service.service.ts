import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl: string = 'http://localhost:3000/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient) { }

  //crate
  createEmployee(body: Employee) {
    let url = `${this.baseUrl}/create`
    return this.http.post(url, body)
  }


  //getall
  getEmployees() {
    return this.http.get(`${this.baseUrl}`)
  }

  // getone
  getOneEmployee(id: string) {
    let url = `${this.baseUrl}/read/${id}`
    return this.http.get(url, { headers: this.headers })
  }

  // UpdateEmploy
  UpdateEmploy(id: string, data: Employee) {
    let url = `${this.baseUrl}/update/${id}`
    return this.http.put(url, data, { headers: this.headers })
      .subscribe(data => console.log(data), error => console.log(error))
  }

  // Delete employee
  deleteEmployee(id: string) {
    let url = `${this.baseUrl}/delete/${id}`
    return this.http.delete(url, { headers: this.headers })
      .subscribe(data => console.log(data), error => console.log(error))
  }


}