import { WebPlugin } from '@capacitor/core';
import { ToggleFullScreenPlugin } from './definitions';

export class ToggleFullScreenWeb extends WebPlugin implements ToggleFullScreenPlugin {
  constructor() {
    super({
      name: 'ToggleFullScreen',
      platforms: ['web']
    });
  }

  async toggle(options?: { orientation: string }): Promise<any> {
    console.log('TOGGLE', options);
  }
}

const ToggleFullScreen = new ToggleFullScreenWeb();

export { ToggleFullScreen };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ToggleFullScreen);
