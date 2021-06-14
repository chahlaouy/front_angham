import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  public titre: ''
  public date: ''
  public description: ''
  public type: ''


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  registerTraining(){

    this.http.post('http://127.0.0.1:9090/api/formation/save', {
      "titre" : this.titre,
      "date": this.date,
      "type": this.type,
      "description": this.description,

    }).subscribe(data => {
      console.log(data)
    })
  }
}
