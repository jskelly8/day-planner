// DOM Elements
var displayTodayEl = $('#currentDay');
var save = $('<button>');
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');

var currentHour = dayjs().hour();

// var plannerHours = [
//     hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17
// ];

// Function to have code not run until entire page is ready to be fully rendered by browswer
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 
    // HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //











    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
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

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. 
    // HINT: How can the id
    // attribute of each time-block be used to do this?
    //


    // Function to display current date and time in the header of the page, called below
    function displayNow() {
        var now = dayjs().format('[Today is] dddd, MMMM DD [at] hh:mm:ss a');
        displayTodayEl.text(now);
    };

    displayNow();

});


