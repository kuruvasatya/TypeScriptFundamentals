export interface Phone {
    call(contact_number: number);
    text(contact_number: number, message: string);
    getDetails();
}