import { Injectable } from '@angular/core';

import { IProduct, Category, ProductColors, ProductSizes } from '../../models/product.models';

export const PRODUCTS: IProduct[] = [
    {
        id: '1',
        name: 'Product 1',
        description: 'Product 1 description',
        price: 100,
        category: Category.Primary,
        isAvailable: true,
        colors: [ProductColors.Blue, ProductColors.Red],
        sizes: [ProductSizes.L, ProductSizes.M, ProductSizes.S],
    },
    {
        id: '2',
        name: 'Product 2',
        description: 'Product 2 description',
        price: 100,
        category: Category.Primary,
        isAvailable: true,
        colors: [ProductColors.Blue, ProductColors.Red],
        sizes: [ProductSizes.L, ProductSizes.M, ProductSizes.S],
    },
    {
        id: '3',
        name: 'Product 3',
        description: 'Product 3 description',
        price: 100,
        category: Category.Primary,
        isAvailable: false,
        colors: [ProductColors.Blue, ProductColors.Red],
        sizes: [ProductSizes.L, ProductSizes.M, ProductSizes.S],
    },
    {
        id: '4',
        name: 'Product 4',
        description: 'Product 4 description',
        price: 100,
        category: Category.Primary,
        isAvailable: true,
        colors: [ProductColors.Blue, ProductColors.Red],
        sizes: [ProductSizes.L, ProductSizes.M, ProductSizes.S],
    },
];

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor() {}

    getProducts(): IProduct[] {
        return PRODUCTS;
    }
}
