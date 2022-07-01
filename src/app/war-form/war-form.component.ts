import { War } from './../models/war.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Agressor } from '../models/participant.model';

@Component({
  selector: 'app-war-form',
  templateUrl: './war-form.component.html',
  styleUrls: ['./war-form.component.scss']
})
export class WarFormComponent implements OnInit {

  warId: string;

  templateDrivenWarForm: War;
  reactiveWarForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    const usa = new Agressor({name: 'Usa country'});
    const russia = new Agressor({name: 'Russia country'});
    const usaRussiaWar = new War(usa, russia);

    this.templateDrivenWarForm = usaRussiaWar;
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params) => {
        console.log(params);

        this.warId = params.warId;
      })

    this.initForm();
  }

  initForm() {
    this.reactiveWarForm = this.formBuilder.group({
      agressor: [this.templateDrivenWarForm.agressor.name, [Validators.required, Validators.maxLength(10)]],
      victim: [this.templateDrivenWarForm.victim.name, [Validators.required, Validators.maxLength(10)]],
    })
  }

  formTemplateSubmitted() {
    console.log(this.templateDrivenWarForm);
  }

  formReactiveSubmitted() {
    const war = this.reactiveWarForm.value;
    this.templateDrivenWarForm.agressor.name = war.agressor;
    this.templateDrivenWarForm.victim.name = war.victim;
  }
}
