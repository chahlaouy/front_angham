import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-appui',
  templateUrl: './structure-appui.component.html',
  styleUrls: ['./structure-appui.component.scss']
})
export class StructureAppuiComponent implements OnInit {

  public nom: ''
  public addresse: ''
  public numTel: ''
  public description: ''


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  registerStructure(){

    this.http.post('http://127.0.0.1:9090/api/structure-appui/save', {
      "nom" : this.nom,
      "addresse": this.addresse,
      "numTel": this.numTel,
      "description": this.description,

    }).subscribe(data => {
      console.log(data)
    })
  }

}
