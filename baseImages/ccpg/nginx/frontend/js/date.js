// 套用日期
const isLeapYear = year => (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
const countDatesOfFeb = year => isLeapYear(year) ? 29 : 28;
const createOption = (id, startNum, endNum, current) => {
    const selectDom = document.getElementById(id);
    let optionDom = '';
    for (let i = startNum; i <= endNum; i++) {
        if (i == current) {
            option = '<option value="' + i + '" selected>' + i + '</option>';
        } else {
            option = '<option value="' + i + '">' + i + '</option>';
        }
        optionDom += option;
    }
    selectDom.insertAdjacentHTML('beforeend', optionDom);
}

const yearBox = document.getElementById('year');
const monthBox = document.getElementById('month');
const dateBox = document.getElementById('day');

const today = new Date();
const thisYear = today.getFullYear();
const thisMonth = today.getMonth() + 1;

const initYear = '1980';

let datesOfYear = [31, countDatesOfFeb(initYear), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

monthBox.addEventListener('change', (e) => {
    dateBox.innerHTML = '';
    const selectedMonth = e.target.value;
    createOption('day', 1, datesOfYear[selectedMonth - 1], 1);
});

yearBox.addEventListener('change', e => {
    monthBox.innerHTML = '';
    dateBox.innerHTML = '';
    const updatedYear = e.target.value;
    datesOfYear = [31, countDatesOfFeb(updatedYear), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    createOption('month', 1, 12, 1);
    createOption('day', 1, datesOfYear[0], 1);
});

createOption('year', 1920, thisYear, initYear);
createOption('month', 1, 12, '1');
createOption('day', 1, datesOfYear[thisMonth - 1], '1');