// DOM Elements
var displayTodayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');

var currentHour = dayjs().hour();

// Function to have code not run until entire page is ready to be fully rendered by browswer
$(function () {

    // Function to display current date and time in the header of the page
    function displayNow() {
        var now = dayjs().format('[Today is] dddd, MMMM DD [at] hh:mm:ss a');
        displayTodayEl.text(now);
    };

    setInterval(displayNow, 1000);

    // Save button click listener to save the user input of planned event into local storage to load later to keep saved on page
    saveBtnEl.on('click', function() {

        var hourBlock = $(this).parent().attr("id").split("-")[1];
        var hourText = $(this).siblings('.description').val();

        localStorage.setItem(hourBlock, hourText);

    });

    // Function to change color of time blocks compared to the current time: gray for past, red for present, and green for past
    function timeColorTense() {

        $('.time-block').each(function () {

            var chosenHour = parseInt($(this).attr('id').split('-')[1]);

            if (chosenHour < currentHour) {
                $(this).addClass('past');
            } else if (chosenHour === currentHour) {
                $(this).addClass('present');
            } else {
                $(this).addClass('future');
            }
        });
    };

    timeColorTense();

    // Function to load user input of saved planned event in localStorage and keep them entered into the time blocks
    function loadInput() {
        $('.time-block').each(function() {
            var selectedHour = $(this).attr('id').split('-')[1];
            var plannedEvent = localStorage.getItem(selectedHour);

            if (plannedEvent) {
                $(this).find('.description').val(plannedEvent);
            }
        });
    };

    loadInput();

});
