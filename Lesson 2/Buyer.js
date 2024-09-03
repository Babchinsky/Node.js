export class Buyer {
    #name;
    #email;

    constructor(name, email) {
        this.#name = name;
        this.#email = email;
    }
    notify(saleInfo) {
        console.log(`${this.#name} (${this.#email}) notified of sale: ${saleInfo}`);
    }
}