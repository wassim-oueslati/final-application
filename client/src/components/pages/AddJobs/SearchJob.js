import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  FormGroup
} from "reactstrap";
import {searchJob} from '../../../js/actions/jobActions'


function SearchJob({search,setSearch}) {
    
    const dispatch = useDispatch();

    const submitSearch = ()=> {
      dispatch(searchJob({search}));
      setSearch('')
    };

    return (
      <div>
        <Container>
          <Form onSubmit={submitSearch}>
              <Row>
                <Col xs="10">
                  <FormGroup>
                    <Input
                      type="text"
                      placeholder="Search by page"
                      name="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
          </Form>
        </Container>
      </div>
    )
}

export default SearchJob