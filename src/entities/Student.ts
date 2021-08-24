export default class Student {
    public constructor(private id?: string, private name?: string, private email?: string, private phone?: string,private amountTraining?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.amountTraining = amountTraining;
    }

    public getID(): string | undefined {
        return this.id;
    }

    public getName(): string | undefined {
        return this.name;
    }

    public getEmail(): string | undefined {
        return this.email;
    }

    public getPhone(): string | undefined {
        return this.phone;
    }

    public getAmountTraining(): string | undefined {
        return this.amountTraining;
    }

}