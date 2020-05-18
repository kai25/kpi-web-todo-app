"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const feathers_mongoose_1 = require("feathers-mongoose");
class Task extends feathers_mongoose_1.Service {
    constructor(options, app) {
        super(options);
    }
}
exports.Task = Task;
