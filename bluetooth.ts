/** * A set of functions to advertise beacons with Bluetooth
 */
//% color="#0059ff" weight=100 icon="\uf294" block="SWGE Beacon"
namespace bluetooth {

    /**
     * Activates the SWGE Location Beacon with custom parameters.
     * @param zone The park zone (1-7), eg: 1
     * @param react_interval The reaction interval (multiplied by 5s), eg: 2
     * @param rssi The signal strength threshold (0-255), eg: 166
     */
    //% blockId=swge_activate_location_advanced
    //% block="activate location beacon zone %zone| interval %react_interval| rssi %rssi"
    //% zone.min=1 zone.max=7
    //% shim=bluetooth::activateSwgeLocationBeaconAdvanced
    export function activateSwgeLocationBeaconAdvanced(zone: number, react_interval: number, rssi: number): void {
        // The shim maps this to the C++ function: 
        // SwgeBeaconService::activateSwgeLocationBeacon
        return;
    }

    /**
     * Activates the SWGE Location Beacon using standard park defaults.
     * @param zone The park zone (1-7), eg: 1
     */
    //% blockId=swge_activate_location
    //% block="activate location beacon zone %zone"
    //% zone.min=1 zone.max=7
    //% shim=bluetooth::activateSwgeLocationBeacon
    export function activateSwgeLocationBeacon(zone: number): void {
        return;
    }

    /**
     * Activates a beacon that mimics a Droid to trigger other droids.
     * @param personality The droid personality ID (0-8), eg: 3
     */
    //% blockId=swge_activate_droid
    //% block="activate droid beacon personality %personality"
    //% personality.min=0 personality.max=8
    //% shim=bluetooth::activateSwgeDroidBeacon
    export function activateSwgeDroidBeacon(personality: number): void {
        return;
    }

    /**
     * Activates a custom manufacturer beacon. 
     * @param mfr_id Manufacturer ID (e.g. "0x0183")
     * @param beacon_data Data in hex (e.g. "0x0A040102") or string
     */
    //% blockId=swge_activate_generic
    //% block="activate generic beacon ID %mfr_id| data %beacon_data"
    //% shim=bluetooth::activateGenericBeacon
    export function activateGenericBeacon(mfr_id: string, beacon_data: string): void {
        return;
    }
    /**
 * Star Wars: Galaxy's Edge Beacon Service
 */
    //% color="#0059ff" weight=100 icon="\uf294" block="SWGE Beacon"
    namespace bluetooth {

        /**
         * Activates the SWGE Location Beacon.
         * @param zone The park zone (1-7), eg: 1
         */
        //% blockId=swge_activate_location
        //% block="activate location beacon zone %zone"
        //% zone.min=1 zone.max=7
        //% shim=bluetooth::activateSwgeLocationBeacon
        export function activateSwgeLocationBeacon(zone: number): void {
            return;
        }

        /**
         * Activates a Droid beacon.
         * @param personality The droid personality (0-8), eg: 3
         */
        //% blockId=swge_activate_droid
        //% block="activate droid beacon personality %personality"
        //% personality.min=0 personality.max=8
        //% shim=bluetooth::activateSwgeDroidBeacon
        export function activateSwgeDroidBeacon(personality: number): void {
            return;
        }

        /**
         * Activates a generic beacon with hex data.
         */
        //% blockId=swge_activate_generic
        //% block="activate generic beacon ID %mfr_id| data %beacon_data"
        //% shim=bluetooth::activateGenericBeacon
        export function activateGenericBeacon(mfr_id: string, beacon_data: string): void {
            return;
        }
    }
}