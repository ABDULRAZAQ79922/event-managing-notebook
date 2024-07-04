document.addEventListener('DOMContentLoaded', () => {
    const eventInput = document.getElementById('eventInput');
    const addEventButton = document.getElementById('addEventButton');
    const eventList = document.getElementById('eventList');

    addEventButton.addEventListener('click', addEvent);

    function addEvent() {
        const eventText = eventInput.value.trim();

        if (eventText === '') {
            alert('Please enter an event.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = eventText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            eventList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        eventList.appendChild(listItem);

        eventInput.value = '';
    }
});
