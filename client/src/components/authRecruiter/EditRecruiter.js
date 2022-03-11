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
import { editRecruiter } from '../../js/actions/authRecActions';

function EditRecruiter({recruiter}) {
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
    setCompanyName(recruiter.companyName);
    setBusiness(recruiter.business);
    setDescription(recruiter.description);
    setLocation(recruiter.location);
    setEmail(recruiter.email);
    setEmployees(recruiter.employees);
    setDateOfCreation(recruiter.dateOfCreation);
    setPassword(recruiter.password);
    setFileName(recruiter.companyLogo)
  };

  const dispatch = useDispatch();

  const editt = () => {
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
    dispatch(editRecruiter(recruiter._id,formData ));
    toggle();
  };

  return(
    <div>
      <Button color="dark" onClick={toggle}>
        Edit Recruiter{" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Recuiter</ModalHeader>
        <ModalBody>
        <Form >
            <FormGroup>
              <Label >Company Name</Label>
              <Input type="text" name="name" id="name" placeholder="Enter Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
    
              <Label >Company Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter Company Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    
              <Label >Company Business</Label>
              <Input type="text" name="CompanyBusiness" id="CompanyBusiness" placeholder="Enter Company Business" value={business} onChange={(e) => setBusiness(e.target.value)}/>

              <Label >Company Location</Label>
              <Input type="text" name="location" id="location" placeholder="Enter Company Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
        
              <Label >Number of Employees</Label>
              <Input type="number" name="number" id="number" placeholder="Number of Employees in the Company" value={employees} onChange={(e) => setEmployees(e.target.value)}/>
        
              {/* <Label >Company creation date</Label>
              <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" value={dateOfCreation} onChange={(e) => setDateOfCreation(e.target.value)}/> */}
        
              <Label >Breif description</Label>
              <Input type="textarea" name="breifDescription" id="breifDescription" value={description} onChange={(e) => setDescription(e.target.value)}/>
        
              <Label >Company Logo</Label>
              <Input type="file" name="companyLogo" onChange={(e) => setFileName(e.target.files[0])}/>
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

export default EditRecruiter;