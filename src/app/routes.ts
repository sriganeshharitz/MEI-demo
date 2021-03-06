import {Routes} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HomeComponent} from './components/home/home.component';
import {CompanyProfileComponent} from './components/company-profile/company-profile.component';
import {VisionComponent} from './components/vision/vision.component';
import {BoardOfDirectorsComponent} from './components/board-of-directors/board-of-directors.component';
import {ManagementProfileComponent} from './components/management-profile/management-profile.component';
import {OrganisationChartComponent} from './components/organisation-chart/organisation-chart.component';
import {ManufacturingProcessComponent} from './components/manufacturing-process/manufacturing-process.component';
import {BudgetComponent} from './components/budget/budget.component';
import {ProductComponent} from './components/product/product.component';
import {RetrofittingComponent} from './components/retrofitting/retrofitting.component';
import {CertificatesComponent} from './components/certificates/certificates.component';
import {ShortCircuitPerformanceComponent} from './components/short-circuit-performance/short-circuit-performance.component';
import {ResearchComponent} from './components/research/research.component';
import {TestingFacilitiesComponent} from './components/testing-facilities/testing-facilities.component';
import {RoutineTestsComponent} from './components/routine-tests/routine-tests.component';
import {ContactComponent} from './components/contact/contact.component';
import {AllDealersComponent} from './components/all-dealers/all-dealers.component';
import {StateGovernmentDepartmentComponent} from './components/state-government-department/state-government-department.component';
import {CentralGovernmentDepartmentComponent} from './components/central-government-department/central-government-department.component';
import {ScientificEstablishmentsComponent} from './components/scientific-establishments/scientific-establishments.component';
import {SparesComponent} from './components/spares/spares.component';
import {Ria2005Component} from './components/ria/ria-2005/ria-2005.component';
import {RtiComponent} from './components/ria/rti/rti.component';
import {Ria1Component} from './components/ria/ria1/ria1.component';
import {Ria2Component} from './components/ria/ria2/ria2.component';
import {Ria3Component} from './components/ria/ria3/ria3.component';
import {Ria4Component} from './components/ria/ria4/ria4.component';
import {Ria5Component} from './components/ria/ria5/ria5.component';
import {Ria6Component} from './components/ria/ria6/ria6.component';
import {Ria7Component} from './components/ria/ria7/ria7.component';
import {Ria8Component} from './components/ria/ria8/ria8.component';
import {Ria9Component} from './components/ria/ria9/ria9.component';
import {Ria10Component} from './components/ria10/ria10.component';
import {Ria11Component} from './components/ria/ria11/ria11.component';
import {Ria12Component} from './components/ria/ria12/ria12.component';
import {Ria13Component} from './components/ria/ria13/ria13.component';
import {Ria14Component} from './components/ria/ria14/ria14.component';
import {Ria15Component} from './components/ria/ria15/ria15.component';
import {Ria16Component} from './components/ria/ria16/ria16.component';
import {Ria181Component} from './components/ria/ria18-1/ria18-1.component';
import {Ria182Component} from './components/ria/ria18-2/ria18-2.component';
import {Ria183Component} from './components/ria/ria18-3/ria18-3.component';

export const ROUTES: Routes = [
  {path: 'ria', component: Ria2005Component,
    children: [
      // {path: 'home', component: RtiComponent},
      {path: 'ria18-3', component: Ria183Component},
      {path: 'ria1', component: Ria1Component},
      {path: 'ria2', component: Ria2Component},
      {path: 'ria3', component: Ria3Component},
      {path: 'ria4', component: Ria4Component},
      {path: 'ria5', component: Ria5Component},
      {path: 'ria6', component: Ria6Component},
      {path: 'ria7', component: Ria7Component},
      {path: 'ria8', component: Ria8Component},
      {path: 'ria9', component: Ria9Component},
      {path: 'ria10', component: Ria10Component},
      {path: 'ria11', component: Ria11Component},
      {path: 'ria12', component: Ria12Component},
      {path: 'ria13', component: Ria13Component},
      {path: 'ria14', component: Ria14Component},
      {path: 'ria15', component: Ria15Component},
      {path: 'ria16', component: Ria16Component},
      //{path: 'ria18-1', component: Ria181Component},
      //{path: 'ria18-2', component: Ria182Component},

    ]
  },
  {path: 'spares/:spares', component: SparesComponent},
  {path: 'customers/scientific-and-research-establishments', component: ScientificEstablishmentsComponent},
  {path: 'customers/central-govt-department', component: CentralGovernmentDepartmentComponent},
  {path: 'customers/state-govt-department', component: StateGovernmentDepartmentComponent},
  {path: 'dealers/all-dealers', component: AllDealersComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'quality/routine-tests', component: RoutineTestsComponent},
  {path: 'quality/testing-facilities', component: TestingFacilitiesComponent},
  {path: 'quality/research-and-development', component: ResearchComponent},
  {path: 'quality/short-circuit-performance', component: ShortCircuitPerformanceComponent},
  {path: 'quality/certificates', component: CertificatesComponent},
  {path: 'services/retrofitting', component: RetrofittingComponent},
  {path: 'products/:pid', component: ProductComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'manufacturing-process', component: ManufacturingProcessComponent},
  {path: 'company-profile', component: CompanyProfileComponent},
  {path: 'management-profile', component: ManagementProfileComponent},
  {path: 'organisation-chart', component: OrganisationChartComponent},
  {path: 'vision', component: VisionComponent},
  {path: 'board-of-directors', component: BoardOfDirectorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', component: NotFoundComponent}
];
