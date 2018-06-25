import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ===================================
// Components
// ===================================
import { LoginComponent } from './pages/pages.index';
import { RegisterComponent } from './pages/pages.index';

import { AppComponent } from './app.component';

// ===================================
// Services
// ===================================
import { ServiceModule } from './services/service.module';
import { DataCompanyService, AuthService, SidebarService } from './services/service.index';

// ===================================
// Rutes
// ===================================

import { APP_ROUTING } from './app.routes';

// ===================================
// Modules
// ===================================

import { PagesModule } from './pages/pages.module';

// ===================================
// FireStore
// ===================================
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    APP_ROUTING,

    PagesModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Inicializa firebase
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [DataCompanyService, AuthService, SidebarService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
