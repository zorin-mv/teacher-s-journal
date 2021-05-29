export default class Human {

    constructor(info){
        this.name = info.name;
        this.surname = info.surname;
        this.age = info.age;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    setFullName(fullName) {
        let newFullName = fullName.split(' ');
        this.name = newFullName[0];
        this.surname = newFullName[1];
        return this;
    }

}