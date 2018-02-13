import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { VisionComponent } from './components/vision/vision.component';
import { BoardOfDirectorsComponent } from './components/board-of-directors/board-of-directors.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./routes";
import { ManagementProfileComponent } from './components/management-profile/management-profile.component';
import { OrganisationChartComponent } from './components/organisation-chart/organisation-chart.component';
import { ManufacturingProcessComponent } from './components/manufacturing-process/manufacturing-process.component';
import { BudgetComponent } from './components/budget/budget.component';
import { ProductComponent } from './components/product/product.component';
import { RetrofittingComponent } from './components/retrofitting/retrofitting.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ShortCircuitPerformanceComponent } from './components/short-circuit-performance/short-circuit-performance.component';
import { ResearchComponent } from './components/research/research.component';
import { TestingFacilitiesComponent } from './components/testing-facilities/testing-facilities.component';
import { RoutineTestsComponent } from './components/routine-tests/routine-tests.component';
import { AllDealersComponent } from './components/all-dealers/all-dealers.component';
import { StateGovernmentDepartmentComponent } from './components/state-government-department/state-government-department.component';
import { CentralGovernmentDepartmentComponent } from './components/central-government-department/central-government-department.component';
import { ScientificEstablishmentsComponent } from './components/scientific-establishments/scientific-establishments.component';
import { SparesComponent } from './components/spares/spares.component';
import { FooterComponent } from './components/footer/footer.component';
import { Ria2005Component } from './components/ria/ria-2005/ria-2005.component';
import { RtiComponent } from './components/ria/rti/rti.component';
import { Ria1Component } from './components/ria/ria1/ria1.component';
import { Ria2Component } from './components/ria/ria2/ria2.component';
import { Ria3Component } from './components/ria/ria3/ria3.component';
import { Ria4Component } from './components/ria/ria4/ria4.component';
import { Ria5Component } from './components/ria/ria5/ria5.component';
import { Ria6Component } from './components/ria/ria6/ria6.component';
import { Ria7Component } from './components/ria/ria7/ria7.component';
import { Ria8Component } from './components/ria/ria8/ria8.component';
import { Ria9Component } from './components/ria/ria9/ria9.component';
import { Ria10Component } from './components/ria10/ria10.component';
import { Ria11Component } from './components/ria/ria11/ria11.component';
import { Ria12Component } from './components/ria/ria12/ria12.component';
import { Ria13Component } from './components/ria/ria13/ria13.component';
import { Ria14Component } from './components/ria/ria14/ria14.component';
import { Ria15Component } from './components/ria/ria15/ria15.component';
import { Ria16Component } from './components/ria/ria16/ria16.component';
import { Ria181Component } from './components/ria/ria18-1/ria18-1.component';
import { Ria182Component } from './components/ria/ria18-2/ria18-2.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CompanyProfileComponent,
    VisionComponent,
    BoardOfDirectorsComponent,
    ContactComponent,
    NotFoundComponent,
    ManagementProfileComponent,
    OrganisationChartComponent,
    ManufacturingProcessComponent,
    BudgetComponent,
    ProductComponent,
    RetrofittingComponent,
    CertificatesComponent,
    ShortCircuitPerformanceComponent,
    ResearchComponent,
    TestingFacilitiesComponent,
    RoutineTestsComponent,
    AllDealersComponent,
    StateGovernmentDepartmentComponent,
    CentralGovernmentDepartmentComponent,
    ScientificEstablishmentsComponent,
    SparesComponent,
    FooterComponent,
    Ria2005Component,
    RtiComponent,
    Ria1Component,
    Ria2Component,
    Ria3Component,
    Ria4Component,
    Ria5Component,
    Ria6Component,
    Ria7Component,
    Ria8Component,
    Ria9Component,
    Ria10Component,
    Ria11Component,
    Ria12Component,
    Ria13Component,
    Ria14Component,
    Ria15Component,
    Ria16Component,
    Ria181Component,
    Ria182Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
