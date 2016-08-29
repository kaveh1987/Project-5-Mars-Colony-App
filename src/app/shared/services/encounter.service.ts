import { Injectable } from '@angular/core';
import { Encounter } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export default class AlienService {
    encountersUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    constructor(private http: Http){}

    getEncounters(): Promise<Encounter[]> {
        return this.http.get(this.encountersUrl)
                        .toPromise()
                        .then(response => response.json().encounters)
                        .catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
