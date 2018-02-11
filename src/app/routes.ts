import {Routes} from "@angular/router";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {CompanyProfileComponent} from "./components/company-profile/company-profile.component";
import {VisionComponent} from "./components/vision/vision.component";
import {BoardOfDirectorsComponent} from "./components/board-of-directors/board-of-directors.component";
import {ManagementProfileComponent} from "./components/management-profile/management-profile.component";
import {OrganisationChartComponent} from "./components/organisation-chart/organisation-chart.component";
import {ManufacturingProcessComponent} from "./components/manufacturing-process/manufacturing-process.component";
import {BudgetComponent} from "./components/budget/budget.component";
import {ProductComponent} from "./components/product/product.component";
import {RetrofittingComponent} from "./components/retrofitting/retrofitting.component";
import {CertificatesComponent} from "./components/certificates/certificates.component";
import {ShortCircuitPerformanceComponent} from "./components/short-circuit-performance/short-circuit-performance.component";
import {ResearchComponent} from "./components/research/research.component";
import {TestingFacilitiesComponent} from "./components/testing-facilities/testing-facilities.component";
import {RoutineTestsComponent} from "./components/routine-tests/routine-tests.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AllDealersComponent} from "./components/all-dealers/all-dealers.component";

export const ROUTES: Routes = [
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
