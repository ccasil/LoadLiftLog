import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    const storedUser = localStorage.getItem('LLLuser');
    this.user = storedUser ? JSON.parse(storedUser) : null;
  }

  user = {
    firstName: '',
    lastName: '',
    email: '',
    currentWeight: '',
    goalWeight: '',
    squatGoal: '',
    benchGoal: '',
    deadliftGoal: '',
    savedate: '',
    unit: '',
    log: []
  }


}
