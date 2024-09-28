import { Task } from "./models/task.js";

export class App {
    constructor() {
        this.tasks = [];
        this.views = [];
        this.activeView = null;
    }

    addView(view) {
        this.views.push(view);
    }

    start() {
        console.log('App starting');
    }
}