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

// Company (enumerable, writable, property)
// Specialty (enumerable, writable, property)
// Name (enumerable, property)
// Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// Worth (non-enumerable, method)
// Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments

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
        value: [{ticker: "FIRST-STOCK", 
                share: 30, 
                price: 25,
                purchase: true}]
    },
    worth: {
        enumerable: false,
        value: function () {
//____________________USING A FOR LOOP_________________________
            // let grandTotal = 0;
            // // When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.
            // for(let i = 0; i < financialAdvisor.portfolio.length; i++){
            //     let total = financialAdvisor.portfolio[i].share * financialAdvisor.portfolio[i].price
            //     console.log("total", total)
            //     if (financialAdvisor.portfolio[i].purchase === true){
            //        grandTotal = grandTotal + total 
            //     } else {
            //         grandTotal = grandTotal - total
            //     }
            // }console.log("grand total", grandTotal)
//__________________________________USING THE 'FOR EACH' LOOP WITH FUNCTION INSIDE___________________
            // let grandTotal = 0;
            // financialAdvisor.portfolio.forEach(function(key){
            //     console.log("key", key)
            //     let total = key.share * key.price
            //     if (key.purchase === true){
            //        grandTotal = grandTotal + total 
            //     } else {
            //         grandTotal = grandTotal - total
            //     }
            // })
            // console.log("grand total", grandTotal)
//__________________________________USING THE 'FOR EACH' LOOP WITH FUNCTION OUTSIDE___________________
            let grandTotal = 0;
            let getNetWorth = function (key){
                let total = key.share * key.price
                if (key.purchase === true){
                    grandTotal = grandTotal + total 
                } else {
                    grandTotal = grandTotal - total
                }
            }
            financialAdvisor.portfolio.forEach(getNetWorth)
            console.log("grand total", grandTotal)   
        }
    },
    purchase: {
        enumerable: false,
        value: function (symbol, quantity, purchasePrice) {
            const newPurchase = {
                ticker: symbol,
                share: quantity,
                price: purchasePrice,
                purchase: true
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
                purchase: false
            }
            financialAdvisor.portfolio.push(sellStock)
            console.log("sell stock in sell function", sellStock)
        }
    }
})

//this calls the "newPurchase" function
financialAdvisor.purchase("ORANGE", 10, 30)
financialAdvisor.purchase("APPLE", 20, 40)

//this calls the "sellStock" function
financialAdvisor.sell("CHERRY", 10, 20)
financialAdvisor.sell("PEACH", 20, 30)

financialAdvisor.worth()




console.log("whole portfolio", financialAdvisor.portfolio)




