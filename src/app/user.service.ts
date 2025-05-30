import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

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
    log: [
      // {
      //  date: '',
      //  traininggroup: 'PUSH | PULL | LEGS | FULL BODY | UPPER | LOWER | CARDIO',
      //   exercises: {
      //     push: {
      //       benchPress: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       },
      //       inclineBenchPress: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       },
      //       shoulderPress: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       },
      //       tricepExtension: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       },
      //       lateralRaise: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       }
      //     },
      //     pull: {
      //       deadlift: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       },
      //       bentOverRow: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       },
      //       pullUp: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       },
      //       bicepCurl: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       }
      //     },
      //     legs: {
      //       squat: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       },
      //       legPress: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       },
      //       lunges: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       },
      //       calfRaise: {
      //         sets: '',
      //         reps: [],
      //         weight: []
      //       }
      //     },
      //   }
      // }
    ]
  }


}
