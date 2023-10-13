import { addAFish, getAllFish, deleteOneFish, updateOneFish } from "./src/fish.js";
import { addACar, getAllCars, deleteOneCar , updateOneCar } from "./src/cars.js";
import { closeCliet } from "./src/connectDb.js";


await addAFish();
await getAllFish();
await deleteOneFish();
await updateOneFish();


await addACar();
await getAllCars();
await deleteOneCar();
await updateOneCar();
closeCliet();