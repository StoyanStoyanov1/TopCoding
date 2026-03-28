class ParkingSystem {
    private parkingSlot: number[];

    constructor(big: number, medium: number, small: number) {
        this.parkingSlot = [big, medium, small]
    }

    addCar(carType: number): boolean {
        if (this.parkingSlot[carType - 1]) {
            this.parkingSlot[carType - 1]--;
            return true;
        }

        return false;
    }
}