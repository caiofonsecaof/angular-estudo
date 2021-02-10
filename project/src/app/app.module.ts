import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { FormComponent } from './views/form/form.component';

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  AboutComponent,
  FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
