import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-baindding',
  imports: [FormsModule],
  templateUrl: './data-baindding.component.html',
  styleUrl: './data-baindding.component.css'
})
export class DataBainddingComponent {

   course:string="master in computer";
   buttontype:string="checkbox";
   inputType: string="text";


   showAlert(massege:string){
    alert(massege);
   }
}
