let carList = {
    suzuki: {
        Mehran: {
            price: '12,0000',
            image: 'https://cache2.pakwheels.com/system/car_generation_pictures/2873/original/Suzuki_Mehran_2012.jpg?1444111663',
            Transmission: 'Manual',
            detail: {
                model: 2012,
                seats: '5 seats',
                color: ['red', 'white', 'blue']
            }
        },
        Alto: {
            image: 'https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Pearl-Black.jpg',
            price: '24,0000',
            Transmission: 'Manual / Auto',
            detail: {
                model: 2021,
                seats: '5 seats',
                color: ['red', 'white', 'blue']
            }
        },
        Swift: {
            image: 'https://cache4.pakwheels.com/system/car_generation_pictures/5247/original/swift.jpg?1595595071',
            price: '31,0000',
            Transmission: 'Manual',
            detail: {
                model: 2020,
                seats: '5 seats',
                color: ['red', 'white', 'blue']
            }
        },

    },
    honda: {
        Civic: {
            image: 'https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254',
            price: '65,0000',
            Transmission: 'Auto',
            detail: {
                model: 2022,
                seats: '5 seats',
                color: ['red', 'white', 'blue']
            }
        },
        Accord: {
            price: '28,0000',
            image: 'https://cdcssl.ibsrv.net/autodata/images/?img=USB90HOC011C01326.jpg&width=660',
            Transmission: 'Auto',
            detail: {
                model: 2010,
                seats: '5 seats',
                color: ['red', 'white', 'blue']
            }
        },
        City: {
            image: 'https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945',
            price: '52,0000',
            Transmission: 'Auto',
            detail: {
                model: 2019,
                seats: '5 seats',
                color: ['red', 'white', 'blue']
            }
        }
    },
    toyota: {
        corolla: {
            image: 'https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674',
            price: '56,0000',
            Transmission: 'Auto',
            detail: {
                model: 2022,
                seats: '5 seats',
                color: ['red', 'white', 'blue']
            }
        },
        camry: {
            image: 'https://cache2.pakwheels.com/system/car_generation_pictures/6423/original/Toyota_Camry_Front.jpg?1651129122',
            price: '43,0000',
            Transmission: 'Auto',
            detail: {
                model: 2013,
                seats: '5 seats',
                color: ['red', 'white', 'blue']
            }
        },
        yaris: {
            image: 'https://cache2.pakwheels.com/system/car_generation_pictures/6392/original/Toyota_Yaris_Front_Right_Angled.jpg?1650541837',
            price: '57,0000',
            Transmission: 'Auto',
            detail: {
                model: 2023,
                seats: '5 seats',
                color: ['red', 'white', 'blue']
            }
        }
    },
}
// console.log(carList);
let main = document.getElementById('main');
for (var key in carList) {
    for (var key1 in carList[key]) {
        var obj = carList[key][key1];
        console.log(obj.detail.color);
        main.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div class="card" style="width: 18rem;">
                <img src="${obj.image}" class="card-img-top mb-2">
                <div class="card-body">
                  <h5 class="card-title">${key1.toUpperCase()}</h5>
                  <p class="card-text"><strong>Model</strong>:${obj.detail.model}</p>
                  <p class="card-text"><strong>Transmission</strong>: ${obj.Transmission}</p>
                  <p class="card-text"><strong>Price</strong>: ${obj.price}</p>

                  </div>
              </div>
        </div>
            `
    }

}




