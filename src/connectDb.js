import { MongoClient } from "mongodb";
import { connectionString } from "../secret.js";

const client = new MongoClient(connectionString);

await client.connect();

export const db = client.db('Cluster0');

export function closeCliet() {
    client.close();
}