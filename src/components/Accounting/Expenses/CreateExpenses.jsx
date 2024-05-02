import React, { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import SimpleMDEReact from "react-simplemde-editor";

// styles
import "easymde/dist/easymde.min.css";

// components
import PageTitle from "../../../components/PageTitle";
import Category from "./Category";
import DatePick from "./Date";
import Doctor from "./Doctor";


const CreateExpenses = () => {
    const delay = 1000;
    const options = {
        autofocus: true,
        autosave: {
            enabled: true,
            uniqueId: "1",
            delay,
        },
    }

    return (
        <div>
            <PageTitle
                breadCrumbItems={[

                    { label: "Expenses", path: "/components/accounting-expenses" },
                    { label: "Create Expenses", path: "/components/accounting-create-expenses", active: true },
                ]}
                title={"Expenses"}
            />
            <Card>
                <Card.Body>
                    <div>
                        <h4>Create Expenses</h4>
                        <div className="container">
                            <div class="row">
                                <div class="col">
                                    <Card.Body >
                                        <p className="mb-1 fw-bold">Category</p>
                                        <Category></Category>
                                    </Card.Body>
                                </div>
                                <div class="col">
                                    <Card.Body >

                                        <DatePick></DatePick>
                                    </Card.Body>
                                </div>
                                <div class="col">
                                    <Card.Body >
                                        <p className="mb-1 fw-bold">Doctor</p>
                                        <Doctor></Doctor>
                                    </Card.Body>
                                </div>
                                <div class="col">
                                    <Card.Body >
                                        <p className="mb-1 fw-bold">Amount</p>
                                        <Form.Group as={Row} >
                                            <Col lg={10}>
                                                <Form.Control
                                                    id="example-number"
                                                    type="number"
                                                    name="number"
                                                />
                                            </Col>
                                        </Form.Group>
                                    </Card.Body>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="header-title mt-0 mb-1">Notes</h4>
                    <SimpleMDEReact id="1" options={options} /> 
                    <Button class="primary width-xs"><i class="bi bi-check-lg"></i><span>Save</span></Button>
                </Card.Body>
               
            </Card>

        </div>

    );
};

export default CreateExpenses;