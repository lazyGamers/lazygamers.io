import React, { ChangeEvent, FormEvent } from "react";

import contactStyle from "./contact-form.component.module.scss";
import { ContactUtil } from "../../utils/contact.util";
import { EmailData, EmailUtil } from "../../utils/email.util";
import infoLazyGamersDark from "../../media/images/info-lazygamers-dark.png";

export interface FormValue {
    error: string;
    value: string;
}

export interface ContactFormState {
    formData: {
        name: FormValue;
        email: FormValue;
        message: FormValue;
        valid: boolean;
    };
}

export class ContactForm extends React.Component<{}, ContactFormState> {

    private contactFormInstance: HTMLFormElement | null;
    
    constructor(props: any) {
        super(props);
        
        this.contactFormInstance = null;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        
        this.state = {
            formData: {
                valid: true,
                name: {
                    error: "",
                    value: ""
                },
                email: {
                    error: "",
                    value: ""
                },
                message: {
                    error: "",
                    value: ""
                }
            }
        };
    }
    
    private handleInputChange($event: ChangeEvent): void {
        const target = $event.target;
        const value = (target as any).value;
        const name = (target as any).name;
        
        let newState: ContactFormState = {
            formData: {
                ...this.state.formData
            }
        };
        
        if (!(newState.formData as any)[name]) {
            (newState.formData as any)[name] = {
                value: "",
                error: ""
            };
        }
        (newState.formData as any)[name].value = value;
        
        newState = ContactUtil.validateFormData(newState);
        
        this.setState(newState);
    }
    
    private sendEmail($event: FormEvent) {
        $event.preventDefault();
        
        if (this.contactFormInstance) {
            const data: EmailData = {
                name: this.state.formData.name.value,
                email: this.state.formData.email.value,
                message: this.state.formData.message.value,
                itsatrap: undefined,
                "contact-form": this.contactFormInstance.name
            };
            EmailUtil.sendEmail(data).then(() => {
                console.log("sent!");
            }).catch(err => {
                console.error(err);
            });
        }
    }
    
    private openInfo(): void {
        if (typeof window !== "undefined") {
            window.location.href = "mailto:info@lazygamers.io";
        }
    }
    
    private renderError(fieldName: string) {
        if ((this.state.formData as any)[fieldName].error) {
            return (
                <div className="invalid-feedback">
                    {(this.state.formData as any)[fieldName].error}
                </div>
            );
        }
        return null;
    }
    
    public render() {
        return (
            <div className="wrapper dark-bg">
                <div className={`content ${contactStyle.contactFormContent}`}>
                    <div className={`${contactStyle.halfSide} ${contactStyle.contactForm}`} id="contact-form-section">
                        <form name="contact-form" data-netlify="true" data-netlify-honeypot="itsatrap"
                            ref={ref => this.contactFormInstance = ref} onSubmit={this.sendEmail}>
                            <div className={`form-group`}>
                                <label>Name:</label>
                                <input name="name"
                                    className={`form-control ${this.state.formData.name.error ? "is-invalid" : ""}`}
                                    onChange={this.handleInputChange}/>
                                {this.renderError("name")}
                            </div>
                            <div className={`form-group`}>
                                <label>Email:</label>
                                <input name="email"
                                    className={`form-control ${this.state.formData.email.error ? "is-invalid" : ""}`}
                                    onChange={this.handleInputChange}/>
                                {this.renderError("email")}
                            </div>
                            <div className={`form-group`}>
                                <label>Message:</label>
                                <textarea name="message" rows={5} onChange={this.handleInputChange}
                                    className={`form-control ${this.state.formData.message.error ? "is-invalid" : ""}`}/>
                                {this.renderError("message")}
                            </div>
                            <div className="text-right mt-5">
                                <button type="submit" disabled={!this.state.formData.valid}>Send</button>
                            </div>
                        </form>
                    </div>
                    <div className={`${contactStyle.halfSide} ${contactStyle.contactInfo}`}>
                        <p>Information</p>
                        <p>
                            LazyGamers is not registered company. At the moment it is purely an organization
                            of like-minded people.
                        </p>
                        <p>
                            If you want to join us, contact us using form or by writing e-mail to address:
                        </p>
                        <p>
                            <span style={{cursor: "pointer"}} onClick={this.openInfo}>
                                <img src={infoLazyGamersDark} alt="info" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
