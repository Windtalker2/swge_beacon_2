// Tests for the SWGE Beacon extension
// These will run when you pair your micro:bit and download the code

input.onButtonPressed(Button.A, function () {
    // Show a 'L' for Location
    basic.showString("L")
    // Zone 3 is a common 'Resistance' area trigger
    bluetooth.activateSwgeLocationBeacon(3)
})

input.onButtonPressed(Button.B, function () {
    // Show a 'D' for Droid
    basic.showString("D")
    // Personality 3 is a R2-series droid (Resistance)
    bluetooth.activateSwgeDroidBeacon(3)
})

// On start, show a checkmark to confirm the code loaded
basic.showIcon(IconNames.Yes)