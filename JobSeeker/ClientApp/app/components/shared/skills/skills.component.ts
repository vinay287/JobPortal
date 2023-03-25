import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data_services/data.services'
import { ICandidate, ISkills } from '../interfaces';

@Component({
	selector: 'js-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['skills.component.css']
})
export class SkillsComponent implements OnChanges {

	@Input() candidateId: number;
	@Input() isPrimaryskill: boolean;
	skills: ISkills[];
	newskills: ISkills;


	exp: number;
	skillname: string;

	@Input() inComingSkills: ISkills[];
	@Input() title: string;

	skillheading: string;

	@Output() outputSkills: EventEmitter<ISkills[]> =
	new EventEmitter<ISkills[]>();

	constructor(private dataService: DataService) {

	}

	ngOnChanges(): void {
		//debugger;
		if (this.inComingSkills != null)
			this.skills = this.inComingSkills.filter(s => s.isprimary === this.isPrimaryskill);
		this.skillheading = this.title;
	}

	addNewRow(): void {
		//debugger;
		
		this.newskills = {
			"Id": 0,
			"name": this.skillname,
			"isprimary": this.isPrimaryskill,
			"YearofEx": this.exp,
			"candidateid": this.candidateId
		};


		

		this.skills.push(this.newskills);
		this.inComingSkills.push(this.newskills);

		this.skillname = null;
		this.exp = null;

		this.outputSkills.emit(this.inComingSkills);
	}



	deleteRow(e): void {

		//debugger;

		let index = this.skills.findIndex(y => Object.is(e, y));

		this.skills.splice(index, 1);

	};
}
