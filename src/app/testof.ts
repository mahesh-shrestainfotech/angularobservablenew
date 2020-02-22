import { of } from 'rxjs';

export const myObservable = of(10,20,30,40);

export const myObserver = {

  next: value => console.log('Observer got a next value : '+value),

  error: err => console.log('Observer got an error : '+err),

  complete : () => console.log('Observer got a complete nofitication')

};