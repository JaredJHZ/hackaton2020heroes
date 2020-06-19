import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { DescribeComponent } from './page/describe/describe.component';
import { ArquitecturaComponent } from './pages/arquitectura/arquitectura.component';


const routes: Routes = [
  {
    path:'arquitectura',
    component: ArquitecturaComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'add',
    component: AddComponent

  },
  {
    path:'edit',
    component: EditComponent
  },
  {
    path:'describe/:id',
    component: DescribeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
