export class Task {
    constructor(name, parent=null) {
        this.name = name; 
        this.parent = parent;
        this.children = [];
        this.status = 'None';
    }

    isParent() {
        return this.parent !== null;
    }

    addChild(task) {
        this.children.push(parent)
    }
}

