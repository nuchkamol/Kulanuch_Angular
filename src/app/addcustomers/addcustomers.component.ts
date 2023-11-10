import { Component, OnInit } from '@angular/core';
import { Room} from '../manageroom/manageroom.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../app.constant';
declare var $:any;
declare var popupShow:any;
declare var popupHide:any;
@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.css' ,'../../assets/styles/custom.css' ]
})
export class AddcustomersComponent implements OnInit {
 txtFullname:string ="";
 txtJob:string="";
 selectedFile:File;
 fileUploadName:string="";
 txtFirstName:string="";
 txtLastName:string="";
 txtEmail:string="";
 txtLineID:string="";
 txtAddress:string="";
 txtDistrict:string="";
 txtArea:string="";
 txtMobile:string="";
 ddlCountry=0;
 txtDesc:string="";
 ddlSelectStatus=0;
 ddlSelectRoom=0;
 txtZipcode:string="";
 dataImage:any;
 imgPerson:any;
 ddlTitle=0;
 txtIDcard:string="";
 txtStartDate:string="";
 txtExpireDate:string="";
 txtElecUnit:string="";
  myDateValue: Date;
  txt_header_error:string = "";
  txt_body_error:String="";
 constructor(private http: HttpClient ) { }
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 }
 Rooms: Room[] = [];
  ngOnInit(): void {
  
    this.http.post<any>(API_URL.callSelectRoom_url, "" , this.httpOptions).subscribe(result => {
     // console.log("data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+JSON.parse(result));
      this.Rooms = result;
    });  
    
    this.myDateValue = new Date();
    popupHide('popup_viu');
    //var data = {'where':{KN_STATUS:'ว่าง'}};
    // $('#txtStartDate').datepicker({format: 'dd/mm/yyyy'});
    // $('#txtExpireDate').datepicker({format: 'dd/mm/yyyy'});

  }



  btnBrowse(){
    alert("tset");
  }

  hoverImageUser(){

   // $("#imgCustomer").animate({border:"23px solid #007bff"}, 1000 );
    //$("#imgCustomer").animate({border:"23px solid #007bff"}, 1000 );

    $("#imgCustomer").css({border: '0 solid #007bff'}).animate({
      borderWidth: 7
  }, 400);
  }

  outImageUser(){
    $("#imgCustomer").css({border: '7 solid #007bff'}).animate({
      borderWidth: 0
  }, 400);
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.fileUploadName = this.selectedFile.name;
    console.log(  this.selectedFile);

    this.readThis(event.target);
 

  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
     this.dataImage = myReader.result;
      console.log(myReader.result);
      $("#imgCustomer").attr("src", myReader.result);
    }
    myReader.readAsDataURL(file);
  }

  btnUpload(){
   
    alert("tset"+this.selectedFile.name);
  }

  onSubmit(data){
    data["dataImage"] = this.dataImage;
    console.log(data)
    this.http.post<any>(API_URL.callInsertCus_url, data , this.httpOptions).subscribe(result => {
      console.log(result);

      console.log(result);
      console.log(result["responseCode"]);
      console.log(result["responseMessage"]);
      var responseCode = result["responseCode"] != null ? result["responseCode"] : "9999";
      if(responseCode == "0000"){
        this.txt_header_error ="";
        this.txt_body_error="อัพเดทเรียบร้อยแล้วค่ะ";
        popupShow('popup_viu');
        this.txtFirstName="";
        this.txtLastName="";
        this.txtEmail="";
        this.txtLineID="";
        this.txtAddress="";
        this.txtDistrict="";
        this.txtArea="";
        this.txtMobile="";
        this.ddlCountry=0;
        this.txtDesc="";
        this.ddlSelectStatus=0;
        this.ddlSelectRoom=0;
        this.txtZipcode="";
        this.ddlTitle=0;
        this.txtIDcard="";
        this.txtStartDate="";
        this.txtExpireDate="";
        this.txtElecUnit="";
        $("#imgCustomer").attr("src", "../../assets/images/avatars/4.jpg");
        this.fileUploadName = "";

      }else{
        this.txt_header_error ="ขออภัยค่ะ";
        this.txt_body_error="ไม่สามารถอัพโหลดได้กรุณาลองใหม่อีกครั้งค่ะ";
        popupShow('popup_viu');
      }

    });

  }

}
