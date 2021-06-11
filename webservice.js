const http = require('http')
const fs = require('fs')
const readline = require('readline')
const path = require('path')

const ROOTNAME = "/flights/"
const FILENAME = "data.csv"
const PORT = process.env.PORT || 3000

function createResponse(flightArr) {
	let infoObj = {}
	infoObj["Number"] = flightArr[7]
	infoObj["DepartureTime"] = flightArr[4]
	infoObj["ArrivalTime"] = flightArr[6]
	return infoObj
}

function getId(url) {
	if (url.slice(0, ROOTNAME.length) != ROOTNAME)
		return
	let flightId = url.slice(ROOTNAME.length)
	return flightId
}

function handleError(res, code){
	console.error("Error with root or filename")
	res.writeHead(code, {'Content-Type': 'text/plain'})
	res.end("Error with root or filename")
}

const server = http.createServer( (req, res) => {
	let flightId = getId(req.url)
	if (!flightId)
		return handleError(res, 403)

	let lr = readline.createInterface({
		input: rs = fs.createReadStream(path.join(__dirname, FILENAME))
	});
	rs.on('error', () => {
		return handleError(res, 404)
	})

	let response = {}
	lr.on('line', (line) => {
		const curId = line.slice(0, line.indexOf(','))
		if (curId == flightId)
		{
			response = createResponse(line.split(','))
			lr.close()
			lr.removeAllListeners()
		}
	}).on('close', () => {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(response))
	})
})

server.listen(PORT, () => {
	console.log(`server has been started on ${PORT}`)
})
