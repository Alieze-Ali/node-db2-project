// STRETCH
const cars = [
    {
    vin: '111111111111111',
    make: 'toyota',
    model: 'corolla',
    mileage: 175000,
    title: 'clean',
    transmission: 'automatic',
},
{
    vin: '111111111111112',
    make: 'honda',
    model: 'civic',
    mileage: 10000,
    title: 'clean',
    
},
{
    vin: '111111111111113',
    make: 'jeep',
    model: 'wrangler',
    mileage: 25000,
    title: 'salvage',

},
]
exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
   

}