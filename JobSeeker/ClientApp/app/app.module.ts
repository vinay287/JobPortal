import { RouterModule, Routes } from '@angular/router';

import { UniversalModule } from 'angular2-universal'; // takes care of BrowserModule and HttpModule
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataService } from './components/shared/data_services/data.services'
import { ConfigService } from './components/shared/app_settings/config.service'
import { SharedService } from './components/shared/data_services/shared.service'

import { MyDatePickerModule } from 'mydatepicker';
//import { } from '';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { CandidateInfoComponent } from './components/candidateinfo/candidateinfo.component';
import { JobInfoComponent } from './components/jobinfo/jobinfo.component';




import { SkillsComponent } from './components/shared/skills/skills.component'
import { MenuComponent } from './components/shared/menu/menu.component'
import { Menu2Component } from './components/shared/menu/menu2.component'

import { JobLocationComponent } from './components/shared/joblocations/joblocations.component'

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal'



//routing
//import { routing } from './app.route';


@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		HomeComponent,
		CandidateInfoComponent,
		SkillsComponent,
		JobLocationComponent,
		MenuComponent,
		Menu2Component,
		JobInfoComponent
	],
	imports: [
		UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
		FormsModule,
		MyDatePickerModule,
		Ng2Bs3ModalModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: 'candidateinfo', pathMatch: 'full' },
			{ path: 'candidateinfo', component: CandidateInfoComponent },
			{ path: 'jobinfo', component: JobInfoComponent },

			{ path: '**', redirectTo: 'candidateinfo' }
		])
	],
	providers: [DataService, ConfigService, SharedService]
})
export class AppModule {
}
