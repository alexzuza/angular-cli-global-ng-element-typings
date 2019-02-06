import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const newCustomElement = document.createElement('my-custom-element');
    console.log(newCustomElement.myCustomProp);
  }
}
