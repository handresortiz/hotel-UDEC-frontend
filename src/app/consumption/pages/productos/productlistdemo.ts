import {Component} from '@angular/core';
import {Product} from '../../../demo/domain/product';
import {ProductService} from '../../../demo/service/productservice';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
    template: `
        <p-table [value]="products" [paginator]="true" [rows]="5" [responsive]="true">
            <ng-template pTemplate="header">
                <tr>
                    <th pSortableColumn="name">Nombre <p-sortIcon field="vin"></p-sortIcon></th>
                    <th pSortableColumn="name">Imagen <p-sortIcon field="vin"></p-sortIcon></th>
                    <th pSortableColumn="price">Precio <p-sortIcon field="price"></p-sortIcon></th>
                    <th pSortableColumn="inventoryStatus">Estado <p-sortIcon field="inventoryStatus"></p-sortIcon></th>
                    <th style="width:4em"></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-product>
                <tr>
                    <td>{{product.name}}</td>
                    <img style="width:4em" [src]="'assets/demo/images/product/' + product.image" [alt]="product.name"/>
                    <td>{{product.price}}</td>
                    <td><span [class]="'product-badge status-'+product.inventoryStatus.toLowerCase()">{{product.inventoryStatus}}</span></td>
                    <td>
                        <button type="button" pButton icon="pi pi-trash" (click)="selectProduct(product)"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class ProductListDemo {

    products: Product[];
            
    constructor(private productService: ProductService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(products => this.products = products);
    }

    selectProduct(product: Product) {
        this.ref.close(product);
    }
}