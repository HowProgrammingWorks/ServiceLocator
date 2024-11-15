'use strict';

const modules = new Map();

module.exports = {
  get: modules.get.bind(modules),
  set: modules.set.bind(modules),
};
