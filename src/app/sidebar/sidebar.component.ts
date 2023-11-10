import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const menu = localStorage.getItem('menu')!=null?localStorage.getItem('menu'):"manageuser";
  
    $("."+menu).css("color","#007bff");
  }
  btnclick(data){
    console.log(data);
    var splitted = data.split("/");
    console.log(splitted[3]);
   $("."+splitted[3]).css("color","red");
   localStorage.setItem('menu', splitted[3]);
  }
}
