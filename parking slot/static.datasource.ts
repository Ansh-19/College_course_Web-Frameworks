import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "slot 1", "bike 1", "Product 1 (Category 1)", 100),
        new Product(2, "slot 2", "Car 1", "Product 2 (Category 1)", 100),
        new Product(3, "slot 3", "bike 2", "Product 3 (Category 1)", 100),
        new Product(4, "slot 4", "car 2", "Product 4 (Category 1)", 100),
        new Product(5, "slot 5", "Category 1", "Product 5 (Category 1)", 100),
        
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
}
