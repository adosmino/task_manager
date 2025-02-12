import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: `./site/app1.html`,
  styles: [],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AppComponent {
  name: string = 'twoja matka';
  hide1: boolean = false;
  hide2: boolean = true;
  hide3: boolean = true;
  hide4: boolean = true;
  disable1: boolean = true;
  disable2: boolean = false;
  disable3: boolean = false;
  disable4: boolean = false;
  date: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.date = new Date();
    }, 10000);
  }
  


  toggleHide1() {
    this.hide1 =!this.hide1;
    if (this.hide1 == false) {
      this.hide2 = true;
      this.hide3 = true;
      this.hide4 = true;
      this.disable1 = true;
      this.disable2 = false;
      this.disable3 = false;
      this.disable4 = false;
    }
  }
  toggleHide2() {
    this.hide2 =!this.hide2;
    if (this.hide2 == false) {
      this.hide1 = true;
      this.hide3 = true;
      this.hide4 = true;
      this.disable1 = false;
      this.disable2 = true;
      this.disable3 = false;
      this.disable4 = false;
    }
  }
  toggleHide3() {
    this.hide3 =!this.hide3;
    if (this.hide3 == false) {
      this.hide1 = true;
      this.hide2 = true;
      this.hide4 = true;
      this.disable1 = false;
      this.disable2 = false;
      this.disable3 = true;
      this.disable4 = false;
    }
  }
  toggleHide4() {
    this.hide4 =!this.hide4;
    if (this.hide4 == false) {
      this.hide1 = true;
      this.hide2 = true;
      this.hide3 = true;
      this.disable1 = false;
      this.disable2 = false;
      this.disable3 = false;
      this.disable4 = true;
    }
  }


//----------------------------------------------------------------


 // Form inputs for new tasks
 newTaskTitle: string = '';
 newTaskDescription: string = '';
 newTaskDueDate: string = ''; // Will be bound to <input type="date">

 constructor(public taskService: TaskService) {}

 // Add a new task using the service
 addTask() {
   if (this.newTaskTitle && this.newTaskDueDate) {
     this.taskService.addTask(this.newTaskTitle, this.newTaskDescription, this.newTaskDueDate);

     // Clear form fields after adding
     this.newTaskTitle = '';
     this.newTaskDescription = '';
     this.newTaskDueDate = '';
   }
 }

 // Delete a task by index
 deleteTask(index: number) {
   this.taskService.deleteTask(index);
 }

 // Mark a task as completed by index
 markTaskCompleted(index: number) {
   this.taskService.markTaskCompleted(index);
 }

 // Get sorted tasks from the service
 sortedTasks() {
   return this.taskService.getSortedTasks();
 }

 // Get overdue tasks from the service
//  overdueTasks() {
//    return this.taskService.getOverdueTasks();
//  }
overdueTasks() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to start of the day

  return this.taskService.getTasks().filter(task => {
    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0); // Remove time from due date for accurate comparison

    return taskDate.getTime() < today.getTime() && !task.completed; // Only overdue, not today’s
  });
}


 completedTasks() {
   return this.taskService.tasks.filter(task => task.completed);
 }

//  hasOverdueTasks(): boolean {
//   return this.taskService.getTasks().some(task => new Date(task.dueDate) < new Date() && !task.completed);
// }
hasOverdueTasks(): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset to start of the day

  return this.taskService.getTasks().some(task => {
    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0); // Reset time for comparison
    return taskDate.getTime() < today.getTime() && !task.completed; // Only check for overdue tasks
  });
}

hasTodayTasks(): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison

  return this.taskService.getTasks().some(task => {
    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0); // Reset time for comparison
    return taskDate.getTime() === today.getTime() && !task.completed;
  });
}

hasTodaysTasks(): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to only compare dates

  return this.taskService.getTasks().some(task => {
    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0);

    return taskDate.getTime() === today.getTime() && !task.completed; // Only today's tasks that are not completed
  });
}

isTaskDueToday(task: any): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to the beginning of the day

  const taskDate = new Date(task.dueDate);
  taskDate.setHours(0, 0, 0, 0); // Remove time for comparison

  return taskDate.getTime() === today.getTime() && !task.completed;
}



}