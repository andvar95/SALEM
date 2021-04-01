import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent} from './Components/main-page/main-page.component'
import { ConocenosComponent} from './Components/conocenos/conocenos.component';
import {DonativosComponent} from './Components/donativos/donativos.component'
import {PESCAComponent} from './Components/pesca/pesca.component'


const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'conocenos',component:ConocenosComponent},
  {path:'donativos',component:DonativosComponent},
  {path:'pesca',component:PESCAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
