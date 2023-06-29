  document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months are zero-based
    var month_short = '';
    var month_long = '';

    if (month == 1) {
      month_short = 'jan';
      month_long = 'january'
    } else if (month == 2) {
      month_short = 'feb';
      month_long = 'february'
    } else if (month == 3) {
      month_short = 'mar';
      month_long = 'march'
    } else if (month == 4) {
      month_short = 'apr';
      month_long = 'april'
    } else if (month == 5) {
      month_short = 'may';
      month_long = 'may'
    } else if (month == 6) {
      month_short = 'jun';
      month_long = 'june'
    } else if (month == 7) {
      month_short = 'jul';
      month_long = 'july'
    } else if (month == 8) {
      month_short = 'aug';
      month_long = 'august'
    } else if (month == 9) {
      month_short = 'sep';
      month_long = 'september'
    } else if (month == 10) {
      month_short = 'oct';
      month_long = 'october'
    } else if (month == 11) {
      month_short = 'nov';
      month_long = 'november'
    } else if (month == 12) {
      month_short = 'dec';
      month_long = 'december'
    }

    var fileName = month_short + '-' + day + '.html';

    window.addEventListener('DOMContentLoaded', function() {
      // Redirect to a different page after 5 seconds (5000 milliseconds)
      setTimeout(function() {
        window.location.href = '/html/' + month_long + '/' + fileName;
      }); // Change the duration (in milliseconds) as per your requirement
    });
  });