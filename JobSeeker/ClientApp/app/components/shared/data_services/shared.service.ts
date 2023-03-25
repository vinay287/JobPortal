import { Injectable } from '@angular/core';
import { ICandidate } from '../Interfaces';



@Injectable()
export class SharedService {

	SharedCandidate: ICandidate

	saveCandidatetoService(candidate: ICandidate) {
		this.SharedCandidate = candidate;
	}
	getCandidatefromService(): ICandidate {
		return this.SharedCandidate;
	}


}