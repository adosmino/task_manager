import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskService } from './task.service'; // Import your TaskService

@NgModule({
  imports: [BrowserModule],
  providers: [TaskService]  // Provide TaskService here
})
export class AppModule {}
