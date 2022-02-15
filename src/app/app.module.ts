import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { LivreComponent } from './bibliotheque/livre/livre.component';
import { LivreFormComponent } from './bibliotheque/livre-form/livre-form.component';
import { LivresService } from './services/livres.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'bibliotheque', component: BibliothequeComponent },
  { path: 'bibliotheque/livre', component: LivreComponent },
  { path: 'bibliotheque/formulaire', component: LivreFormComponent },
  { path: '', redirectTo: 'bibliotheque', pathMatch: 'full' },
  { path: '**', redirectTo: 'bibliotheque' }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BibliothequeComponent,
    LivreComponent,
    LivreFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LivresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
