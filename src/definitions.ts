declare module "@capacitor/core" {
  interface PluginRegistry {
    ToggleFullScreen: ToggleFullScreenPlugin;
  }
}

export interface ToggleFullScreenPlugin {
  toggle(options: { value: string }): Promise<{value: string}>;
}
