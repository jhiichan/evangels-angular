import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Video } from '../video'

@Injectable()
export class VideosService {
    constructor(private firedatabase: AngularFireDatabase) { }

    getData() {
        const videosRef = this.firedatabase
            .list<Video>('evangels/videos',
                ref => ref.orderByChild('dateCreated'))
            .valueChanges();
        return videosRef;
    }
}