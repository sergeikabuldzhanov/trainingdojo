import http from 'http';

const server = http.createServer(doOnIncoming)
server.listen(80)

function doOnIncoming(incomingData, responseBuildingFunctions){
  responseBuildingFunctions.end()
}