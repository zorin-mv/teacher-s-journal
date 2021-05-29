import Human from './human.js'

export default class Student extends Human {

    constructor(info) {
        super(info)
        this.marks = info.marks;
    }

    averageMark() {
        return this.marks.reduce((previousValue, currentValue) => +previousValue + +currentValue) / this.marks.length;
    }

    maxMark() {
        return Math.max(...this.marks);
    }

    minMark() {
        return Math.min(...this.marks);
    }

    getFullName() {
        return `${super.getFullName()} -student`;
    }
}