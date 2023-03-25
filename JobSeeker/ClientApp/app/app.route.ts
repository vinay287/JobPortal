import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { CandidateInfoComponent } from '../app/components/candidateinfo/candidateinfo.component';
import { JobInfoComponent } from '../app/components/jobinfo/jobinfo.component';






const appRoutes: Routes = [
	{ path: 'candidateinfo', component: CandidateInfoComponent },
	{ path: 'jobinfo', component: JobInfoComponent },

	//{ path: 'departments', component: DepartmentsComponent },
	//{ path: 'department-employees/:id', component: DepartmentEmployeesComponent },
	//{ path: 'department-edit/:id', component: DepartmentEditComponent },
	//{ path: 'department-new', component: DepartmentNewComponent },
	//{ path: 'employees', component: EmployeesComponent },
	//{ path: 'employee-edit/:id', component: EmployeeEditComponent },
	//{ path: 'employee-new', component: EmployeeNewComponent },
	//{ path: 'contracts', component: ContractsComponent },
	//{ path: 'contract-employee-details/:id', component: ContractEmployeeDetailsComponent },
	//{ path: 'contract-new', component: ContractNewComponent },
	//{ path: 'contract-edit/:id', component: ContractEditComponent },
	{ path: '', component: CandidateInfoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);