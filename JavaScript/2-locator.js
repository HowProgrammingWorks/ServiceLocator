'use strict';

class ServiceLocator {
  static #modules = new Map();

  static get(moduleName) {
    return ServiceLocator.#modules.get(moduleName);
  }

  static set(moduleName, exp) {
    ServiceLocator.#modules.set(moduleName, exp);
  }
}

module.exports = { ServiceLocator };
