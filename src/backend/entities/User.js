class User {
    constructor(id, cnpj, name) {
        this.id = id;
        this.cnpj = cnpj;
        this.name = name;
    }
    
    getID() {
        return this.id;
    }

    getCNPJ() {
        return this.cnpj;
    }

    getName() {
        return this.name;
    }

    getPassword() {
        return this.password;
    }
}

module.exports = User;