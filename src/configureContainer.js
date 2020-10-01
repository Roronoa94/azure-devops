import logger from './lib/logger/logger';
import { createContainer, asClass, asValue } from 'awilix';
import { AzureClient } from './lib/azureClient/azureClient';
import { AzureHelper } from './lib/azureClient/azureHelper';
import { Service } from './services/service';
import { Controller } from './controllers/controller';

const dependencyInjector = require('awilix');
const container = createContainer({
  injectionMode: dependencyInjector.InjectionMode.PROXY
});

module.exports = {

  configureContainer() {
    container.register({
      controller: asClass(Controller).scoped(),
      service: asClass(Service).scoped(),
      azureClient: asClass(AzureClient).scoped(),
      azureHelper: asClass(AzureHelper).scoped(),
      logger: asValue(logger)
    });
    return container;
  },

  getContainer() {
    return container;
  }
};
