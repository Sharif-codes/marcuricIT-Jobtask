import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';


const CreateExpenseCategory = () => {
    return (
        <div>

            <Card>
                <Card.Body>
                    <h4 className="mb-3 header-title mt-0">Create Expense Category</h4>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="exampleEmail2">Category</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                id="exampleEmail2"
                                placeholder="Expense Category Name"
                            />
                          
                        </Form.Group>

                        <Button variant="primary" type="submit">
                        <i class="bi bi-check-lg"></i>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CreateExpenseCategory;