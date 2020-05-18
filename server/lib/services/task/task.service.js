"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_class_1 = require("./task.class");
const task_model_1 = __importDefault(require("../../models/task.model"));
const task_hooks_1 = __importDefault(require("./task.hooks"));
function default_1(app) {
    const options = {
        Model: task_model_1.default(app),
        paginate: app.get('paginate')
    };
    // Initialize our service with any options it requires
    app.use('/task', new task_class_1.Task(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('task');
    service.hooks(task_hooks_1.default);
}
exports.default = default_1;
