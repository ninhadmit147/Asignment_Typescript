class User {
    email: String;
    phone: number;
    password: string;
    _id: number;
    constructor(phone: number,
        password: string, email: String, _id: number) {
        this._id = _id
        this.email = email
        this.phone = phone
        this.password = password
    }
}