  let Cronofy = require('cronofy');

  // api.cronofy.com/v1/batch/v1/calendars?tzid=Etc%2FUTC

  let client = new Cronofy({
    access_token: 'AhMoYR5oMOuLNhRrnau8GzKE_6TguMau',
  });
  
  let options = {
    tzid: 'Etc/UTC'
  };
  
  client.listCalendars(options)
    .then(function (response) {
        let calendars = response.calendars;
        // console.log(calendars)
    });
  
  client.readEvents(options)
    .then(function (response) {
        let events = response.events;
        console.log(events)
    });