import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Ensure AppRoutingModule is added here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
