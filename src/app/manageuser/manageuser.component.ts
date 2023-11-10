import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../app.constant';
declare var $:any;

export interface User {
  _id:object;
  customer_title: string;
  customer_firstname: string;
  customer_lastname: string;
  customer_idcard: string;
  customer_startdate:string;
  customer_expiredate:string;
  customer_email: string;
  customer_mobile: string;
  customer_lineid: string;
  customer_address:string;
  customer_district: string;
  customer_area:string;
  customer_country:string;
  customer_zipcode:string;
  customer_description:string;
  customer_selectroom:string;
  customer_status:string;
  customer_image:string;
}

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})



export class ManageuserComponent implements OnInit {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  Users: User[] = [];
  hiddenDataImage:string;
  ngOnInit(): void {

    this.http.post<any>(API_URL.callSelectCus_url, "" , this.httpOptions).subscribe(result => {
      console.log(result);
      this.Users = result;
  });
  }
  btnAddCustomer(){
    window.location.href = "addcustomers";
  }

  zoomimage(dataImage){
    this.hiddenDataImage = dataImage;
    $('#modalZoomImage').modal('toggle')
  }
  
}
