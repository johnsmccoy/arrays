const menu = [
    {
        name: "Frappe McFrapperson",
        price: 6.99,
        category: "beverage",
        size: ["8 oz", "16 oz", "52 oz"]
    },
    {
        name: "Scone",
        price: 6.66,
        category: "pastry",
        size: ["mini", "regular", "large"]
    },
    {
        name: "T-shirt",
        price: 1000.00,
        category: "merchandise",
        size: [
            {
                description: "S",
                material: "Rayon"
            },
            {
                description: "M",
                material: "Cotton"
            },
            {
                description: "L",
                material: "Asbestos"
            }
        ]
    }
]

const printMenu = () => {
    menu.forEach((currentMenuItem, index) => {
        console.log(`${index+1}. ${currentMenuItem.name} ($${currentMenuItem.price})`)
        currentMenuItem.size.forEach(currentSize => {
            console.log(currentSize.description)
        })
    })
}

const customer = object.create(null, {
    name: {
        value: "Thanos",
        enumerable: true
    },
    purchacedItem: {
        value: function(item) {
            console.log(`I would like to purchase ${item}`);
        }
    },
    payForOrder: {
        value: function(paymentMethod){
            console.log(`I wowuld like to pay using ${paymentMethod}`);
        }
    }
})

customer.purchaseItem("Frappe McFrapperson")
server.ringUpOrder("Frappe McFrapperson")
customer.payForOrder("Cash")
server.deliverOrder("Frappe McFrapperson")