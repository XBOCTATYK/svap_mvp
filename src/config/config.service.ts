import { Inject, Injectable } from '@nestjs/common';
import { ConfigModuleOptions } from './config.types';
import merge from 'lodash/merge';

@Injectable()
export class ConfigService {
  private readonly mergedConfig: { [x: string]: any } = {};

  constructor(@Inject('CONFIG_VALUES') private options: ConfigModuleOptions) {
    this.mergedConfig = options.sources.reduce(
      (acc, item) => merge(acc, item.get(options)),
      {},
    );
  }

  get() {
    return this.mergedConfig;
  }
}
