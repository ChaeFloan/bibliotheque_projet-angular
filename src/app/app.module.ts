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
import { AngularFireModule } from 'angularfire2';
// import { environment } from 'src/environments/environment.prod';
// import { initializeApp } from "firebase/app";
import { FirebaseAppModule, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'bibliotheque', component: BibliothequeComponent },
  { path: 'bibliotheque/livre', component: LivreComponent },
  { path: 'bibliotheque/formulaire', component: LivreFormComponent },
  { path: '', redirectTo: 'bibliotheque', pathMatch: 'full' },
  { path: '**', redirectTo: 'bibliotheque' }
]

// initializeApp(environment.firebase);
// Initialize Firebase
// const app = initializeApp(environment.firebaseConfig);
// Get a reference to the database service
// const database = getDatabase(app);
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
    AngularFireModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule
  ],
  providers: [LivresService, ScreenTrackingService,UserTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
