import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { HomeComponent } from './home/home.component';
import { CropHealthComponent } from './crop-health/crop-health.component';
import { FarmsComponent } from './farms/farms.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LogoutComponent } from './logout/logout.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { FarmManagemnetComponent } from './farm-managemnet/farm-managemnet.component';
import { FarmdetailsComponent } from './farmdetails/farmdetails.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LocationComponent } from './location/location.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route opens HomeComponent
  { path: 'login-user', component: LoginUserComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard-user', component: DashboardUserComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: 'crop-health', component: CropHealthComponent },
  { path: 'location', component: LocationComponent },
  { path: 'farms', component: FarmsComponent },
  { path: 'farm/:id', component: FarmdetailsComponent },
  { path: 'register-admin', component: RegisterAdminComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'widgets', component: TopWidgetsComponent },
  { path : 'farm-management', component: FarmManagemnetComponent},
  { path: 'farm/:id', component: FarmdetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to HomeComponent for any unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
