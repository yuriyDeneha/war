import { Injectable } from '@angular/core';
import { War } from '../models/war.model';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class WarsService extends CrudService<War>{

  collectionName = 'wars';

  constructor(public firestore: Firestore) {
    super(firestore)
   }
}
