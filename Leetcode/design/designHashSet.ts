class MyHashSet {
    map: Map<number, boolean>

    constructor() {
        this.map = new Map();
    }

    add(key: number): void {
        this.map.set(key, true);
    }

    remove(key: number): void {
        this.map.delete(key);
    }

    contains(key: number): boolean {
        return this.map.has(key);
    }
}