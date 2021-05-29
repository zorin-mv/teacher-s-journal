import { Validator } from "./library/validator.js";
import { formGroupConfig } from "./configs/form-config.js";
import Student from './classes/student.js';
import Teacher from './classes/teacher.js';
import findMaxMark from './helpers/find-max-mark-fn.js';
import showErrors from './helpers/show-errors-fn.js'
import createListofStudents from './helpers/create-list-of-students-fn.js'
import toArrayFn from './helpers/to-array-fn.js'


let teacher = new Teacher({
    name: "Vadim",
    surname: "Kuznietsov",
    age: 25,
    group: [],
});

let btnAdd = document.querySelector('.btn-add');
let btnUpd = document.querySelector('.btn-upd');
export let form = document.querySelector('#students-form');

btnAdd.onclick = function () {
    const VALID = Validator.validate(formGroupConfig, form);
    
    Object.keys(formGroupConfig).forEach((name) => {
        showErrors(VALID, form.elements[name], name);
    });

    if(VALID) {
        teacher.group.push(
            new Student({
                name: form.elements["first-name"].value,
                surname: form.elements["last-name"].value,
                age: form.elements.age.value,
                marks: toArrayFn(form.elements.marks.value),
            })
        );
    }

};

form.addEventListener('input', function(e) {
    let target = e.target;
    
    if(!Object.keys(formGroupConfig).includes(target.name)) return;
    const VALID = Validator.validate({ [target.name] : formGroupConfig[target.name]}, form);

    showErrors(VALID,target, target.name)

});

btnUpd.addEventListener('click',  function (e) {

    createListofStudents(teacher);

});