import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OverviewComponent } from './pages/dashboard/overview/overview.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { StatsComponent } from './pages/dashboard/stats/stats.component';
import { TicketsComponent } from './pages/dashboard/tickets/tickets.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: OverviewComponent },
    { path: 'tickets', component: TicketsComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'settings', component: SettingsComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
