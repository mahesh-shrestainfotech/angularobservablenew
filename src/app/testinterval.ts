import { interval } from 'rxjs';

// Create an Observable that will publish a value on an interval
export const secondsCounter = interval(1000);

export function registerObserver(){
    // Subscribe to begin publishing values
    secondsCounter.subscribe(n => console.log(`It's been ${n} seconds since subscribing!`));
}