import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './Main/shared/footer/footer.component';
import { HeaderComponent } from './Main/shared/header/header.component';
import { HomeComponent } from './Main/home/home.component';
import { ContactComponent } from './Main/details/contact/contact.component';
import { AboutComponent } from './Main/details/about/about.component';
import { LocateComponent } from './Main/details/locate/locate.component';
import { AppRoutingModule } from './/app-routing.module';
import { PaintingComponent } from './drawing/painting/painting.component';
import { Painting3dComponent } from './drawing/painting3d/painting3d.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LocateComponent,
    PaintingComponent,
    Painting3dComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
