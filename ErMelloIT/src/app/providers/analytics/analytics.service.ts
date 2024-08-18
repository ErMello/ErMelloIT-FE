import { Injectable } from '@angular/core';
declare let gtag: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  startTrackerWithId(id: string) {
    gtag('config', id);
  }

  trackView(pageUrl: string, screenName: string) {}

  trackEvent(category: any, action: any, label?: any, value?: any) {}
}
