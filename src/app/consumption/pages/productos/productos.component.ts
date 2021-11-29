import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Product} from '../../../demo/domain/product';
import {ProductService} from '../../../demo/service/productservice';
import {MessageService} from 'primeng/api';
import {ProductListDemo} from './productlistdemo';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
    selector: 'app-root',
    templateUrl: './productos.component.html',
    styleUrls: ['../../../demo/view/listdemo.scss'],
    providers: [DialogService, MessageService]
})
export class ProductosComponent implements OnInit {

    products: Product[];

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

    sourceCities: any[];

    targetCities: any[];

    orderCities: any[];

    constructor(private productService: ProductService, public dialogService: DialogService, public messageService: MessageService) {}
    
    ref: DynamicDialogRef;

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
            
            if (this.ref) {
                this.ref.close();
            }
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

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Choose a Product',
            width: '70%',
            contentStyle: {"max-height": "500px", "overflow": "auto"},
            baseZIndex: 10000
        });

        this.ref.onClose.subscribe((product: Product) =>{
            if (product) {
                this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
            }
        });
    }
}