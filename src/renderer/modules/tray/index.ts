/* eslint-disable @typescript-eslint/no-explicit-any, jest/require-hook, no-useless-constructor, no-empty-function */
import { logger } from '@cdm-logger/client';
import { ClientTypes } from '@common-stack/client-react';
import modules, { MainRoute } from './module';

class UtilityClass {
  constructor(private _instance) {}

  public getCacheKey(storeObj) {
    return this._instance.getDataIdFromObject(storeObj);
  }
}

const utility = new UtilityClass(modules);

// additional bindings to container
const container = modules.createContainers({}) as any;
container.bind(ClientTypes.Logger).toConstantValue(logger);
container.bind(ClientTypes.UtilityClass).toConstantValue(utility);

export default modules;
export { MainRoute, container, logger };
