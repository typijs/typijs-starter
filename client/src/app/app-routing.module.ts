import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsPageRender } from '@typijs/core';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: 'typijs',
    loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '**',
        data: { reuse: false }, // pass reuse param to CustomRouteReuseStrategy
        component: CmsPageRender,
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
