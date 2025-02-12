import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'tasks'; 
  tasks: { id: number; title: string; description: string; dueDate: Date; completed: boolean, overdue: boolean}[] = [];

  constructor() {
    this.loadTasks(); 
  }

  // Add a new task
  addTask(title: string, description: string, dueDate: string) {
    const today = new Date();
    today.setHours(0,0,0,0);

    this.tasks.push({
      id: Date.now(),
      title,
      description,
      dueDate: new Date(dueDate), // Convert string to Date
      completed: false,
      overdue: new Date(dueDate) < today,
    });
    this.saveTasks();
  }

  // Get all tasks
  getTasks() {
    return this.tasks;
  }

  // Sort tasks by due date (earliest first)
//   getSortedTasks() {
//     return this.tasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
//   }
// getSortedTasks() {
//     const today = new Date();
  
//     // Filter tasks into overdue and not overdue
//     const overdueTasks = this.tasks.filter(task => new Date(task.dueDate) < today && !task.completed);
//     const notOverdueTasks = this.tasks.filter(task => new Date(task.dueDate) >= today && !task.completed);
  
//     // Sort not overdue tasks by dueDate
//     const sortedNotOverdueTasks = notOverdueTasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  
//     // Combine both arrays, you can adjust the order depending on whether you want overdue tasks first or later
//     return sortedNotOverdueTasks; // Overdue tasks come after non-overdue
//   }

  getSortedTasks() {
    return this.tasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  }
  // getSortedTasks() {
  //   return this.tasks
  //     .filter(task => new Date(task.dueDate) >= new Date()) // Only exclude overdue tasks
  //     .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  // }
  
  

  // Mark a task as completed
  // markTaskCompleted(index: number) {
  //   this.tasks[index].completed = true;
  //   this.saveTasks();
  // }
  markTaskCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed; // Toggle the value
    this.saveTasks();
  }
  
  

  // Get overdue tasks
  getOverdueTasks() {
    // return this.tasks.filter(task => new Date(task.dueDate) < new Date());
    return this.tasks.filter(task => new Date(task.dueDate) < new Date());
  }

  // Delete a task by index
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }
  

  // Save tasks to localStorage
  private saveTasks() {
    const tasksForStorage = this.tasks.map(task => ({
      ...task,
      dueDate: task.dueDate.toISOString(), // Convert Date back to string for storage
    }));
    localStorage.setItem(this.storageKey, JSON.stringify(tasksForStorage));
  }

  // Load tasks from localStorage
  private loadTasks() {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.tasks = JSON.parse(data).map((task: any) => ({
        ...task,
        dueDate: new Date(task.dueDate), // Convert string back to Date
      }));
    }
  }

  hasOverdueTasks(): boolean {
    return this.tasks.some(task => new Date(task.dueDate) < new Date() && !task.completed);
  }
  
}
