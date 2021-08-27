export default interface User {
  id?: number;
  cnpj?: string;
  name?: string;
}

// class User {
//     public constructor(private id?: number, private cnpj?: string, private name?: string, private password?: string) {
//         this.id = id;
//         this.cnpj = cnpj;
//         this.name = name;
//         this.password = password;
//     }

//     public getID(): number | undefined {
//         return this.id;
//     }

//     public getCNPJ(): string | undefined {
//         return this.cnpj;
//     }

//     public getName(): string | undefined {
//         return this.name;
//     }

//     public getPassword(): string | undefined {
//         return this.password;
//     }
// }
