import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'header',
    loadChildren: () => import('./shared/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./shared/footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'services/web',
    loadChildren: () => import('./pages/services/web/web.module').then(m => m.WebPageModule)
  },
  {
    path: 'services/computer',
    loadChildren: () => import('./pages/services/computer/computer.module').then(m => m.ComputerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
