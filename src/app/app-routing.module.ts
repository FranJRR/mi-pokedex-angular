import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { InitialComponent } from './components/initial/initial.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
// login
import {Login} from './login/login.component';

const routes: Routes = [
  { path: '', component: InitialComponent, pathMatch: 'full' },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: 'login', component: ogin },

  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
