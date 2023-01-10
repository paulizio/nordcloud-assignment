const { optimalStationForDevice } = require('./utils/utils')
const findNetworkStations = (networkStations, devices) => {
    if (!networkStations || !devices) throw new Error('Error: No networkstations or devices given')
    let message = []
    devices.forEach(device => {
        const { station, speed } = optimalStationForDevice(device, networkStations)
        speed === 0 ?
            message = [...message, `No network station within reach for point ${station.x},${station.y}\n`] :
            message = [...message, `Best network station for point ${device.x},${device.y} is ${station.x},${station.y} with speed ${speed}\n`]
    })
    return message.join('')
}
module.exports = { findNetworkStations }