import { WebPlugin } from '@capacitor/core';
import { ToggleFullScreenPlugin } from './definitions';

export class ToggleFullScreenWeb extends WebPlugin implements ToggleFullScreenPlugin {
  constructor() {
    super({
      name: 'ToggleFullScreen',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const ToggleFullScreen = new ToggleFullScreenWeb();

export { ToggleFullScreen };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ToggleFullScreen);
