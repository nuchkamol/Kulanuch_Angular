import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ManageuserComponent} from './manageuser/manageuser.component';
import{AddcustomersComponent} from './addcustomers/addcustomers.component';
import{ManageroomComponent} from './manageroom/manageroom.component';
import {AddroomsComponent} from './addrooms/addrooms.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'manageuser', component: ManageuserComponent  },
  { path: 'addcustomers', component: AddcustomersComponent  },
  { path: 'manageroom', component: ManageroomComponent  },
  { path: 'addroom', component: AddroomsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
