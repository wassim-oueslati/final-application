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
import { forgotPasswordUser } from '../../js/actions/authActions';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);
  
  const dispatch = useDispatch();
  const history = useHistory();
  
    const handleSubmit = ()=> {
      dispatch(forgotPasswordUser({ email}));
      history.push('/');
      setEmail('');
      
    };

    const toggle = () => {
      setModal(!modal);
    }; 
    
    return (
      <div >
        <NavLink onClick={toggle}>
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

export default ForgotPassword