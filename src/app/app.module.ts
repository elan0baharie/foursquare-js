import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { fourSquareApiConfig } from './foursquare';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  {FoursquareService} from "./foursquare.service";


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

export const fourSquareConfig = {
  client_id: fourSquareApiConfig.client_id,
  client_secret: fourSquareApiConfig.client_secret,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FoursquareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
