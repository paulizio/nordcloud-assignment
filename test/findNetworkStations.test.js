const { findNetworkStations } = require("../src/findNetworkStations");
const { expectedMessage, networkStations, devices } = require('./fixtures/fixtures')
describe('maxSpeedFromArray', () => {
    it('should return highest speed from array', () => {

        expect(findNetworkStations(networkStations, devices)).toEqual(expectedMessage.join(''));
    });
    it('should throw error when param is undefined', () => {
        expect(() => { findNetworkStations(undefined) }).toThrow('Error: No networkstations or devices given');
    });
})