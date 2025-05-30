import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss'
})
export class LogComponent {
  constructor(
    public _userService: UserService
  ) { 
    this.user = localStorage.getItem('LLLuser');
    
  }

  user: any;

  workoutStarted: boolean = false;
  trainingGroups = [
    'PUSH',
    'PULL',
    'LEGS',
    'FULL BODY',
    'UPPER',
    'LOWER',
    'CARDIO'
  ];
  exercises = [
    {
      push: [
        {
          name: 'Bench Press'
        },
        {
          name: 'Incline Bench Press'
        },
        {
          name: 'Shoulder Press'
        },
        {
          name: 'Tricep Extension'
        },
        {
          name: 'Lateral Raise'
        }
      ],
      pull: [
        {
          name: 'Deadlift'
        },
        {
          name: 'Bent Over Row'
        },
        {
          name: 'Pull Up'
        },
        {
          name: 'Face Pull'
        },
        {
          name: 'Bicep Curl'
        }
      ],
      legs: [
        {
          name: 'Squat'
        },
        {
          name: 'Leg Press'
        },
        {
          name: 'Lunges'
        },
        {
          name: 'Leg Curl'
        },
        {
          name: 'Leg Extension'
        },
        {
          name: 'Calf Raise'
        }
      ]
    }
  ]
  focusGroup: string = '';

  startWorkout() {
    this.workoutStarted = true;
    console.log(this.focusGroup);
    let logEntry: any = {
      date: new Date().toISOString().split('T')[0],
      traininggroup: this.focusGroup,
      workout: true,
      exercises: {}
    };
    console.log(logEntry);
    (this._userService.user.log as any[]).push(logEntry);
    console.log(this._userService.user);
    localStorage.setItem('LLLuser', JSON.stringify(this._userService.user));
  }

}
