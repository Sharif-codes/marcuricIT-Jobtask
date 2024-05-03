import React from "react";
import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import PageTitle from "../../PageTitle";
import { records as data } from "./data";
import Table from "../../Table";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


const columns = [
    {
        Header: "#",
        accessor: "id",
        sort: true,
    },
    {
        Header: "Category",
        accessor: "category",
        sort: true,
    },
    {
        Header: "Action",
        accessor: "icon",
        Cell: ({ row }) => (
            <div>
                <i class="bi bi-pencil-square"></i>
                <i class="bi bi-trash"></i>
            </div>


        ),
    },
];

const sizePerPageList = [
    {
        text: "5",
        value: 5,
    },
    {
        text: "10",
        value: 10,
    },
    {
        text: "25",
        value: 25,
    },
    {
        text: "All",
        value: data.length,
    },
];

const ExpenseCategoryTable = () => {
    return (
        <>

            <PageTitle
                breadCrumbItems={[

                    { label: "Expense Categories", path: "/components/accounting-expense-category", active: true },

                ]}
                title={"Expenses"}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>


                            <Row class="border">
                                <Col xs={12} md={4}>
                                    <h4 className="header-title">Expense Categories Table</h4>
                                </Col >
                                <Col xs={12} md={6} class="align-center">
                                    <ButtonGroup className="mb-2">
                                        <Button variant="dark"><i class="bi bi-files"></i>Copy </Button>
                                        <Button variant="dark"><i class="bi bi-file-earmark-excel"></i>Excel</Button>
                                        <Button variant="dark"><i class="bi bi-file-ruled"></i>CSV</Button>
                                        <Button variant="dark"><i class="bi bi-file-earmark-pdf"></i>PDF</Button>
                                      
                                    </ButtonGroup>
                                </Col>
                                <Col xs={12} md={2}>
                                    <Link to="/components/accounting-create-expense-category">
                                        <Button class="primary ">

                                            <i class="bi bi-plus-lg"></i>
                                            <span>Create</span>
                                        </Button></Link>
                                </Col>
                            </Row>
                           
                            <Table
                                columns={columns}
                                data={data}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSearchable={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ExpenseCategoryTable;
