class Role {
    constructor(id, name, permission) {
        this.id = id;
        this.name = name;
        this.permissions = permissions;
    }
}

module.exports = { Role }