import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'empty-component',
  templateUrl: './empty-component.component.html',
  styleUrls: ['./empty-component.component.scss'],
})
export class EmptyComponentComponent implements OnInit {
  @Input()
  text: String; 

  constructor() { }

  ngOnInit() {}

}
