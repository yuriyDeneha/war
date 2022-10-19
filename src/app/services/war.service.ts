import { War } from './../models/war.model';
import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class WarsService extends CrudService<War>{

  wars = [];

  collectionName = 'wars';

  constructor() {
  }
}
