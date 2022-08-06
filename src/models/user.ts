class User {
    email: String;
    phone: number;
    password: string;
    id: number;
    constructor(phone: number,
        password: string, email: String, id: number) {
        this.id = id
        this.email = email
        this.phone = phone
        this.password = password
    }
}