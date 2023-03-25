import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data_services/data.services'
import { SharedService } from '../shared/data_services/shared.service'
import { ICandidate, ISkills } from '../shared/interfaces';

import { IMyOptions } from 'mydatepicker';



@Component({
	selector: 'js-candidateinfo',
	styleUrls: ['candidateinfo.component.css'],
	templateUrl: 'candidateinfo.component.html',

})

export class CandidateInfoComponent implements OnInit {

	candidateId: number;
	candidates: ICandidate;
	skills: ISkills[];
	outGoingSkills: ISkills[];
	primarySkills: ISkills[];
	secondarySkills: ISkills[];
	noPrimarySkills: boolean;

	errormessage: string;

	firstname: string;
	lastname: string;
	DOB: Object;
	DOJ: Object;

	dobarray: string[];
	dobdayarr: string[];

	dojarray: string[];
	dojdayarr: string[];

	private myDatePickerOptions: IMyOptions = {

		dateFormat: 'mm/dd/yyyy',
	};


	skillsTitle: string = 'Candidate Skills Set'


	//, private sharedService: SharedService
	constructor(private dataService: DataService, private sharedService: SharedService) {
		//
		//this.sharedService = sharedService;
	}


	ngOnInit(): void {

		
		
		if (this.sharedService.getCandidatefromService() == null)
			this.clearData();
		else {
			let CandidateAdded = this.sharedService.getCandidatefromService();
			this.getCandidateById(CandidateAdded);
		}


	}


	getCandidateById(candidates:ICandidate): void {
		//this.dataService.getCandidate().subscribe((candidates: ICandidate) => {

			

			this.candidateId = candidates.CandidateId;
			this.firstname = candidates.FistName;
			this.lastname = candidates.LastName;

			this.dobarray = candidates.DOB.toString().split("-");
			this.dobdayarr = this.dobarray[2].toString().split("T");


			this.DOB = {
				date: {
					year: parseInt(this.dobarray[0]),
					month: parseInt(this.dobarray[1]),
					day: parseInt(this.dobdayarr[0])
				}
			};

			this.dojarray = candidates.DOJ.toString().split("-");
			this.dojdayarr = this.dojarray[2].toString().split("T");

			this.DOJ = {
				date: {
					year: parseInt(this.dojarray[0]),
					month: parseInt(this.dojarray[1]),
					day: parseInt(this.dojdayarr[0])
				}
			};

			this.outGoingSkills = candidates.skillnames;

			this.primarySkills = candidates.skillnames.filter(c => c.isprimary === true);



			//this.sharedService.saveCandidatetoService(candidates);
		//},
		//	error => {


		//		console.log('Failed to load candidates.' + error);
		//	});

	}


	

	onSkillsReceived(incomingSkills: ISkills[]): void {
		this.errormessage = "";
		this.skills = incomingSkills;
	}

	SaveCandidate(): void {
		debugger;
		//let primaryskillsdata = this.skills.filter(m => m.isprimary === false);

		if (this.skills == null) {
			this.errormessage = "atleast one primary skill required!";
			return;
		}

		this.candidates = {
			"CandidateId": null,
			"FistName": this.firstname,
			"LastName": this.lastname,
			"DOB": this.DOB["formatted"],
			"DOJ": this.DOJ["formatted"],
			"JobType": "",
			"JobLocation": null,
			"skillnames": this.skills
		}

		this.dataService.postCandidate(this.candidates).subscribe(
			(candidate: ICandidate) => {
				let cand = candidate;
				let sand = this.candidates;
				this.candidateId = sand.CandidateId;
				this.sharedService.saveCandidatetoService(cand); 
			});

	}

	clearData(): void {
		//
		this.firstname = "";
		this.lastname = "";
		this.DOB = {
			date: {
				year: "",
				month: "",
				day: ""
			}
		};
		this.DOJ = {
			date: {
				year: "",
				month: "",
				day: ""
			}
		};
		this.outGoingSkills = [];
		this.candidateId = 0;
		
	}
}


