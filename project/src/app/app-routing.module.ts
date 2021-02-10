
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { FormComponent } from './views/form/form.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"sobre",
  component: AboutComponent
},{
  path:"contatos",
  component: FormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
