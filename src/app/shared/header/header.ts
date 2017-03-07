import {Component}  from '@angular/core';
declare var $:any;
@Component({
  selector:'header',
  templateUrl:'./app/shared/header/header.html'
})
export class header{
     				// Activate the side menu 
       		ngOnInit(){
           	$(".button-collapse").sideNav();
           }
      		
}