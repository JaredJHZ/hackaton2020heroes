import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BackComponent } from './components/back/back.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SupercardsComponent } from './components/supercards/supercards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import {Amplify } from 'aws-amplify';
import {ReactiveFormsModule} from '@angular/forms';
import { AddComponent } from './pages/add/add.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule} from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';
import { DescribeComponent } from './page/describe/describe.component';
import { ArquitecturaComponent } from './pages/arquitectura/arquitectura.component';
Amplify.configure({
  Auth: {

      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: 'us-east-1:09965903-8a69-4259-ae5d-66de3d4cd297',

      // REQUIRED - Amazon Cognito Region
      region: 'us-east-1',

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
      // Required only if it's different from Amazon Cognito Region
      identityPoolRegion: 'us-east-1',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'us-east-1_HSb0TSjU8',

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: 'h6kcn2l74h15ok34gdanclauu',


  }
});


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackComponent,
    ToolbarComponent,
    SupercardsComponent,
    LoginComponent,
    AddComponent,
    LoadingComponent,
    EditComponent,
    DescribeComponent,
    ArquitecturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
