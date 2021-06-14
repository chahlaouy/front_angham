import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-former',
  templateUrl: './former.component.html',
  styleUrls: ['./former.component.scss']
})
export class FormerComponent implements OnInit {

  
  public isHidden = true
    public username: ''
    public email: ''
    public password: ''
    public lastName: ''
    public firstName: ''
    public phone: ''

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }
  toggle(){
    this.isHidden =  ! this.isHidden
  }
  registerFormation(){
    console.log(this.firstName)
  //   if (localStorage.getItem('token')) {
        
  //     req = req.clone({
  //       setHeaders: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`
  //       }
  //     });
  // }
    this.http.post('http://127.0.0.1:9090/api/auth/signup', {
      "username" : this.username,
      "email": this.email,
      "password": this.password,
      "lastName": this.lastName,
      "firstName": this.firstName,
      "phone": this.phone,
      "role": ["formateur"],
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(data => {
      console.log(data)
    })
  }

}
