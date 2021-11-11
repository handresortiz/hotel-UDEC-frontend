import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Product} from '../../../demo/domain/product';
import {ProductService} from '../../../demo/service/productservice';

@Component({
    templateUrl: './productos.component.html',
    styleUrls: ['../../../demo/view/listdemo.scss']
})
export class ProductosComponent implements OnInit {

    products: Product[];

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

    sourceCities: any[];

    targetCities: any[];

    orderCities: any[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.sourceCities = [
            {name: 'San Francisco', code: 'SF'},
            {name: 'London', code: 'LDN'},
            {name: 'Paris', code: 'PRS'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Berlin', code: 'BRL'},
            {name: 'Barcelona', code: 'BRC'},
            {name: 'Rome', code: 'RM'}];
        this.targetCities = [];

        this.orderCities = [
            {name: 'San Francisco', code: 'SF'},
            {name: 'London', code: 'LDN'},
            {name: 'Paris', code: 'PRS'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Berlin', code: 'BRL'},
            {name: 'Barcelona', code: 'BRC'},
            {name: 'Rome', code: 'RM'}];

            this.sortOptions = [
                {label: 'Alimentos', value: '!category'},
                {label: 'Bebidas', value: 'category'},
                {label: 'Servicios', value: 'category'}
            ];
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
}
