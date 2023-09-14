import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'caronas',
        loadChildren: () => import('../caronas-tab/caronas.module').then(m => m.CaronasPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil-tab/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: 'caronas',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
