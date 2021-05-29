export default function createListofStudents(teacher) {

    const list = document.querySelector('.list-wrapper');
    let listItems = '<ol class="list-students">';

    [...teacher.getListByAverageMark()].forEach(e => listItems += `<li> ${e} </li>`)

    listItems += '</ol>'

    list.innerHTML = listItems;

}