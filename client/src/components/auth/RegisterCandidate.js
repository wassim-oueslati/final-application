import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

import { registerUser } from '../../js/actions/authActions';


const RegisterCandidate = () => {
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(18);
  const [work, setWork] = useState('');
  const [experience, setExperience] = useState(1);
  const [gender, setGender] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileeName, setFileeName] = useState("");
  
  const dispatch = useDispatch();
  const history = useHistory();

  const toggle = () => {
    setModal(!modal);
  };

  const handleRegister = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('work', work);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('profilePic', fileName);
    formData.append('uploadCv', fileeName);
    formData.append('experience', experience);
    formData.append('description', description);
    formData.append('location', location);
    dispatch(registerUser(formData));
    history.push('/dashboard');
    setName('');
    setLastName('');
    setPassword('');
    setDescription('');
    setLocation('');
    setEmail('');
    setWork('');
    setAge('');
    setExperience('');
    setGender('');
  };

  return (
  <div>
    <Button 
      onClick={toggle} 
      color='dark'
    >
    Sign up today
    </Button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Register</ModalHeader>
      <ModalBody>
        <Form  method="post" encType="multipart/form-data">
          <FormGroup>
            <div style={{fontWeight: "bold", height: 22, paddingLeft: "1%", lineHeight: 22, margin: "15px 0px 7px 0px", backgroundColor: "#F3F8E8"}}>
              <h6>Register Candidate Informations</h6>
            </div>
            <Label >Name</Label>
            <Input type="text" name="name" id="name" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}/>

            <Label >Last Name</Label>
            <Input type="text" name="name" id="name" placeholder="Enter your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
    
            <Label >Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    
            <Label htmlFor="password">Password</Label>
            <Input type="password" value={password} name="password" id="password" placeholder="Password" className="mb-3" onChange={(e) => setPassword(e.target.value)}/>
        
          <div style={{fontWeight: "bold", height: 22, paddingLeft: "1%", lineHeight: 22, margin: "15px 0px 7px 0px", backgroundColor: "#F3F8E8"}}>
            <h6>I submit my CV</h6>
          </div>
            <Label >Work</Label>
            <Input type="text" name="work" id="work" placeholder="You are a ..." value={work} onChange={(e) => setWork(e.target.value)}/>
    
            <Label >Location</Label>
            <Input type="text" name="location" id="location" placeholder="Enter your Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
         
            <Label >Age</Label>
            <Input type="number" name="number" id="number" placeholder="Enter your Age" value={age} onChange={(e) => setAge(e.target.value)}/>
         
            <Label >Experience</Label>
            <Input type="number" name="number" id="number" placeholder="Years of Experience" value={experience} onChange={(e) => setExperience(e.target.value)}/>
        
            <Label >Gender</Label>
            <Input type="text" name="gender" id="gender" placeholder="Your Gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
           
            <Label >Breif description</Label>
            <Input type="textarea" name="breifDescription" id="breifDescription" value={description} onChange={(e) => setDescription(e.target.value)}/>
        
            <Label >Profile Picture</Label>
            <Input type="file" name="profilePic" className='form-contorl-file' onChange={(e) => setFileName(e.target.files[0])}/>
            
            <Label >Download your cv</Label>
            <Input type="file" name="uploadCv"  onChange={(e) => setFileeName(e.target.files[0])}/>
            <Button
              color="dark"
              style={{ marginTop: '2rem' }}
              block
              onClick={handleRegister}
            >
            Register
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>    
  </div>
  );
};

export default RegisterCandidate;