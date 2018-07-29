import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomcontrolsComponent } from './customcontrols/customcontrols.component';

const routes: Routes = [{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path:'controls',component:CustomcontrolsComponent},
{path: '', redirectTo: '/login', pathMatch: 'full'}];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
