// STRETCH
const cars = [
    {
    vin: '3G4AG55M8RS622999',
    make: 'toyota',
    model: 'corolla',
    mileage: 175000,
    title: 'clean',
    transmission: 'automatic',
},
{
    vin: 'SMT905RN59T379271',
    make: 'honda',
    model: 'civic',
    mileage: 10000,
    title: 'clean',
    
},
{
    vin: '1GBJC34R9XF017297',
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