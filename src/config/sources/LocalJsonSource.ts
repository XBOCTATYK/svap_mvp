import { ConfigModuleOptions, ConfigSource } from '../config.types';
import merge from 'lodash/merge';
import * as fs from 'fs';
import * as path from 'path';

interface LocalJsonSourceOptions {
  path: string;
  mainConfigName?: string;
}

export class LocalJsonSource implements ConfigSource {
  mainConfig = {};
  path = './config';

  constructor(sourceOptions: LocalJsonSourceOptions) {
    this.path = sourceOptions.path;
    this.mainConfig = this.readConfigFile(sourceOptions.mainConfigName);
  }

  get(options: ConfigModuleOptions): { [p: string]: any } {
    const configByEnv = this.readConfigFile(options.env);

    return merge(this.mainConfig, configByEnv);
  }

  private readConfigFile(name: string) {
    return JSON.parse(
      fs.readFileSync(path.resolve(this.path, `${name}.json`), 'utf-8'),
    );
  }
}
