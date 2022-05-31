import { Component, ViewChild, OnInit, Input } from "@angular/core";

@Component({
  selector: "score-counter",
  templateUrl: "./score-counter.component.html",
  styleUrls: ["./score-counter.component.scss"],
})
export class ScoreCounterComponent implements OnInit {
  _wrongValue: number = 0;
  _rightValue: number = 0;
  level: number = 50;

  constructor() {}

  ngOnInit() {
    console.log("level", this.level);
  }

  get wrongValue(): number {
    return this._wrongValue;
  }
  get rightValue(): number {
    return this._rightValue;
  }
  @Input("wrongValue") set wrongValue(ans: number) {
    this._wrongValue = ans;
    this.updateProgress();
  }
  @Input("rightValue") set rightValue(ans: number) {
    this._rightValue = ans;
    this.updateProgress();
  }

  updateProgress() {
    console.log(this._rightValue);
    console.log(this._wrongValue);
    if (this._rightValue == 0 && this._wrongValue == 0) {
      this.level = 50;
      return;
    }
    this.level = (this._rightValue / (this._rightValue + this._wrongValue)) * 100;
    // return this.level+"%";
  }
}
