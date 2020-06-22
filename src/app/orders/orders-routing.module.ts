import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPath } from '../shared';
import { OrdersComponent } from './orders.component';
import {
    OrdersTableComponent,
    CreateOrderComponent,
    OrderDetailsComponent,
    EditOrderComponent,
} from './components';
import {
    CanLeaveEditOrderGuard,
    ResolveOrderDetailsGuard,
    ResolveOrdersGuard,
} from './guards';
import { OrdersPath } from './orders.constants';
import { ResolveOrderCreateGuard } from './guards/resolve-order-create.guard';

const routes: Routes = [
    {
        path: AppPath.Empty,
        component: OrdersComponent,
        children: [
            {
                path: OrdersPath.Empty,
                component: OrdersTableComponent,
                resolve: {
                    orders: ResolveOrdersGuard,
                },
                data: {
                    label: 'Order list',
                },
            },
            {
                path: OrdersPath.Create,
                component: CreateOrderComponent,
                resolve: {
                    orderData: ResolveOrderCreateGuard,
                },
                data: {
                    label: 'Create Order',
                },
            },
            {
                path: `${OrdersPath.OrderDetails}/:${OrdersPath.OrderId}`,
                component: OrderDetailsComponent,
                resolve: {
                    order: ResolveOrderDetailsGuard,
                },
                data: {
                    label: 'Order details',
                },
            },
            {
                path: `${OrdersPath.Edit}/:${OrdersPath.OrderId}`,
                component: EditOrderComponent,
                resolve: {
                    order: ResolveOrderDetailsGuard,
                },
                canDeactivate: [CanLeaveEditOrderGuard],
                data: {
                    label: 'Edit order',
                },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrdersRoutingModule {
    static components = [
        OrdersComponent,
        OrdersTableComponent,
        CreateOrderComponent,
        OrderDetailsComponent,
        CreateOrderComponent,
        EditOrderComponent,
    ];
}
