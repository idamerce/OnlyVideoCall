import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
const routes: Routes = [

	//{path:'auth/:view',component :AuthComponent}, 
 
	//{path:'home',component :HomeComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
