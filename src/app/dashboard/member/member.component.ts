import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  public username: ''
  public email: ''
  public password: ''
  public lastName: ''
  public firstName: ''
  public phone: ''

constructor( private http: HttpClient) { }

ngOnInit(): void {
}

registerFormation(){
  console.log(this.firstName)
  this.http.post('http://127.0.0.1:9090/api/auth/signup', {
    "username" : this.username,
    "email": this.email,
    "password": this.password,
    "lastName": this.lastName,
    "firstName": this.firstName,
    "phone": this.phone,
    "role": ["user"]
  }).subscribe(data => {
    console.log(data)
  })
}

}
