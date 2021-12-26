import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'artists',
        children: [
          {
            path: '',
            loadChildren: () => import('../artists/artists.module').then(m => m.ArtistsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../artists/artist/artist.module').then(m => m.ArtistPageModule)
          }
        ]
      },
      {
        path: 'stations',
        children: [
          {
            path: '',
            loadChildren: () => import('../stations/stations.module').then(m => m.StationsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../stations/station/station.module').then(m => m.StationPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/artists',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/artists',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
