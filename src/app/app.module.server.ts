import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule, // This should be correct and should not show errors
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
