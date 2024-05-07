import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="startBtn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    const updateCounter = _.debounce(function() {
        let count = $('#count').data('clicks') || 0;
        count++;
        $('#count').text(`${count} clicks on the button`);
        $('#count').data('clicks', count);
    }, 500);

    $('#startBtn').on('click', updateCounter);
});
