import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
// import { Http, HttpResponse } from '@capacitor-community/http';
import { Artist } from '../shared/model/Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  getArtistList(): Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>> {
    return getFirestore().collection('artists').get();
  }

  async getArtist(id: string): Promise<Artist> {
    const document = await getFirestore().collection('artists').doc(id).get();
    if (document.exists) {
      return document.data() as Artist;
    } else {
      return null;
    }
  }
}
