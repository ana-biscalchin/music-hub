

const Cronofy = require('cronofy');

const client = new Cronofy({
  access_token: 'AhMoYR5oMOuLNhRrnau8GzKE_6TguMau',
});

const options = {
  tzid: 'Etc/UTC'
};

function listEvents(user) {
  client.listCalendars(options)
    .then(function (response) {
      let calendars = response.calendars;
      // console.log(calendars)
    });

  client.readEvents(options)
    .then(function (response) {
      let events = response.events;
      // console.log(events)
      let date = events[1].start;
      let formatDate = date = date.replace(/[a-zA-Z]+/gi, ' ')
      console.log('Evento 1 : ' + events[1].summary, '| Data: ' +  formatDate) // Evento 1 : Casamento - Eduardo e Mônica | Data: 2019-05-25 22:30:00
    });


}
listEvents();
//ouvidor de evento já joga id como parâmetro de user

function ui() {
  const Element = CronofyElements.AvailabilityViewer({
    token: "AhMoYR5oMOuLNhRrnau8GzKE_6TguMau",
    target: 'cronofy-availability-viewer',
    query: {
        // QUERY_OPTIONS
    },
    extras: {
        start_time:"09:00",
        end_time: "15:30",
        interval: 15
    },
    callback: slot => console.log('callback',slot)
});

Element.upload({
  extras: {
      // New options:
      start_time:"08:30",
      end_time: "17:30",
      interval: 15
  }
});

  CronofyElements.Agenda({token: "AhMoYR5oMOuLNhRrnau8GzKE_6TguMau",target: "cronofy-agenda"});
  // Load element:
const YourElement = CronofyElements.AvailabilityViewer(optionsObject);

// Update the Element with new options:
YourElement.update(newOptions);
}

// ui()

// tentar gerar token
// https://docs.cronofy.com/developers/ui-elements/authentication/








