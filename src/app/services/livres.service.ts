import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Subject } from 'rxjs';
import { Livre } from '../models/Livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  livres: Livre[] = [];
  livreSubject = new Subject<Livre[]>();

  constructor() { }

  affichageLivre() {
    this.livreSubject.next(this.livres);
  }

  // enregistrerLivre() {
  //   initializeApp
  // }
}
