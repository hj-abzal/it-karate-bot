import express from 'express';
import {createProducts} from './controllers/createProducts';
import {getProducts} from './controllers/getProducts';
import {getProductById} from './controllers/getProductById';
import {updateProduct} from './controllers/updateProduct';
import {deleteProduct} from './controllers/deleteProduct';

const products = express.Router();

products.get("/get-all", getProducts);
products.get("/get-one", getProductById);
products.post("/create", createProducts);
products.put("/update", updateProduct);
products.post("/delete", deleteProduct);



export default products;
