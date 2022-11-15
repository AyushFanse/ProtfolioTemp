import React, { useEffect, useState, useRef, memo } from "react";
import { Title } from "../../Components/Common/ReusableFunctions";
import emailjs from "emailjs-com";
import { FormAnimation } from "../../Components/Common/Functions";
import Popup from "../../Components/AlertPopups/Popup";
import { CircularProgress } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import NavIcons from "../../Components/NavIcons/NavIcon";

const Contact = () => {
    const contactForm = useRef();
    const [warning, setWarning] = useState("");
    const [wait, setWait] = useState(false);
    const [messCharCount, setMessCharCount] = useState(0);

    useEffect(() => {
        FormAnimation();
    }, [warning]);

    const sendEmail = (e) => {
        e.preventDefault();
        const contact_data = contactForm.current;
        if (
            !contact_data.name.value &&
            !contact_data.email.value &&
            !contact_data.subject.value &&
            !contact_data.message.value
        ) {
            setWarning({
                status: "error",
                msg: "Please fill all the details..!!!",
            });
            return;
        }
        try {
            emailjs
                .sendForm(
                    "service_21upo2n",
                    "template_f9gconr",
                    contact_data,
                    "iv9_I_A-Kmup-VXS3"
                )
                .then((result) => {
                    if (result.status === 200) {
                        setWait(true);
                        setWarning({
                            status: "success",
                            msg: `Thank You ${contact_data.name.value}! I’ll contact you soon.`,
                        });
                        e.target.reset();
                        setWait(false);
                    }
                });
        } catch {
            setWarning({
                status: "error",
                msg: "There is some error, Try after some time...",
            });
            return;
        }
    };

    return (
        <>
            <div className="contact_container" id="Contact">
                <Title title={"Contact"} />
                {warning === "" ? null : (
                    <Popup
                        security={warning.status}
                        message={warning.msg}
                        setWarning={setWarning}
                    />
                )}
                <div className="contact_container_inner">
                    <div className="nav_icons flex jc ac row">
                        <NavIcons />
                    </div>
                    <form
                        ref={contactForm}
                        onSubmit={sendEmail}
                        autoComplete="off"
                        className="contact_form_out flex col"
                    >
                        <div className="contact_form flex ac">
                            <div className="input_container flex jc ac col">
                                <div className="input_out">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="input"
                                        pattern="[a-zA-Z]{3,50}"
                                        title="Enter the valid name."
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        className="input_label"
                                        htmlFor="name"
                                    >
                                        Full Name
                                    </label>
                                </div>
                                <div className="input_out">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="input"
                                        pattern="[a-z0-9._%+-]+@[a-z]+[\.][a-z]{2,8}"
                                        minLength="2"
                                        placeholder=" "
                                        title="Enter the valid @email."
                                        required
                                    />
                                    <label
                                        className="input_label"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <sup className="contactErrorMess">
                                        Enter the valid email
                                    </sup>
                                </div>
                                <div className="input_out">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        className="input"
                                        placeholder=" "
                                        minLength="8"
                                        maxLength="50"
                                        title="Pleas be more specific with a subject."
                                        required
                                    />
                                    <label
                                        className="input_label"
                                        htmlFor="subject"
                                    >
                                        Subject
                                    </label>
                                </div>
                            </div>
                            <div className="textarea_out flex jc ac">
                                <div className="input_out">
                                    <textarea
                                        type="email"
                                        id="message"
                                        name="message"
                                        className="input"
                                        rows="9"
                                        autoCorrect="false"
                                        placeholder=" "
                                        pattern="[a-zA-Z0-9]{12, 600}"
                                        minLength="12"
                                        maxLength="600"
                                        onChange={(e) => {
                                            setMessCharCount(
                                                e.target.selectionEnd
                                            );
                                        }}
                                        required
                                    />
                                    <label
                                        className="input_label"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <sup className="messCount">
                                        {messCharCount} / 600
                                    </sup>
                                </div>
                            </div>
                        </div>
                        <button type="submit">
                            Submit
                            {wait ? (
                                <CircularProgress
                                    size={30}
                                    id="CircularProgress"
                                />
                            ) : (
                                <KeyboardBackspace
                                    sx={{
                                        fontSize: "2.5rem",
                                        rotate: "180deg",
                                    }}
                                    id="submitIcon"
                                />
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default memo(Contact);
