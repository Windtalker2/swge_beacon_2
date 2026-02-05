/**
 * A set of functions to advertise beacons with Bluetooth
 */
//% color="#0059ff" weight=100 icon="\uf294" block="SWGE Beacon"
namespace bluetooth {

    /**
     * Activates the SWGE Location Beacon with advanced settings.
     * @param zone The park zone (1-7), eg: 1
     * @param react_interval The reaction interval, eg: 2
     * @param rssi The signal strength (RSSI), eg: -90
     */
    //% blockId=swge_activate_location_advanced
    //% block="activate location beacon zone %zone| interval %react_interval| rssi %rssi"
    //% shim=bluetooth::activateSwgeLocationBeaconAdvanced
    export function activateSwgeLocationBeaconAdvanced(zone: number, react_interval: number, rssi: number): void {
        // This body is only for the simulator.
        // The 'shim=' annotation above tells the real micro:bit to run the C++ version.
        return;
    }

    /**
     * Activates the SWGE Location Beacon using standard park values.
     * @param zone The park zone (1-7), eg: 1
     */
    //% blockId=swge_activate_location
    //% block="activate location beacon zone %zone"
    //% shim=bluetooth::activateSwgeLocationBeacon
    export function activateSwgeLocationBeacon(zone: number): void {
        return;
    }

    /**
     * Activates a beacon that mimics a Droid.
     * @param personality The droid personality (0-8), eg: 3
     */
    //% blockId=swge_activate_droid
    //% block="activate droid beacon personality %personality"
    //% shim=bluetooth::activateSwgeDroidBeacon
    export function activateSwgeDroidBeacon(personality: number): void {
        return;
    }

    /**
     * Activates a generic Bluetooth beacon.
     * @param mfr_id Manufacturer ID
     * @param beacon_data Raw beacon data
     */
    //% blockId=swge_activate_generic
    //% block="activate generic beacon ID %mfr_id| data %beacon_data"
    //% shim=bluetooth::activateGenericBeacon
    export function activateGenericBeacon(mfr_id: string, beacon_data: string): void {
        return;
    }
}