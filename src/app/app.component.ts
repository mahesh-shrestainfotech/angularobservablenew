import { Component, OnInit } from '@angular/core';
import { myObservable, myObserver} from './testof';
import { registerObserver } from './testinterval';
import { apiData } from './testajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  title = 'observableproj';

  ngOnInit(): void {
    
    //myObservable.subscribe(myObserver);

    //registerObserver();

    // Subscribe to create the request
    apiData.subscribe(res => console.log(res.status, res.response));

  }
  
}

