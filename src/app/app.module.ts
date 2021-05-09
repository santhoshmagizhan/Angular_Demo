import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { AccountsComponent } from './accounts/accounts.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {HttpClientModule} from '@angular/common/http'
import { OAuthModule } from 'angular-oauth2-oidc';
import { FacetsComponent } from './facets/facets.component';


const routes: Routes = [
  {path:"Dboard",component:DashboardComponent},
  {path:"Search",component:SearchComponent},
  {path:"Acc",component:AccountsComponent},
  {path:"Facets",component:FacetsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    AccountsComponent,
    DialogContentComponent,
    FacetsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,MatBadgeModule,MatDialogModule,MatSlideToggleModule,MatProgressBarModule,
    MatIconModule,MatSidenavModule,MatToolbarModule,MatListModule,HttpClientModule,RouterModule.forRoot(routes),
    OAuthModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
