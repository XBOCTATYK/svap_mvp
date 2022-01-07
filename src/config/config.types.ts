export interface ConfigModuleOptions {
  env?: string;
  sources?: ConfigSource[];
}

export interface ConfigSource {
  get(options: ConfigModuleOptions): { [x: string]: any };
}
