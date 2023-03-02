import { Component } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab9';
  senderId = '';
  address ='';
  weight =0;
  fragile = '';
  parcel:any[]=[];
  sender: any []=[];
  name ='';
  section=1;

  
  //gets initialise when the appcomponent is called
  //component needs to access DatabaseService
  //request an instance of this service
  constructor(private dbService: DatabaseService){}

  listParcels(no:number){
    this.dbService.getParcels().subscribe((data:any)=>{
      console.log(data)
      this.parcel = data
      this.section =no
    })
  }

  addParcel(){
    let obj = {
      "senderId":this.senderId,
      parcel:{
      "address": this.address,
      "weight":this.weight,
      "fragile":this.fragile}
    }
    //http request will get executed when subscribe
    this.dbService.createParcel(obj).subscribe((data:any)=>{
        console.log(data)
        this.listParcels(5)
    });
  }

  listSender(no:number){
    this,this.dbService.getSender().subscribe((data:any)=>{
      console.log(data)
      this.section = no 
      this.sender = data
    })
  }
  changeSection(sectionId:number){
    this.section = sectionId; 
  }

  addSender(){
    let obj ={"name": this.name}
    this.dbService.postSender(obj).subscribe((data:any)=>{
      this.listSender(4)
    })
  }


}
