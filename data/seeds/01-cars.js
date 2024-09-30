// STRETCH
const cars = [
    {
        vin: '1112223334445',
        make: 'toyota',
        model: 'prius',
        mileage: 79000,
        title: 'clean',
        transmission: 'manial',
    },
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'corolla',
        mileage: 215000,
        title: 'salvage'
    },
    {
        vin: '1112223334446',
        make: 'nissan',
        model: 'frontier',
        mileage: 122000,
    }
]


// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }


exports.seed = async function(knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}