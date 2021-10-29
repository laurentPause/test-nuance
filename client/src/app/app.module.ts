import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OverviewComponent } from './pages/dashboard/overview/overview.component';
import { TicketsComponent } from './pages/dashboard/tickets/tickets.component';
import { StatsComponent } from './pages/dashboard/stats/stats.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FormComponent,
    DashboardComponent,
    OverviewComponent,
    TicketsComponent,
    StatsComponent,
    SettingsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
