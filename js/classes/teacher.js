import Human from './human.js';

export default class Teacher extends Human {

    constructor(info) {
        super(info)
        this.group = info.group;
    }

    getListByAverageMark () {
        return this.group.sort((a,b) => b.averageMark() - a.averageMark()).map((e) => `${e.name} - ${e.surname} - ${e.averageMark()}`);
    }

    getStudentByName(studentName) {
        return this.group.find((e) => e.name === studentName);
    }

    removeStudentByName(studentName) {
        this.group.splice(this.group.findIndex(currentValue => currentValue.name == studentName), 1);
    }

    updateStudentByName(newStudent, studentName) {
        return this.group[this.group.findIndex(currentValue => currentValue.name == studentName)] = newStudent;
    }
}
