const { maxSpeedFromArray, getDistance, getSpeedValue, calculateSpeed, optimalStationForDevice } = require('../utils')
const { networkStations } = require('./fixtures/fixtures')
describe('utils', () => {
    describe('maxSpeedFromArray', () => {
        it('should return highest speed from array', () => {
            const array = [{ speed: 1 }, { speed: 2 }, { speed: 0 }]
            expect(maxSpeedFromArray(array)).toStrictEqual({ speed: 2 });
        });
        it('should throw error when param is undefined', () => {
            expect(() => { maxSpeedFromArray(undefined) }).toThrow('Error: no params or invalid params given');
        });
        it('should throw error when given empty array', () => {
            expect(() => { maxSpeedFromArray([]) }).toThrowError('Error: no params or invalid params given');
        });
    })
    describe('getDistance', () => {
        it('should calculate distance between coordinates', () => {
            const a = { x: 1, y: 2 }
            const b = { x: 2, y: 1 }
            expect(getDistance(a, b)).toStrictEqual(1.4142135623730951);
        });
        it('should throw error when param is undefined', () => {
            expect(() => { getDistance(undefined, undefined) }).toThrow('No params given');
        });
    })
    describe('getSpeedValue', () => {
        it('should return 0 when distance is bigger than reach', () => {
            expect(getSpeedValue(3, 2)).toStrictEqual(0);
        });
        it('should return 2 when distance is smaller than reach', () => {
            expect(getSpeedValue(0, 2)).toStrictEqual(4);
        });
        it('should throw error when param is undefined', () => {
            expect(() => { getSpeedValue(undefined, 0) }).toThrowError('No params given');
        });
        it('should throw error when param is undefined', () => {
            expect(() => { getSpeedValue('foo', 'bar') }).toThrowError('No params given');
        });
    })
    describe('calculateSpeed', () => {
        it('Should calculate speed when given params', () => {
            const networkStation = { x: 1, y: 2, reach: 20 }
            const device = { x: 2, y: 1 }
            expect(calculateSpeed(networkStation, device)).toStrictEqual(345.4314575050762);
        });
        it('should throw error when param is undefined', () => {
            expect(() => { calculateSpeed(undefined, 0) }).toThrowError('No params given');
        });
    })
    describe('optimalStationForDevice', () => {
        it('Should calculate optimal station for given device', () => {

            const device = { x: 2, y: 1 }
            const result = { speed: 76.6913421348986, station: { reach: 13, x: 5, y: 5 } }
            expect(optimalStationForDevice(device, networkStations)).toStrictEqual(result);
        });
        it('should throw error when param is undefined', () => {
            expect(() => { optimalStationForDevice(undefined, null) }).toThrowError('No params given');
        });
    })
})
