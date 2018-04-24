// 1. Create an object to represent a driver. 
// The object should have properties to represent 
// the following: driver's license number, a collection 
// of vehicles they own, and a collection of dates for when 
// they have gotten a ticket.
const Driver = Object.create(null, {
    licenseNumber: {
        value: "01928374",
        enumerable: true
    },
    ownedVehicles: {
        enumerable: true,
        value: ["Mars Lander", "Range Rover", "1967 Ford Mustang", "Dodge Dart"]
    },
    ticketsReceived: {
        enumerable: true,
        value: ["12/43/1998", "02/06/2009"]
    },
    drive: {
        value: function (action) {
            console.log(`Yes ma'am, I will ${action}`)
        }
    }

})

Driver.drive("Accelerate")
Driver.drive("Turn Left")
Driver.drive("Turn right")
Driver.drive("Turn left")
Driver.drive("Decelerate")


// Direct Property name lookup.
console.log(Driver.ticketsRecieved)

// 2. Iterate over your object and console log the keys and their values.
for (const key in Driver) {
    console.log(`${key}: ${Driver[key]}`)
}