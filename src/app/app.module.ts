import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MaterialModule} from './material.module';
import { HomeComponent } from './views/home/home.component';
import { mainModal } from './views/main/main.modal';
import { MainComponent } from './views/main/main.component';
import { GamesModal } from './views/main/games.modal';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    mainModal,
    GamesModal,
    MainComponent
  ],
  entryComponents:[mainModal,GamesModal],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
