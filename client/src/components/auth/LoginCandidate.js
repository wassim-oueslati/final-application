import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import { loginUser } from '../../js/actions/authActions';
import ForgotPassword from './ForgotPasswordModal';

const LoginCandidate = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    history.push('/dashboard');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
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
              <Label for="password">Password</Label>
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
                onClick={handleLogin}
              >
                Login
              </Button>
              <ForgotPassword/>
            </FormGroup>
          </Form>
    </div>
  );
};

export default LoginCandidate;