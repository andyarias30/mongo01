import { addAFish, getAllFish, deleteOneFish, updateOneFish } from "./src/fish.js";
import { closeCliet } from "./src/connectDb.js";

await addAFish();
await getAllFish();
await deleteOneFish();
await updateOneFish();
await closeCliet();


// 