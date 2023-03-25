export interface ICandidate {
	 CandidateId: number;
	 FistName: string;
	 LastName: string;
     DOJ: string;
     DOB: string;
	 JobType:string;
	 JobLocation: number;
	 skillnames: ISkills[]
}

export interface ISkills{
    Id:number;
	name: string;
	isprimary: boolean;
	YearofEx: number;
	candidateid: number
}