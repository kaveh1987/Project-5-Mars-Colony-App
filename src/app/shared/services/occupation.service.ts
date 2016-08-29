import { Injectable } from '@angular/core';
import { Occupation } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export default class OccupationService {
    occupationsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/occupations';
    constructor(private http: Http){}

    getOccupations(): Promise<Occupation[]> {
        return this.http.get(this.occupationsUrl)
                        .toPromise()
                        .then(response => response.json().occupations)
                        .catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
