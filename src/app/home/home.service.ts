import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class HomeService {
    constructor(private firedatabase: AngularFireDatabase) { }

    getConfigurations() {
        const configsRef = this.firedatabase.object('configs').valueChanges();
        return configsRef;
    }
}