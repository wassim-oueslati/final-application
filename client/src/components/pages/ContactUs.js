import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Button
} from 'reactstrap';
import {guestContactUs} from '../../js/actions/guestActions'

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = ()=> {
        dispatch(guestContactUs({ name,email,message}));
        setName('');
        setEmail('');
        setMessage('');
      };

    return (
        <section style={{padding:"2%"}} id="contact">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 col-xl-6 text-center">
                    <h2 className="mt-0">Let's Get In Touch!</h2>
                    <hr className="divider" />
                    <p className="text-muted mb-5">Ready to start your next journey with us? Send us a messages and we will get back to you as soon as possible!</p>
                </div>
            </div>
            <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                <div className="col-lg-6">
                    
                    <form id="contactForm">
                        
                        <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            type="text"
                            value={name}
                            name="name"
                            id="name"
                            placeholder="Enter your name..."
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Full name</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            type="email"
                            value={email}
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email address</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            style={{height:156}}
                            type="text"
                            value={message}
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <label htmlFor="message">Message</label>
                        </div>
                        
                        <div className="text-center mb-3">
                            <Button
                                style={{ marginTop: '2rem' , backgroundColor: "#f4623a" , borderRadius:50 , height:50}}
                                block
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>        
    )
}

export default ContactUs