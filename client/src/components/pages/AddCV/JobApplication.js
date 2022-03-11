import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCv } from "../../../js/actions/cvActions";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from 'reactstrap';

function JobApplication({job}) {
  
  const dispatch = useDispatch();
  
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState("");
  const [work, setWork] = useState("");
  const [skills, setSkills] = useState("");
  const [fileName, setFileName] = useState("");
  const [jobemail,setJobemail] = useState(job.email)
  
  const toggle = () => {
    setModal(!modal);
  }; 


  const submitPost = ()=> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('location', location);
    formData.append('work', work);
    formData.append('experience', experience);
    formData.append('skills', skills);
    formData.append('jobemail', jobemail);
    formData.append('uploadCv', fileName);
    dispatch(addCv(formData));
    
      setName('');
      setEmail('');
      setLocation('');
      setExperience('');
      setWork('');
      setSkills('');
      setJobemail(jobemail); 
      toggle()
  };

    return (
      <div>
        <Button 
        onClick={toggle} 
        style={{ height: "100%" , backgroundColor: "#f4623a"}}
        >
        Apply Now
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Apply for this Job</ModalHeader>
        <ModalBody>
          <Form method="post" encType="multipart/form-data">
            <FormGroup>
              <Label for="name">Full Name</Label>
              <Input
                type="text"
                value={name}
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={(e) => setName(e.target.value)}
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="email">Location</Label>
              <Input
                type="text"
                value={location}
                name="location"
                id="location"
                placeholder="location"
                onChange={(e) => setLocation(e.target.value)}
              />
              <Label for="email">Work</Label>
              <Input
                type="text"
                value={work}
                name="work"
                id="work"
                placeholder="work"
                onChange={(e) => setWork(e.target.value)}
              />
              <Col md={13}>
                <FormGroup>
                  <Label>Years of Experience</Label>
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
              <Label for="email">Skills</Label>
              <Input
                type="text"
                value={skills}
                name="skills"
                id="skills"
                placeholder="Full Stack Developer | JavaScript | React | Nodejs ...."
                onChange={(e) => setSkills(e.target.value)}
              />
              <Label >Download your cv</Label>
              <Input 
              type="file" 
              name="uploadCv"  
              onChange={(e) => setFileName(e.target.files[0])}/>
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={submitPost}
              >
                Apply Now
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default JobApplication