import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { ConfigService } from '../app_settings/config.service';
import { ICandidate, ISkills } from '../Interfaces';

@Injectable()
export class DataService {

	private headers = new Headers({ 'Content-Type': 'application/json' });

	_baseUrl: string = '';

	constructor(private http: Http,
		private configService: ConfigService) {

		this._baseUrl = configService.getApiURI();

	}

	//get 1st default Candidate
	getCandidate(): Observable<ICandidate> {
		return this.http.get(this._baseUrl +'/candidate')
			.map((response: Response) => <ICandidate>response.json())


	}

	//get single Candidate using Id
	getCandidateById(id: number): Observable<ICandidate> {
		return this.http.get(this._baseUrl + 'Candidate/' + id)
			.map((res: Response) => {
				return res.json();
			})
			
	}

	postCandidate(Candidate: ICandidate): Observable<ICandidate> {

		return this.http.post(this._baseUrl + 'Candidate/', Candidate, { headers: this.headers })
			.map((res: Response) => {
				return res.json();
			})
	}

	putCandidate(Candidate: ICandidate): Observable<ICandidate> {

		return this.http.put(this._baseUrl + 'Candidate/', Candidate, { headers: this.headers })
			.map((res: Response) => {
				return res.json();
			})
	}

}