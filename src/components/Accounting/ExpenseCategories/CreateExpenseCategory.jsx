import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import PageTitle from '../../PageTitle';


const CreateExpenseCategory = () => {
    return (
        <div>

            <Card>
                <Card.Body>
                <PageTitle
                breadCrumbItems={[
                    { label: "Expense Categories", path: "/components/accounting-expense-category"},
                    { label: "Create Expense Category", path: "/components/accounting-create-expense-category",active: true },
                   
                ]}
                title={"Expenses"}
            />

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