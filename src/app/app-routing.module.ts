import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './Main/details/contact/contact.component';
import { AboutComponent } from './Main/details/about/about.component';
import { LocateComponent } from './Main/details/locate/locate.component';
import { PaintingComponent } from './drawing/painting/painting.component';
import { Painting3dComponent } from './drawing/painting3d/painting3d.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'locate', component: LocateComponent },
  { path: '2d', component: PaintingComponent },
  { path: '3d', component: Painting3dComponent },
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes) 
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
//export const RoutingComponents=[MainComponent,ContactComponent,AboutComponent,LocateComponent,PaintingComponent,Painting3dComponent];
