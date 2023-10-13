
import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";
const carsDb = db.collection('cars')

const oursCars = {
    fabricant: 'Nissan',
    color: 'white',
    model: 'Murano',
    transmisson: 'automatic',
    type: 'SUV',
    carRevew:{rantable: true , theBestCar: undefined}
}
// add a car
export async function addACar() {
    const carsAdded = await carsDb.insertOne(oursCars);
    console.log('carsAdded ->', carsAdded);
}
// get all cars
export async function getAllCars() {
    const carList =  await db.collection('cars').find({}).toArray();
    console.table(carList);
}
// delete one car 
export async function deleteOneCar() {
    const carId = new ObjectId('65285bcf39fb0b23caba163b')
const carDeleted = await db.collection('cars').findOneAndDelete({_id: carId})
console.log('fishDeleted ->', carDeleted);
}
// update 
export async function updateOneCar() {
const cleanCarId = new ObjectId('65285c37915c7c4a7807b490')
 const carDataToUpdate = { color: 'yellow'}
const updatedCar = await carsDb.findOneAndUpdate({_id: cleanCarId }, {$set:carDataToUpdate})
console.log('updateFish ->', updatedCar)
}
