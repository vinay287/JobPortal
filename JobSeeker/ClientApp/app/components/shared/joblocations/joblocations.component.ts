import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { location } from './location.component';

@Component({
	selector: 'js-locations',
	templateUrl: './joblocations.component.html'
})
export class JobLocationComponent {
	selectedVal: number = -1;
	locations = [
		new location(null, ""),
		new location(1, 'Onsite'),
		new location(2, 'Onshore'),
		new location(3, 'Offshore')
	];

	@Output() locationValue: EventEmitter<number> =
	new EventEmitter<number>();

	onChange(): void {
		//debugger;
		this.locationValue.emit(this.selectedVal);
	}
}



