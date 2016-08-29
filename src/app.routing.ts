import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home';
import { ArrivalComponent } from './app/arrival';
import { EncountersComponent} from './app/encounters';
import { ReportComponent } from './app/report';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'arrival',
    component: ArrivalComponent
  },
  {
    path: 'encounters',
    component: EncountersComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
];
export const appRoutingProviders: any[] = [
];
export const routing = RouterModule.forRoot(appRoutes);
