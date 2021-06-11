## avia_webservice

you need Node.js preinstalled, if it's not with you yet, follow this guide:
https://nodejs.org/en/download/package-manager/

run:
```
node webservice.js
```
go to localhost:port,  *http://localhost:3000/flights/[flight_id]*

* the location (/flights/) is defined at the top of the file and can be configured. If location in request does not match predefined one, a response with error code 403 is sent and message is thrown.
* the name of the data file (.csv) can be configured as well, it should be present in the current folder. If it's not present, a response with error code 404 is sent and message is thrown.
