import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { withFetch } from '@angular/common/http'; // Import withFetch
import { MaterialsModule } from './materials/materials.module';

import { CorousalComponent } from './corousal/corousal/corousal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainersModule } from './features/containers.module';
import { CommonModule } from '@angular/common';
import { MemoirNoteModule } from './memoir-note/memoir-note.module';
import { HomepageContentModule } from './features/homepage-content/homepage-content.module';

@NgModule({
  declarations: [
    AppComponent,
    CorousalComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainersModule,
    HttpClientModule,
    MaterialsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule ,
    CommonModule,
    MemoirNoteModule,
    HomepageContentModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()), // Enable fetch for HttpClient
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // This should be here, not in imports
})
export class AppModule { }
