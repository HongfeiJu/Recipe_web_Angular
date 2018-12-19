import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('featureSelected') switchView = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(para: string ) {
    this.switchView.emit(para);
  }

}
