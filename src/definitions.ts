declare module "@capacitor/core" {
  interface PluginRegistry {
    ToggleFullScreen: ToggleFullScreenPlugin;
  }
}

export interface ToggleFullScreenPlugin {
  toggle(options?: { orientation: string }): Promise<any>;
}
