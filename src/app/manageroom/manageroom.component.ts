import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../app.constant';
declare var $:any;
declare var popupShow:any;
declare var popupHide:any;
export interface Room {
  _id:object;
  KN_ROOM_NAME: string;
  KN_ROOM_NO: string;
  KN_DORM_BRANCH: string;
  KN_DORM_FLOOR: string;
  KN_DORM_ROOM: string;
  KN_STATUS: string;
  KN_DESCRIPTION: string;
}
@Component({
  selector: 'app-manageroom',
  templateUrl: './manageroom.component.html',
  styleUrls: ['./manageroom.component.css' ,'../../assets/styles/custom.css']
})

 
export class ManageroomComponent implements OnInit {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  Rooms: Room[] = [];
  txtUpdateDescription:string;
  hiddenRoomno:string;
  ngOnInit(): void {
   
  //   this.Rooms = [{
  //     "_id": {
  //       "$oid": "5e6f881ef39b7e38b084a864"
  //     },
  //     "KN_ROOM_NAME": "Kulanuch 1 room 1/1",
  //     "KN_ROOM_NO": "010101",
  //     "KN_DORM_BRANCH": "1",
  //     "KN_DORM_FLOOR": "1",
  //     "KN_DORM_ROOM": "1",
  //     "KN_STATUS": "ไม่ว่าง",
  //     "KN_DESCRIPTION": ""
  // }];
    this.http.post<any>(API_URL.callSelectRoom_url, "" , this.httpOptions).subscribe(result => {
        console.log(result);
        this.Rooms = result;
    });
    popupHide('popup_viu');
  }

  btnAddRoom(){
    window.location.href = "addroom";
  }

  editDescription(roomNo){
    $('#myModal').modal('toggle')
    this.hiddenRoomno = roomNo;
  }

  updateDesc(desc){
    

    var data = {room_no : this.hiddenRoomno , description : desc};
    this.http.post<any>(API_URL.callUpdateRoom_url, data , this.httpOptions).subscribe(result => {
      console.log(result);

      console.log(result["responseCode"]);
      console.log(result["responseMessage"]);
      var responseCode = result["responseCode"] != null ? result["responseCode"] : "9999";
      if(responseCode == "0000"){
        window.location.href  ="manageroom";
      }
  });
  }
}
