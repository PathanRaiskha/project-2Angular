import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contrl-flow',
  imports: [FormsModule],
  templateUrl: './contrl-flow.component.html',
  styleUrl: './contrl-flow.component.css'
})
export class ContrlFlowComponent {
  isvisible: boolean= false;
  isdiv2:boolean=false;
  num1:string="";
  num2:string="";
  DropDownValue:string=""

  visible(){
    this.isvisible=true;

  }
  hide(){
    this.isvisible=false;
  }
  toggle(){
    this.isdiv2=!this.isdiv2
  }
}
