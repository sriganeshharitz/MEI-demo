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
    AllDealersComponent
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
