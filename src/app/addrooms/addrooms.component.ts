import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../app.constant';

declare var popupHide:any;
declare var popupShow:any;
declare var $:any;
@Component({
  selector: 'app-addrooms',
  templateUrl: './addrooms.component.html',
  styleUrls: ['./addrooms.component.css' , '../../assets/styles/custom.css']
})
export class AddroomsComponent implements OnInit {

  constructor( private http: HttpClient ) { }
  txtRoomName:string="";
  txtRoomNumber:string="";
  txtDormBranch:string="";
  txtDormFloor:string="";
  txtDormRoom:string="";
  ddlStatus= "0";
  txtDescription:string="";
  txt_header_error:string = "";
  txt_body_error:String="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  ngOnInit(): void {
    console.log("test");
    popupHide('popup_viu');
  }

  onSubmit(data) {
     console.log("submit" + data["txtRoomName"]);
    this.http.post<any>(API_URL.callInsertRoom_url, data , this.httpOptions).subscribe(result => {
      console.log(result);
      console.log(result["responseCode"]);
      console.log(result["responseMessage"]);
      var responseCode = result["responseCode"] != null ? result["responseCode"] : "9999";
      if(responseCode == "0000"){
        this.txt_header_error ="";
        this.txt_body_error="อัพเดทเรียบร้อยแล้วค่ะ";
        popupShow('popup_viu');
        this.txtRoomName = "";
        this.txtRoomNumber = "";
        this.txtDormBranch = "";
        this.ddlStatus = "0";
        this.txtDescription = "";
        this.txtDormFloor ="";
        this.txtDormRoom="";
      }else{
        this.txt_header_error ="ขออภัยค่ะ";
        this.txt_body_error="ไม่สามารถอัพโหลดได้กรุณาลองใหม่อีกครั้งค่ะ";
        popupShow('popup_viu');
      }
    });
  }
}
