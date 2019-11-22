import { WebPlugin } from '@capacitor/core';
import { CapacitorToggleFullscreenPlugin } from './definitions';

export class CapacitorToggleFullscreenWeb extends WebPlugin implements CapacitorToggleFullscreenPlugin {
  constructor() {
    super({
      name: 'CapacitorToggleFullscreen',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CapacitorToggleFullscreen = new CapacitorToggleFullscreenWeb();

export { CapacitorToggleFullscreen };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorToggleFullscreen);
