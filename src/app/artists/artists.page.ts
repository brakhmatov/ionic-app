import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../providers/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadArtists();
  }

  private loadArtists() {
    console.log('loading...');
  }

}
