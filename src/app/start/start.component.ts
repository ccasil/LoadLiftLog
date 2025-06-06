import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
declare global {
  interface Window {
    bootstrap: any;
  }
}
@Component({
  selector: 'app-start',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  @ViewChild('modalRef') modalRef!: ElementRef;
  constructor(
    public _userService: UserService,
    private _router: Router,
  ) { 
    
  }

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  currentWeight: string = '';
  goalWeight: string = '';
  squatGoal: string = '';
  benchGoal: string = '';
  deadliftGoal: string = '';
  selectedunit: string = '';
  units: string[] = ['kg', 'lbs'];
  saveDate: string = new Date().getFullYear().toString() +
  String(new Date().getMonth() + 1).padStart(2, '0') +
  String(new Date().getDate()).padStart(2, '0');;

  newUser(){
    if(!this.firstName || !this.lastName || !this.email) {
      alert('Please fill in all required fields.');
      return;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        alert('Please enter a valid email address.');
        return;
      } else if (this.currentWeight && isNaN(Number(this.currentWeight))) {
        alert('Current weight must be a number.');
        return;
      }
      else if (this.goalWeight && isNaN(Number(this.goalWeight))) {
        alert('Goal weight must be a number.');
        return;
      }
      else if (this.squatGoal && isNaN(Number(this.squatGoal))) {
        alert('Squat goal must be a number.');
        return;
      }
      else if (this.benchGoal && isNaN(Number(this.benchGoal))) {
        alert('Bench goal must be a number.');
        return;
      }
      else if (this.deadliftGoal && isNaN(Number(this.deadliftGoal))) {
        alert('Deadlift goal must be a number.');
        return;
      } else {
        this.saveUser();
      }
    }
  }
  saveUser() {
    this._userService.user = {
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
    this._userService.user.firstName = this.firstName;
    this._userService.user.lastName = this.lastName;
    this._userService.user.email = this.email;
    this._userService.user.currentWeight = this.currentWeight;
    this._userService.user.goalWeight = this.goalWeight;
    this._userService.user.squatGoal = this.squatGoal;
    this._userService.user.benchGoal = this.benchGoal;
    this._userService.user.deadliftGoal = this.deadliftGoal;
    this._userService.user.savedate = this.saveDate;
    this._userService.user.unit = this.selectedunit;
    this._userService.user.log = [];
    localStorage.setItem('LLLuser', JSON.stringify(this._userService.user));
    const modalElement = this.modalRef.nativeElement;
    if (window.bootstrap && window.bootstrap.Modal) {
      const modalInstance = window.bootstrap.Modal.getOrCreateInstance(modalElement);
      modalInstance.hide();
    }
    setTimeout(() => {
      this._router.navigate(['/log']);
    }, 0);
  }
}
