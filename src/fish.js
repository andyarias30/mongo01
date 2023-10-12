import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";
const fishDb = db.collection('fish')

const theFish = {
    species: 'goldfish',
    orgin: 'Amazon',
    color: 'silever',
    size: '1"',
    famliy: {dad: '🐠',
    sister: '🍣',
    mom:{cool: true, special: undefined},
    brothers: ['🐡', '🐟']
},

};
// add a fish

export async function addAFish(){
const fishAdded = await db.collection('fish').insertOne(theFish);
console.log('fishAdded ->', fishAdded);
}

// get all fishies
 export async function getAllFish() {
    const fishList =  await db.collection('fish').find({}).toArray();
    console.table(fishList);
 }

 // delete goldfish ???
 export async function deleteOneFish() {
// 1 find the fish we want to delete ??
// 2 delete it !!

//const fishDeleted = await db.collection('fish').findOneAndDelete({species: 'goldfish'});

// find one and delete by id??? wtf??
 const fishId = new ObjectId('65284caea76561f7fc303647')
const fishDeleted = await db.collection('fish').findOneAndDelete({_id: fishId})
console.log('fishDeleted ->', fishDeleted);

 }

// update fish 

export async function updateOneFish() {
// 1 define the fish we want to update 
// 2 determine what property we want to update 
// 3 find the item we wan update 
// 4 then we update with new data
 const cleanId = new ObjectId('65284835ae3886151fb772c8')
 const dataToUpdate = { color: 'red'}
const updatedFish = await fishDb.findOneAndUpdate({_id: cleanId }, {$set:dataToUpdate})
console.log('updateFish ->', updatedFish)

}