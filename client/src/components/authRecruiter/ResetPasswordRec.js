import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { logoutRec, resetPasswordRec } from '../../js/actions/authRecActions';

function ResetPasswordRec() {
    let { token } = useParams();
    console.log(token)
  
    const [password, setPassword] = useState('');
  
    const dispatch = useDispatch();
    const history = useHistory();
  
    const handleResetPassword = () => {
      dispatch(resetPasswordRec({token ,password}));
      history.push('/register-recruiter');
      setPassword('');
      logoutRec()
    };

    return (
        <div style={{ padding: '7%' , width:700 , margin:'0 auto' }}>
          <Form>
            <FormGroup>
              <Label for="password">Reset Password</Label>
              <Input
                type="password"
                value={password}
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={handleResetPassword}
              >
                Update Password
              </Button>
            </FormGroup>
          </Form>
        </div>
    )
}

export default ResetPasswordRec;