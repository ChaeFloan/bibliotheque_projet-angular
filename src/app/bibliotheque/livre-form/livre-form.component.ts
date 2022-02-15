import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivresService } from 'src/app/services/livres.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-livre-form',
  templateUrl: './livre-form.component.html',
  styleUrls: ['./livre-form.component.scss']
})
export class LivreFormComponent implements OnInit {

  createLibreForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private livreService: LivresService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  // initForm() {
  //   this.createLibreForm = this.formBuilder.group({
  //     titre: ['', [Validators.required]],

  //   })

}
