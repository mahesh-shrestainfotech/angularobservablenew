import { Component, OnInit } from '@angular/core';
import { mouseMoves } from '../testfrom-event';
import { fromEvent } from 'rxjs'; 

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var el = document.getElementById('my-element');

    // Create an Observable that will publish mouse movements
    var mouseMoves = fromEvent(el, 'mousemove');


    var subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    
      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });
    
  }

}
