import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ExpectativasComponent } from './expectativas/expectativas.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PassadoComponent } from './passado/passado.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PresenteComponent } from './presente/presente.component';

const routes: Routes = [
  { path:'', redirectTo: 'Inicio', pathMatch:'full'},
  { path: 'Inicio' , component: HomeComponent },
  { path: 'interacao', component: FeedComponent },
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'passado', component: PassadoComponent},
  { path: 'presente', component: PresenteComponent},
  { path: 'expectativas', component: ExpectativasComponent},
  { path: 'cadastro-tema', component: PostTemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
