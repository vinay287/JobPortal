import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data_services/data.services'
import { SharedService } from '../shared/data_services/shared.service'
import { ICandidate, ISkills } from '../shared/interfaces';


@Component({
	selector: 'js-jobinfo',
	templateUrl: './jobinfo.component.html',
	styleUrls: ['jobinfo.component.css']
})
export class JobInfoComponent implements OnInit {
	candidateId: number;
	candidates: ICandidate;
	skills: ISkills[];
	outGoingSkills: ISkills[];

	noPrimarySkills: boolean;

	errormessage: string;

	jobtype: string[] = 'Full Time-Part Time-Contract'.split('-');

	skillsTitlePrimary: string = 'Primary Skills Needed'
	skillsTitleSecondary: string = 'Secondary Skills Needed'


	model = { options: 'Contract' };
	selectedloc: number;

	constructor(private dataService: DataService, private sharedService: SharedService) {
		////debugger;
		//this.sharedService = sharedService;

	}




	onSkillsReceived(incomingSkills: ISkills[]): void {
		////debugger;
		this.errormessage = "";
		this.skills = incomingSkills;


	}
	ngOnInit(): void {
		////debugger;
		this.candidates;

		this.candidates = this.sharedService.getCandidatefromService();

		if (this.candidates.skillnames != null) {
			this.skills = this.candidates.skillnames;
			this.candidateId = this.candidates.CandidateId;
			this.outGoingSkills = this.candidates.skillnames;
		}

	}

	SaveJobInfo(): void {
		//debugger;



		let primarySkillsData = this.skills.filter(m => m.isprimary === false);


		if (this.skills == null) {
			this.errormessage = "atleast one primary skill required!";
			return;
		}
		else if (primarySkillsData.length == 0) {
			this.errormessage = "Atleast one Primary Skill required!";
			return;
		}


		this.candidates = {
			"CandidateId": this.candidateId,
			"FistName": null,
			"LastName": null,
			"DOB": null,
			"DOJ": null,

			"JobType": this.model.options,
			"JobLocation": this.selectedloc,
			"skillnames": this.skills
		}



		this.dataService.putCandidate(this.candidates).subscribe(
			(candidate: ICandidate) => {

			});

	}

	OnlocationValueReceived(locationVal: number): void {
		//debugger;
		this.selectedloc = locationVal;
	}

}
