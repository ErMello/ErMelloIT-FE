import { Component } from '@angular/core';
import {AnalyticsService} from "./providers/analytics/analytics.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private analyticsService: AnalyticsService) {
    this.initializeGoogleAnalytics();
  }

  initializeGoogleAnalytics() {
    this.analyticsService.startTrackerWithId('G-5K438P7YY4');
  }
}
