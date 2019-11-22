declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorToggleFullscreen: CapacitorToggleFullscreenPlugin;
  }
}

export interface CapacitorToggleFullscreenPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
