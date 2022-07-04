import { War } from './../models/war.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Agressor } from '../models/participant.model';
import { WarsService } from '../services/war.service';

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
    private formBuilder: FormBuilder,
    private warsService: WarsService
  ) {
    const usa = new Agressor({name: 'Usa country'});
    const russia = new Agressor({name: 'Russia country'});
    const usaRussiaWar = new War(usa, russia);

    this.templateDrivenWarForm = usaRussiaWar;
  }

  ngOnInit(): void {
    this.subscribeOnWarFromRoute();
    this.initForm();
  }

  subscribeOnWarFromRoute(): void {
    this.activatedRoute.params
      .subscribe((params) => {
        this.warId = params.warId;
        this.getWar(this.warId)
      });
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

  getWar(warId: string) {
    this.warsService.getById(warId)
      .subscribe((war: War) => {
        this.war = war;
        this.patchWarForm(war)
      })
  }

  patchWarForm(war: War) {
    this.reactiveWarForm.patchValue({
      aggresor: war.agressor
    });
  }
}

// const sum = a + b;
// console.log(sum);

// const sum = a + getBFromRequest();
// console.log(sum);


// 1) Callback

// const cb = (resultB: number) => {
//   const sum = a + resultB;
//   console.log(cb2()/)
// }
// const cb2 = (resultB: number) => a + resultB;
// getBFromRequest(cb);

// 2) Promise

// getBFromRequest()
//   .then((b: number) => {
//     const sum = a + b;
//     return sum
//   });
//   .then((sum: number) => {
//     console.log(sum);
//   })
//   .catch((err) => console.error(err));

// 3) Observable

//   getUser()
//     .subscribe(this.countMarks)

//   const countMarks = (user) => const sum = user.mark1 + user.mark2;

// 4) async/await

// const async getSum = (a: number) => {

//   const b = await getBFromRequest();
//   const sum = a + b;
//   console.log(sum);
// };
