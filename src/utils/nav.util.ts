import { navigate } from "gatsby";

export class NavUtil {
    
    public static jumpToContactForm(): void {
        let contactForm = document.getElementById("contact-form-section");
        if (contactForm) {
            contactForm.scrollIntoView();
        } else {
            navigate("/join");
            contactForm = document.getElementById("contact-form-section");
            if (contactForm) {
                contactForm.scrollIntoView();
            }
        }
    }
    
}
