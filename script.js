const slctUni = document.getElementById('select_uni');
const slctYear = document.getElementById('select_year');
const slctGroup = document.getElementById('select_group');
const slctDay = document.getElementById('slct_day');
const slctSub = document.getElementById('slct_sub');
const slctTchr = document.getElementById('slct_tchr');
const slctLoc = document.getElementById('slct_loc');

loadUni();

function updYears() {
    slctYear.innerHTML = "";
    
    updDDList('select_year', universities[slctUni.value]);

    updGroups();
}

function updGroups() {
    slctGroup.innerHTML = "";

    updDDList('select_group', universities[slctUni.value][slctYear.value]);

    loadTable2();
}

function updDDList(update, array) {
    const slctUpdate = document.getElementById(update);

    for (const key in array) {
        let newOpt = document.createElement('option')
        newOpt.value = key;
        newOpt.innerHTML = key;
        slctUpdate.options.add(newOpt);
    }
}

function loadUni() {
    for (const key in universities) {
        let opt = document.createElement('OPTION');
        let txt = document.createTextNode(key);
        opt.appendChild(txt);
        slctUni.insertBefore(opt, slctUni.lastChild);
    }

    updYears();
    updGroups();
}

function loadTable2Select() {
    let daySet = new Set();
    let subSet = new Set();
    let tchrSet = new Set();
    let locSet = new Set();

    const curGroup = slctGroup.value;

    for (item of schedule) {
        if (item.group == curGroup) {
            daySet.add(item.day);
            subSet.add(item.subject);
            tchrSet.add(item.teacher);
            locSet.add(item.location);
        }
    }

    upd2ndDDList("slct_day", daySet);
    upd2ndDDList("slct_sub", subSet);
    upd2ndDDList("slct_tchr", tchrSet);
    upd2ndDDList("slct_loc", locSet);
}

function upd2ndDDList(slctId, slctSet) {
    const slctUpdate = document.getElementById(slctId);
    slctUpdate.innerHTML = "";

    for (const item of slctSet) {
        let newOpt = document.createElement('option')
        newOpt.value = item;
        newOpt.innerHTML = item;
        slctUpdate.options.add(newOpt);
    }

    let newOpt = document.createElement('option')
    newOpt.value = "Bce";
    newOpt.innerHTML = "Bce";
    slctUpdate.options.add(newOpt);
}

function selectDay() {
    const curGroup = slctGroup.value;
    const curDay = slctDay.value;

    if (curDay == "Bce") {
        loadTable2();
    }
    else {
    const tableBody = document.getElementById('table2');
    let dataHtml = '';

    for (item of schedule) {
        if (item.group == curGroup && item.day == curDay) {
            dataHtml += `<tr>
                <td>${item.day}</td>
                <td>${item.subject}</td>
                <td>${item.teacher}</td>
                <td>${item.location}</td>
            </tr>`;
        }
    }

    tableBody.innerHTML = dataHtml;
    }
}

function selectSub() {
    const curGroup = slctGroup.value;
    const curSub = slctSub.value;

    if (curSub == "Bce") {
        loadTable2();
    }
    else {
    const tableBody = document.getElementById('table2');
    let dataHtml = '';

    for (item of schedule) {
        if (item.group == curGroup && item.subject == curSub) {
            dataHtml += `<tr>
                <td>${item.day}</td>
                <td>${item.subject}</td>
                <td>${item.teacher}</td>
                <td>${item.location}</td>
            </tr>`;
        }
    }

    tableBody.innerHTML = dataHtml;
    }
}

function selectTchr() {
    const curGroup = slctGroup.value;
    const curTchr = slctTchr.value;

    if (curTchr == "Bce") {
        loadTable2();
    }
    else {
    const tableBody = document.getElementById('table2');
    let dataHtml = '';

    for (item of schedule) {
        if (item.group == curGroup && item.techer == curTchr) {
            dataHtml += `<tr>
                <td>${item.day}</td>
                <td>${item.subject}</td>
                <td>${item.teacher}</td>
                <td>${item.location}</td>
            </tr>`;
        }
    }

    tableBody.innerHTML = dataHtml;
    }
}

function selectLoc() {
    const curGroup = slctGroup.value;
    const curSub = slctSub.value;

    if (curSub == "Bce") {
        loadTable2();
    }
    else {
    const tableBody = document.getElementById('table2');
    let dataHtml = '';

    for (item of schedule) {
        if (item.group == curGroup && item.sub == curSub) {
            dataHtml += `<tr>
                <td>${item.day}</td>
                <td>${item.subject}</td>
                <td>${item.teacher}</td>
                <td>${item.location}</td>
            </tr>`;
        }
    }

    tableBody.innerHTML = dataHtml;
    }
}

function loadTable2() {
    loadTable2Select();
    const curGroup = slctGroup.value;
    const tableBody = document.getElementById('table2');
    let dataHtml = '';

    for (item of schedule) {
        if (item.group == curGroup) {
            dataHtml += `<tr>
                <td>${item.day}</td>
                <td>${item.subject}</td>
                <td>${item.teacher}</td>
                <td>${item.location}</td>
            </tr>`;
        }
    }

    tableBody.innerHTML = dataHtml;
}