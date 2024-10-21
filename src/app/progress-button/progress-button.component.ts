import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'wm-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss']
})
export class ProgressButtonComponent implements OnInit {

  @Input()
  isDisabled: boolean = false;
  @Input()
  isLoading: boolean = false;
  @Input()
  btnName!: string;
  @Input()
  loadingBtnName!: string;
  @Input()
  type: "submit" | "button" | "reset" | "menu" = "submit";
  @Input()
  svgIcon!: string;
  @Input()
  class!: string;
  @Input()
  className!: string;
  @Input()
  spinnerDiameter!: number;
  @Input()
  varient: "filled" | "outlined" = "filled";
  @Input()
  toolTip!: string;
  @Output() btnClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges) {
    changes?.['isDisabled'] ? (this.isDisabled = changes?.['isDisabled']?.currentValue) : '';
    changes?.['isLoading'] ? (this.isLoading = changes?.['isLoading']?.currentValue) : '';

  }

  public onClick() {
    this.btnClick.emit()
  }

}