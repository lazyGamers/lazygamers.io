import { ContactFormState } from "../components/contact-form/contact-form.component";

export class ContactUtil {

    public static validateFormData(state: ContactFormState): ContactFormState {
    
        state.formData.name.error = "";
        state.formData.email.error = "";
        state.formData.message.error = "";
        state.formData.valid = true;
        
        if (!state.formData.name.value) {
            state.formData.name.error = "Name must not be empty!";
            state.formData.valid = false;
        }
        if (!state.formData.message.value) {
            state.formData.message.error = "Message must not be empty!";
            state.formData.valid = false;
        }
        if (state.formData.message.value.length > 1000) {
            state.formData.message.error = "Message is too long!";
            state.formData.valid = false;
        }
        if (!state.formData.email.value) {
            state.formData.email.error = "Email must not be empty!";
            state.formData.valid = false;
        }
        const regex = new RegExp(/^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
        if (!regex.test(state.formData.email.value)) {
            state.formData.email.error = "Not a valid email!";
            state.formData.valid = false;
        }
        return state;
    }
}
