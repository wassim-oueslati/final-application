import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    CardHeader
} from "reactstrap";

function CvCard({cv}) {
    return (
        <div>
            <Container style={{marginBottom:15}}>
            <Card style={{width:310}}>
                <CardHeader style={{ color: "#3d4b44" }}>{cv.name}</CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                        {cv.work}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                    {cv.skills}
                    </CardSubtitle>
                    <CardText>
                    <span>Experience of:</span> {cv.experience}{" "}Year(s)
                    </CardText>
                    <CardText>
                    Email: {cv.email}
                    </CardText>
                    <CardSubtitle>Location: {cv.location}</CardSubtitle>
                    <CardSubtitle>cv:  <a download href={`/cvs/${cv.uploadCv}`}> Download cv </a></CardSubtitle>
                    <Button>
                    Recruit me 
                    </Button>
                </CardBody>
            </Card>  
            </Container>
        </div>
    )
}

export default CvCard