import { Http } from "../utils/http.js";

export class ProductService {

    async getProducts() {
        return Http.get("http://localhost:3004/products");
    }
}