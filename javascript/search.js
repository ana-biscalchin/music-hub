const Cronofy = require('cronofy');

const client = new Cronofy({
  access_token: 'AhMoYR5oMOuLNhRrnau8GzKE_6TguMau',
});

const options = {
  tzid: 'Etc/UTC'
};

function listEvents() {
  client.listCalendars(options)
    .then(function (response) {
      let calendars = response.calendars;
      // console.log(calendars)
    });

  client.readEvents(options)
    .then(function (response) {
      let events = response.events;
      console.log(events)
      let date = events[1].start;
      let formatDate = date = date.replace(/[a-zA-Z]+/gi, ' ')
      console.log('Evento 1 : ' + events[1].summary, '| Data: ' +  formatDate) // Evento 1 : Casamento - Eduardo e Mônica | Data: 2019-05-25 22:30:00
    });


}
listEvents();





