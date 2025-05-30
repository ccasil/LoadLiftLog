import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LogComponent } from './log/log.component';

export const routes: Routes = [
    { path: 'start', component: StartComponent },
    { path: 'log', component: LogComponent },
    // Other
    { path: '', pathMatch: 'full', redirectTo: 'start' },
    { path: '**', component: StartComponent }
];
