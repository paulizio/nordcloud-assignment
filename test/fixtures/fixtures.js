const expectedMessage = [
    'Best network station for point 0,0 is 0,0 with speed 81\n',
    'Best network station for point 100,100 is 99,25 with speed 0.3431457505076197\n',
    'Best network station for point 15,10 is 10,0 with speed 24.29437251522859\n',
    'Best network station for point 18,18 is 20,20 with speed 10.058874503045718\n',
    'Best network station for point 13,13 is 10,0 with speed 60.176623509137166\n',
    'No network station within reach for point 99,25\n'
]
const networkStations = [
    { x: 0, y: 0, reach: 9 },
    { x: 20, y: 20, reach: 6 },
    { x: 10, y: 0, reach: 12 },
    { x: 5, y: 5, reach: 13 },
    { x: 99, y: 25, reach: 2 },
]
const devices = [
    { x: 0, y: 0 },
    { x: 100, y: 100 },
    { x: 15, y: 10 },
    { x: 18, y: 18 },
    { x: 13, y: 13 },
    { x: 25, y: 99 },
]
module.exports = { expectedMessage, networkStations, devices }