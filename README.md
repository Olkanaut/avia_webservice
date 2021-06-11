## avia_webservice

Web service to retrieve flight info (flight number, departure time, arrival time) in .json format from .csv file.

HOW TO RUN:
```
docker build . -t ws
docker run -p 3000:3000 -d ws
```
* if you want to try without container, use Node.js (https://nodejs.org/en/download/package-manager/), stay at git root folder and just do:
```node webservice```


HOW TO CHECK (curl / browser):
```
curl -i localhost:3000/flights/[flightId]
localhost:3000/flights/[flight_id]
```

ABOUT
* the location (/flights/) is defined at the top of the file and can be configured. If location in request does not match predefined one, a response with error code 403 is sent and message is thrown.
* the name of the data file (.csv) can be configured as well, it should be present in the current folder. If it's not present, a response with error code 404 is sent and message is thrown.
* to change data.csv in container, docker exec -t containerId /bin/bash
