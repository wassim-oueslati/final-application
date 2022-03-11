import React, {useState} from "react";
import { Container, Col, Form, FormGroup, Label, Input, Row, Button, Modal, ModalBody } from "reactstrap";
import { useHistory  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addJob } from "../../../js/actions/jobActions";

function Addjobs() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [modal, setModal] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const [experience, setExperience] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [email, setEmail] = useState("");
    const [fileName, setFileName] = useState("");
    

    const toggle = () => {
      setModal(!modal);
    }; 

    const submitPost = ()=> {
      const formData = new FormData();
      formData.append('companyName', companyName);
      formData.append('email', email);
      formData.append('salary', salary);
      formData.append('title', title);
      formData.append('experience', experience);
      formData.append('companyLogo', fileName);
      formData.append('description', description);
      formData.append('location', location);
      dispatch(addJob(formData));
        setCompanyName('');
        setTitle('');
        setExperience('');
        setDescription('');
        setLocation('');
        setSalary('');
        setEmail('');
        history.push('/');
    };
        
    return (
      <div>
        <Button 
        color="dark"
        onClick={toggle} 
        >
        Add Job
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalBody> 
        <Container className="formbody">
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="jobTitle">Job Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Mention Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Company</Label>
                  <Input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="1234 Main St"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Job Description ..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Experience</Label>
                  <Input
                    type="number"
                    name="experience"
                    id="exampleCity"
                    placeholder="0"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Salary</Label>
                  <Input
                    type="number"
                    name="salary"
                    id="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="email">Company Email</Label>
              <Input
               type="email"
               value={email}
               name="email"
               id="email"
               placeholder="email"
               onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label >Company Logo</Label>
              <Input 
              type="file" 
              name="companyLogo" 
              onChange={(e) => setFileName(e.target.files[0])}
              />
            </FormGroup>
            <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={submitPost}
              >
              Save Job
              </Button>
          </Form>
        </Container>
        </ModalBody>
        </Modal>  
      </div>
    )
}

export default Addjobs