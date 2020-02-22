import { ajax } from 'rxjs/ajax';

// Create an Observable that will create an AJAX request
export const apiData = ajax('/api/data');
