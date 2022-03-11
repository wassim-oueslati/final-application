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
  ModalBody
} from 'reactstrap';
import { registerRecruiter } from '../../js/actions/authRecActions';

function RegisterRecruiter() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [modal, setModal] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [business, setBusiness] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [employees, setEmployees] = useState("");
  const [dateOfCreation, setDateOfCreation] = useState("");
  const [password, setPassword] = useState('');
  const [fileName, setFileName] = useState("");

  const toggle = () => {
    setModal(!modal);
  };
 
  const handleRegister = () => {
    const formData = new FormData();
    formData.append('companyName', companyName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('business', business);
    formData.append('employees', employees);
    formData.append('dateOfCreation', dateOfCreation);
    formData.append('companyLogo', fileName);
    formData.append('description', description);
    formData.append('location', location);
    dispatch(registerRecruiter(formData));
    history.push('/dashboardRecruiter');
    setPassword('');
    setCompanyName('');
    setBusiness('');
    setDescription('');
    setLocation('');
    setEmployees('');
    setEmail('');
    setDateOfCreation('');
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
          <Form encType="multipart/form-data">
            <FormGroup>
              <div style={{fontWeight: "bold", height: 22, paddingLeft: "1%", lineHeight: 22, margin: "15px 0px 7px 0px", backgroundColor: "#F3F8E8"}}>
                <h6>Register Recruiter Informations</h6>
              </div>
              <Label >Company Name</Label>
              <Input type="text" name="name" id="name" placeholder="Enter Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
    
              <Label >Company Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter Company Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    
              <Label htmlFor="password">Password</Label>
              <Input type="password" value={password} name="password" id="password" placeholder="Password" className="mb-3" onChange={(e) => setPassword(e.target.value)}/>
            <div style={{fontWeight: "bold", height: 22, paddingLeft: "1%", lineHeight: 22, margin: "15px 0px 7px 0px", backgroundColor: "#F3F8E8"}}>
              <h6>My Company Informations</h6>
            </div>
              <Label >Company Business</Label>
              <Input type="text" name="CompanyBusiness" id="CompanyBusiness" placeholder="Enter Company Business" value={business} onChange={(e) => setBusiness(e.target.value)}/>

              <Label >Company Location</Label>
              <Input type="text" name="location" id="location" placeholder="Enter Company Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
        
              <Label >Number of Employees</Label>
              <Input type="number" name="number" id="number" placeholder="Number of Employees in the Company" value={employees} onChange={(e) => setEmployees(e.target.value)}/>
        
              <Label >Company creation date</Label>
              <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" value={dateOfCreation} onChange={(e) => setDateOfCreation(e.target.value)}/>
        
              <Label >Breif description</Label>
              <Input type="textarea" name="breifDescription" id="breifDescription" value={description} onChange={(e) => setDescription(e.target.value)}/>
        
              <Label >Company Logo</Label>
              <Input type="file" name="companyLogo" onChange={(e) => setFileName(e.target.files[0])}/>
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
  )
}

export default RegisterRecruiter