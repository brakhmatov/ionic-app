import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
// import { Http, HttpResponse } from '@capacitor-community/http';
import { Artist } from '../shared/model/Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private artists: AngularFirestoreCollection<Artist>;
  items: Observable<Artist[]>;

  constructor(private firestore: AngularFirestore) { 
    this.artists = this.firestore.collection<Artist>('artists');
    this.items = this.artists.valueChanges();
  }

  // getArtistList(): Promise<Artist[]> {
  //   this.artists = this.firestore.collection<Artist>('artists');
  // }

  // async getArtist(id: string): Promise<Artist> {
  //   const document = await getFirestore().collection('artists').doc(id).get();
  //   if (document.exists) {
  //     return document.data() as Artist;
  //   } else {
  //     return null;
  //   }
  // }
}
