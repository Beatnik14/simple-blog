export interface Iauthor {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Iaddres
}

export interface Iaddres {
    city: string;
    street: string;
}