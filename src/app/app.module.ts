import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NgxAgoraModule } from 'ngx-agora';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxAgoraModule.forRoot({ AppID: environment.agora.appId })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
