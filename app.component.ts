import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { DataBainddingComponent } from './components/data-baindding/data-baindding.component';
import { ContrlFlowComponent } from './components/contrl-flow/contrl-flow.component';


@Component({
  selector: 'app-root',
  imports: [ Component1Component,Comp2Component,DataBainddingComponent,ContrlFlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProj2';
}
