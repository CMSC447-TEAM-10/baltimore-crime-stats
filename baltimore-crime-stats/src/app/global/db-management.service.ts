import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
//import { AppDomain } from "./app-base-util";

@Injectable({
  providedIn: 'root'
})
export class DbManagementService {

  constructor(private db: AngularFireDatabase) { }

  //get(domain: AppDomain)
}
