import { AnalyticsPluginConfig } from './analytics-plugin.config';
import { AnalyticsEvent } from './models/event-type';

export interface IAnlayticsPlugin {
  init: (config: AnalyticsPluginConfig) => void;
  trackPageView: (pagePath: string, pageName: string) => void;
  trackEvent: (event: AnalyticsEvent) => void;
  setUserProfile: (profile: Object) => void;
}

export class AnlayticsPlugin implements IAnlayticsPlugin {
  init = (config: AnalyticsPluginConfig) => {};
  trackPageView = (pagePath: string, pageName: string) => {};
  trackEvent = (event: AnalyticsEvent) => {};
  setUserProfile = (profile: Object) => {};
}
