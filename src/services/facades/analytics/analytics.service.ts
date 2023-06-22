import { AnalyticsPluginConfig } from './analytics-plugin.config';
import { AnalyticsEvent } from './models/event-type';

export interface IAnalyticsService {
  registerPlugin: (pluginName: string, config: AnalyticsPluginConfig) => void;
  trackPageView: (pagePath: string, pageName: string) => void;
  trackEvent: (event: AnalyticsEvent) => void;
  setUserProfile: (profile: Object) => void;
}

export class AnalyticsService implements IAnalyticsService {
  instance: { [key: string]: AnalyticsPluginConfig } = {};
  registerPlugin = (pluginName: string, config: AnalyticsPluginConfig) => {
    let pluginInstance;
    switch (pluginName) {
      case 'ga':
        // init ga instance
        break;
      case 'clarity':
        // init clarity instance
        break;
      default:
        break;
    }
    this.instance[pluginName] = config;
  };
  trackPageView = (pagePath: string, pageName: string) => {
    // Call respective events based on the configured instance
  };
  trackEvent = (event: AnalyticsEvent) => {
    // Call respective events based on the configured instance
  };
  setUserProfile = (profile: Object) => {
    // Call respective events based on the configured instance
  };
}
