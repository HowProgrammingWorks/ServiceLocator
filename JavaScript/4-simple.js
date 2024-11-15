'use strict';

const modules = new Map();

const get = (moduleName) => modules.get(moduleName);
const set = (moduleName, exp) => modules.set(moduleName, exp);

module.exports = { get, set };
