// const veryImportantInfo = Object.create(null, {
//     socialSecurity: {
//         value: "934-11-0201"
//     },
//     bankAccountNumber: {
//         value: "4483271255"
//     },
//     bankRoutingNumber: {
//         value: "458979043"
//     }
// })

// const exciting = Object.create(null, {
//     fun: {
//         value: "Wheeee",
//         enumerable: true
//     },
//     joy: {
//         value: ["bubbles", "puppies", "pizza"]
//     }
// })

// for (let key in exciting) {
//     console.log(key)
// }

const financialAdvisor = Object.create(null, {
    company: {
        enumerable: true,
        writable: true,
        value: "My Company"
    },
    specialty: {
        enumerable: true,
        writable: true,
        value: "Awesome"
    },
    name: {
        enumerable: true,
        value: "name"
    },
    portfolio: {
        enumerable: false,
        value: [{ticker: "ABC", 
                share: 30, 
                price: 25,
                transactionType: "Start Stock"}]
    },
    worth: {
        enumerable: false,
        value: function () {
            // When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.
            
        }
    },
    purchase: {
        enumerable: false,
        value: function (symbol, quantity, purchasePrice) {
            const newPurchase = {
                ticker: symbol,
                share: quantity,
                price: purchasePrice,
                transactionType: "Buy"
            }
            financialAdvisor.portfolio.push(newPurchase)
            console.log("new purchase in purchase", newPurchase)
        }
    },
    sell: {
        enumerable: false,
        value: function (symbol, quantity, sellPrice) {
            const sellStock = {
                ticker: symbol,
                share: quantity,
                price: sellPrice,
                transactionType: "Sell"
            }
            financialAdvisor.portfolio.push(sellStock)
            console.log("sell stock in sell function", sellStock)
        }
    }
})

//this calls the "newPurchase" function
financialAdvisor.purchase("ASD", 55, 77)

//this calls the "sellStock" function
financialAdvisor.sell("UHS", 98, 100)




console.log("this is it", financialAdvisor.portfolio)

// Company (enumerable, writable, property)
// Specialty (enumerable, writable, property)
// Name (enumerable, property)
// Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// Worth (non-enumerable, method)
// Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments