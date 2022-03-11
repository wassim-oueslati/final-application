import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory  } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Modal,
  ModalBody
} from 'reactstrap';
import { forgotPasswordRec } from '../../js/actions/authRecActions';

function ForgotPasswordRec() {
    const [email, setEmail] = useState('');
    const [modal, setModal] = useState(false);
    
    const dispatch = useDispatch();
    const history = useHistory();
    
      const handleSubmit = ()=> {
        dispatch(forgotPasswordRec({ email}));
        history.push('/');
        setEmail('');
      };
  
      const toggle = () => {
        setModal(!modal);
      }; 
      
      return (
        <div >
          <NavLink style={{color: '#494d4b'}}
          onClick={toggle}>
          Forget Password ?
          </NavLink>
          <Modal isOpen={modal} toggle={toggle}>
          <ModalBody> 
          <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  value={email}
                  name="email"
                  id="email"
                  placeholder="email"
                  className="mb-3"
                  onChange={(e) => setEmail(e.target.value)}
                />
             
                <Button
                  color="dark"
                  style={{ marginTop: '2rem' }}
                  block
                  onClick={handleSubmit}
                >
                  Reset Password
                </Button>
              </FormGroup>
          </Form>
          </ModalBody>
          </Modal>   
              
        </div>
      )
}

export default ForgotPasswordRec;