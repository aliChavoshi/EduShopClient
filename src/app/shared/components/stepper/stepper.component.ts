import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{ provide: MatStepper, useExisting: StepperComponent }]
})
export class StepperComponent extends MatStepper implements OnInit {
  @Input() linearModeSelected: boolean = false;
  @Output() selectIndex = new EventEmitter<number>();

  ngOnInit(): void {
    this.linear = this.linearModeSelected;
  }
  onClick(index: number) {
    this.selectedIndex = index;
    this.selectIndex.emit(index);
  }
}
