angular.module('Whatsapp').filter('calendar', calendar);

function calendar() {
  return function(time) {
    if (!time) return;

    return moment(time).calendar(null, {
      lastDay: '[Ontem]',
      sameDay: 'LT',
      lastWeek: 'dddd',
      sameElse: 'DD/MM/YY'
    });
  }
}
