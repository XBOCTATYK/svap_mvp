import { Inject, Injectable } from '@nestjs/common';
import { ConfigModuleOptions } from './config.types';
import merge from 'lodash/merge';

export abstract class ConfigServiceAbstract {}

@Injectable()
export class ConfigService extends ConfigServiceAbstract {
  private readonly mergedConfig: { [x: string]: unknown } = {};

  constructor(@Inject('CONFIG_VALUES') private options: ConfigModuleOptions) {
    super();

    this.mergedConfig = options.sources.reduce(
      (acc, item) => merge(acc, item.get(options)),
      {},
    );
  }

  get<T>(name?: string) {
    if (!name) return this.mergedConfig;

    return this.mergedConfig[name] as T;
  }
}
