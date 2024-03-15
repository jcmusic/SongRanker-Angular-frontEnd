import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
/* import { 
    PreloadAllModules, 
    provideRouter, 
    withDebugTracing, 
    withPreloading, 
    withRouterConfig 
} 
from '@angular/router'; */


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(withFetch())
]
};

/* , importProvidersFrom(AuthModule.forRoot({
  // ... config
})) */