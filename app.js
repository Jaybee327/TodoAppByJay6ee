//open and close add task

const addButton = document.querySelector('.footer-section');
const addListDisplay = document.getElementById('addTaskPage');

addButton.addEventListener('click', openAddbar);

function openAddbar() {
    addListDisplay.classList.toggle('showaddbar');
}

// add schedule

const InputSchedule = document.getElementById('inputTextiD');
const addFinalbtn = document.querySelector('.addedfinalbtn');
const scheduleList = document.getElementById('Scheduled-Ulist-id');

addFinalbtn.addEventListener('click', function() {
    openAddbar();
    addSchedule();
});

function addSchedule() {

    const scheduleText = InputSchedule.value.trim();
    if (scheduleText) {
        const scheduleItem = document.createElement('li');
        scheduleItem.textContent = scheduleText;
        scheduleList.appendChild(scheduleItem);
        InputSchedule.value = '';
        //show scheduled lists total Number inside add schedule
        counted = scheduleList.children.length;
        console.log(scheduleList);
        document.getElementById('ScheduledListCountidValue').innerHTML = counted;
    }
};
const scheduleItem = addSchedule();

// open n close sheduled lists

const ScheduledBox = document.querySelector('.Scheduled-Container');
const scheduleListDisplay = document.querySelector('.ScheduledLists');

const AppContainer = document.getElementById('App-Containerid');

ScheduledBox.addEventListener('click', openScheduledBox);
function openScheduledBox() {
    scheduleListDisplay.classList.toggle('showScheduleLists');
};

AppContainer.addEventListener('click', (e) => {
    if (!ScheduledBox.contains(e.target)) {
        scheduleListDisplay.classList.remove('showScheduleLists');
    }
});

// adding date

