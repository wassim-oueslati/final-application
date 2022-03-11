import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import {  editUser } from "../../js/actions/authActions";


function EditCandidate({user}) {
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
  const [password, setPassword] = useState('');
  const [fileName, setFileName] = useState("");
  const [fileNamee, setFileNamee] = useState("");
  
  const toggle = () => {
    setModal(!modal);
    setName(user.name);
    setLastName(user.lastName);
    setDescription(user.description);
    setLocation(user.location);
    setEmail(user.email);
    setWork(user.work);
    setAge(user.age);
    setExperience(user.experience);
    setGender(user.gender);
    setPassword(user.password);
    setFileName(user.profilePic);
    setFileNamee(user.uploadCv)
  };

  const dispatch = useDispatch();

  const editt = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('work', work);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('profilePic', fileName);
    formData.append('uploadCv', fileNamee);
    formData.append('experience', experience);
    formData.append('description', description);
    formData.append('location', location);
    dispatch(editUser(user._id, formData));
    toggle();
  };
  

  return (
    <div>
      <Button color="dark" onClick={toggle}>
        Edit Candidate{" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Candidate</ModalHeader>
        <ModalBody>
          <Form>
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
            <Input type="file" name="profilePic" className='form-contorl-file' onChange={(e) => setFileName(e.target.files[0])}/>
            
            <Label htmlFor='file'>cv</Label>
            <Input type="file" name="uploadCv" className='form-contorl-file' onChange={(e) => setFileNamee(e.target.files[0])}/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>
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

export default EditCandidate;