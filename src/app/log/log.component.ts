import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss'
})
export class LogComponent {
  constructor(
    public _userService: UserService,
    public _router: Router,
  ) { 
    const storedUser = localStorage.getItem('LLLuser');
    this.user = storedUser ? JSON.parse(storedUser) : null;
    this.loadLogs();
  }

  today = new Date().toISOString().split('T')[0];
  todaysLog: any;;
  user: any;
  newExercise: any = {
    name: '',
    type: '',
    sets: '',
    reps: [],
    weight: [],
    notes: '',
    duration: '',
    distance: '',
    rpe: '',
  }

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
  selectedGroups: string[] = [];
  exerciseTypes = [
    'strength',
    'hypertrophy',
    'cardio',
  ]
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

  loadLogs() {
    if(!this._userService.user || !this._userService.user.log) {
        this._router.navigate(['start']);
    }
    this.todaysLog = this._userService.user.log.find((entry: any) => entry.date === this.today);
  }

  startWorkout() {
    this.workoutStarted = true;
    this.focusGroup = this.selectedGroups.join(', ')
    console.log(this.focusGroup);
    let logEntry: any = {
      date: this.today,
      traininggroup: this.focusGroup,
      workout: true,
      exercises: []
    };
    console.log(logEntry);
    (this._userService.user.log as any[]).push(logEntry);
    console.log(this._userService.user);
    localStorage.setItem('LLLuser', JSON.stringify(this._userService.user));
    this.loadLogs();
  }
  onGroupToggle(group: string, checked: any): void {
    if (checked.checked) {
      this.selectedGroups.push(group);
    } else {
      this.selectedGroups = this.selectedGroups.filter(g => g !== group);
    }
    console.log(this.selectedGroups);
  }
  addExercise() {
    if (!this.todaysLog) {
      this.todaysLog = {
        date: this.today,
        traininggroup: this.focusGroup,
        workout: true,
        exercises: []
      };
      (this._userService.user.log as any[]).push(this.todaysLog);
    }
    
    const exerciseName = this.newExercise.name.trim();
    if (!exerciseName) {
      alert('Please enter an exercise name.');
      return;
    }

    this.todaysLog.exercises.push({
      name: exerciseName,
      type: this.newExercise.type,
      sets: this.newExercise.sets,
      reps: this.newExercise.reps,
      weight: this.newExercise.weight,
      notes: this.newExercise.notes,
      duration: this.newExercise.duration,
      distance: this.newExercise.distance,
      rpe: this.newExercise.rpe
    });

    localStorage.setItem('LLLuser', JSON.stringify(this._userService.user));
    this.newExercise = {
      name: '',
      type: '',
      sets: '',
      reps: [],
      weight: [],
      notes: '',
      duration: '',
      distance: '',
      rpe: '',
    };
  }
}
