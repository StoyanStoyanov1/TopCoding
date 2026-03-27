class MyHashMap {
    map: Map<number, number>

    constructor() {
        this.map = new Map();
    }

    put(key: number, value: number): void {
        this.map.set(key, value);
    }

    get(key: number): number {
        return this.map.get(key) ?? -1;
    }

    remove(key: number): void {
        this.map.delete(key);
    }
}