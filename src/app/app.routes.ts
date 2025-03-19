import { Routes } from '@angular/router';
import { ClashListComponent } from './clash/clash-list/clash-list.component';
import { PeerListComponent } from './peer/peer-list/peer-list.component';
import { ClashDetailComponent } from './clash/clash-detail/clash-detail.component';
import { ClashComponent } from './clash/clash.component';

export const routes: Routes = [
  {
    path: 'clashes',
    component: ClashComponent,
    children: [
      {
        path: ':clashId',
        component: ClashDetailComponent,
      },
      {
        path: '',
        component: ClashListComponent,
      },
    ],
  },
  {
    path: 'peers',
    component: PeerListComponent,
  },
  {
    path: '**',
    redirectTo: 'clashes',
  },
];
