function add(a: number, b: number) {
    return a+b;
}

export class Codelab {
    constructor(public guests: Guest[]) {}

    getGuestsComing() {
        return this.guests.filter((g: Guest) => g.coming)
    }
}