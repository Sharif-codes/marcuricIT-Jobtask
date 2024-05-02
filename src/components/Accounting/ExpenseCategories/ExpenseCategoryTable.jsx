import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
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
            
            <div class="d-flex justify-content-between p-2">
                <div>
                    <h3><i class="bi bi-currency-dollar"></i><span>Expense Categories</span></h3>
                </div>
                <Link to="/components/accounting-create-expense-category">
                <Button class="primary ">

                    <i class="bi bi-plus-lg"></i>
                    <span>Create</span>
                </Button></Link>
            </div>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Expense Categories Table</h4>
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
