import { addAFish, getAllFish } from "./src/fish.js";
import { closeCliet } from "./src/connectDb.js";

await addAFish();
await getAllFish();
await closeCliet();