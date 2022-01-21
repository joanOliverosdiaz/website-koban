import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans-simulation',
  templateUrl: './loans-simulation.component.html',
  styleUrls: ['./loans-simulation.component.css']
})
export class LoansSimulationComponent implements OnInit {

  requestAmount = 500;
  simulationValue = 0;
  monthsValueDeps = [
    { value: 6 },
    { value: 12 },
    { value: 18 },
    { value: 24 },
  ];
  opcionSeleccionado: string = '24';
  constructor() { }

  ngOnInit(): void {
  }


  changeValue(depValue) {
    this.opcionSeleccionado = depValue;
    this.simulationValue = this.requestAmount / depValue;
  }

  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
