var Cronofy = require('cronofy');

var cronofyClient = new Cronofy({
  client_id: 'Tz4SbEPp3Ecv5JlFweoDWMJhHbe6CdwA',
  client_secret: 'CRN_1bupoJvZjmbRN2H9FvtwmLHtUoNK7F3AoidSmw',
  access_token: 'FN_W0BpAsC3_GcfrgbKTDSnsFOjcqe1C',
  refresh_token: 'tLkBvKM7gD705s7g_lIaEL6--qz3B_2I',
  data_center: 'us'
});

// var options = {
//   code: 'asdkfj213sdf',
//   redirect_uri: 'https://www.yoursite.com/calendar_redirect_page'
// };

const options = {
    event_id:"E1234567890",
    calendar_id:"cal_YWH25NdRmwCg4hts_FkHf4fzuhYevpcr5S6qDKQ",
    summary:"Testing",
    description:"You can put notes in here",
    start:"2021-10-10T03:30:00Z",
    end:"2021-10-10T04:00:00Z",
    tzid:"Asia/Kolkata",
    location:{
        description:"Board Room"
    }
}

cronofyClient.createEvent(options)
  .then(function(response){
    console.log(response, "response");
  })
  .catch((error) => {
    console.log(error, "error");
    done();
  });
 
const options1 = {
    calendar_id: "cal_YWH25NdRmwCg4hts_FkHf4fzuhYevpcr5S6qDKQ",
    event_id: "E1234567890"
}

cronofyClient.deleteEvent(options1)
  .then(function(response){
    console.log(response, "delete response");
  })
  .catch((error) => {
    console.log(error, "error");
  });

const options2 = {
    from: "2021-10-10T05:30:00Z",
    to: "2021-10-11T06:30:00Z",
    tzid:"Asia/Kolkata"
}

cronofyClient.freeBusy(options2)
  .then(function(response){
    console.log(response, "FreeBusy response");
  })
  .catch((error) => {
    console.log(error, "FreeBusyerror");
  });

cronofyClient.listCalendars()
  .then(function(response){
    console.log(response, "Calendar response");
  })
  .catch((error) => {
    console.log(error, "CalendarErroe");
  });

cronofyClient.profileInformation()
  .then(function(response){
    console.log(response, "Profile response");
  })
  .catch((error) => {
    console.log(error, "Profileerror");
  });  


const options3 = {
    from: "2021-10-10T05:30:00Z",
    to: "2021-10-11T06:30:00Z",
    tzid:"Asia/Kolkata"
}

cronofyClient.readEvents(options3)
  .then(function(response){
    console.log(response, "ReadEvents response");
  })
  .catch((error) => {
    console.log(error, "ReadEventserror");
  });   

