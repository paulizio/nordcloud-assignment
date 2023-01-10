const maxSpeedFromArray = (data) => {
    if (!data || data.length === 0) throw new Error('Error: no params or invalid params given')
    return data.reduce(function (prev, current) {
        return (prev.speed > current.speed) ? prev : current
    })
}
const getDistance = (coordinatesA, coordinatesB) => {
    if (!coordinatesA || !coordinatesB) throw new Error('No params given')
    return Math.sqrt(Math.pow(coordinatesA.x - coordinatesB.x, 2) + Math.pow(coordinatesA.x - coordinatesB.x, 2))
}

const getSpeedValue = (distance, reach) => {
    if (isNaN(distance) || isNaN(reach)) throw new Error('No params given')
    return distance > reach ? 0 : Math.pow(Number(reach) - Number(distance), 2)
}

const calculateSpeed = (networkStationCordinates, deviceCoordinates) => {
    if(!networkStationCordinates || !deviceCoordinates) throw new Error('No params given')
    const distance = getDistance(networkStationCordinates, deviceCoordinates)
    const speed = getSpeedValue(distance, networkStationCordinates.reach)
    return speed
}

const optimalStationForDevice = (device, networkStations) => {
    if(!device || !networkStations || networkStations.length === 0) throw new Error('No params given')
    let result = []
    networkStations.forEach(station => {
        const speed = calculateSpeed(station, device)
        result = [...result, { speed: speed, station: station }]
    })
    return maxSpeedFromArray(result)
}
module.exports = {
    maxSpeedFromArray,
    getDistance,
    getSpeedValue,
    optimalStationForDevice,
    calculateSpeed
}
