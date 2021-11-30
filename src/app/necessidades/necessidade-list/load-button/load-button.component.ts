import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'necessidade-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.scss']
})
export class LoadButtonComponentNecessidade implements OnInit {

  @Input() hasMore: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
