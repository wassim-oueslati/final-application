import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import { addProfile } from '../../../js/actions/profileActions';

function AddProfile() {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState("");
    const [age, setAge] = useState('');
    const [work, setWork] = useState('');
    const [experience, setExperience] = useState("");
    const [gender, setGender] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [fileName, setFileName] = useState("");
    const [fileNamee, setFileNamee] = useState("");
    
    const toggle = () => {
      setModal(!modal);
    };
  
    const dispatch = useDispatch();
  
    const add = () => {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('work', work);
      formData.append('age', age);
      formData.append('gender', gender);
      formData.append('profilePic', fileName);
      formData.append('uploadCv', fileNamee);
      formData.append('experience', experience);
      formData.append('description', description);
      formData.append('location', location);
      dispatch(addProfile(formData));
      setName('');
      setLastName('');
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
        <Button color="dark" onClick={toggle}>
          Add Profile{" "}
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add Candidate Profile</ModalHeader>
          <ModalBody>
            <Form method="post" encType="multipart/form-data">
              <FormGroup>
              <Label >Name</Label>
              <Input type="text" name="name" id="name" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}/>
  
              <Label >Last Name</Label>
              <Input type="text" name="name" id="name" placeholder="Enter your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      
              <Label >Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>  
              
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
              
              <Label htmlFor='file'>Profile Picture</Label>
              <Input type="file" name="profilePic"  onChange={(e) => setFileName(e.target.files[0])}/>
              
              <Label >Download your cv</Label>
            <Input type="file" name="uploadCv" onChange={(e) => setFileNamee(e.target.files[0])}/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            {/* <Link to="/" onClick={Delete} >Delete Profile</Link> */}
            <Button color="primary" onClick={add}>
              save
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default AddProfile;