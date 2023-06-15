import { randomUUID } from 'crypto';

export type CarColor = 'red' | 'orange' | 'yellow' | 'black' | 'white' | 'blue';

export interface Car {
    make: string;
    model: string;
    year: number;
    mileage: number;
    color: CarColor;
}

export interface Order {
    id: string;
    car: Car;
    price: number;
    timestamp: Date | string;
}

export class Shop {
    private _orders: Order[] = [];

    public newOrder(car: Car, price: number): void {
        this._orders.push({ id: randomUUID(), timestamp: new Date(), car, price });
    }

    public get orders(): Order[] {
        return this._orders;
    }
}
