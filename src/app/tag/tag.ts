import {Component,Input}  from '@angular/core'
@Component({
  selector:'tag',
  templateUrl:'./app/tag/tag.html'
})
export class tag{
        @Input()
    title:string="xxx";
}