declare module "@capacitor/core" {
  interface PluginRegistry {
    ToggleFullScreen: ToggleFullScreenPlugin;
  }
}

export interface ToggleFullScreenPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
