import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-up',
  templateUrl: './start-up.component.html',
  styleUrls: ['./start-up.component.scss']
})
export class StartUpComponent implements OnInit {

  public responsable: ''
  public dateDebutInc: ''
  public dateFinInc: ''
''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  registerStartUp(){

    this.http.post('http://127.0.0.1:9090/api/start-up/save', {
      "responsable" : this.responsable,
      "dateDebutInc": this.dateDebutInc,
      "dateFinInc": this.dateFinInc,

    }).subscribe(data => {
      console.log(data)
    })
  }
}
