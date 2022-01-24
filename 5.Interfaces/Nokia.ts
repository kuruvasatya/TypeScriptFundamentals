import { Phone } from "./Phone";

export class Nokia implements Phone{
    call(contact_number: number) {
        console.log("calling number " + contact_number + " ..........");
    }

    text(contact_number: number, message: string){
        console.log("texting " + contact_number + " ...........");
        console.log(message);
    }
    
    getDetails() {
        console.log("I am Nokia mobile")
    }
}