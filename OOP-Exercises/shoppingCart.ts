type CartItem = {
    name: string;
    price: number;
    qty: number;
}

class ShoppingCart {
    private items: CartItem[] = [];


    addItem(name: string, price: number, qty: number): void {
        if (qty <= 0 || price <= 0) throw new Error("Invalid quantity or price");

        const item = this.item.find(item => item.name === name);

        if (item) item.qty += qty;
        else this.items.push({name, price, qty});

    }

    removeItem(name: string): void {

    }
}