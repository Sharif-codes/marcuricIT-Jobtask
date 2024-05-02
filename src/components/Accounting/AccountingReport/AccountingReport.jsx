import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShreyuDatepicker from "../../../components/Datepicker";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useState } from "react";
import CustomDatePicker from "./DatePicker";


const AccountingReport = () => {
    const [singleSelections, setSingleSelections] = useState([]);

    const options: Array<OptionTypes> = [
        { id: 1, value: "sample", label: "Sample" },
        { id: 2, value: "drBiswas", label: "Dr Biswas" },
        { id: 3, value: "drAlif", label: "Dr Alif" },
    ];

    const onChangeSingleSelection = (selected: OptionTypes[]) => {
        setSingleSelections(selected);
    };

    const [selectedDate, setSelectedDate] = useState(new Date());
    const onDateChange = (date) => {
        if (date) {
            setSelectedDate(date);
        }
    };

    return (
        <Card class="container">
            <div>
                <h3> <i class="bi bi-calculator-fill"></i>Accounting</h3>
            </div>
            <div class="row">


                <div className="col">

                    <CustomDatePicker></CustomDatePicker>
                </div>
                <div class="col">
                    <Card.Body >
                        <p className="mb-1 fw-bold">Doctor:</p>
                        <Typeahead
                            id="select2"
                            labelKey={"label"}
                            multiple={false}
                            onChange={onChangeSingleSelection}
                            options={options}
                            placeholder="Choose a state..."
                            selected={singleSelections}
                        />
                    </Card.Body>
                </div>
                <div class="col">
                <Card.Body >
                        <p className="mb-1 fw-bold">Test:</p>
                        <Typeahead
                            id="select2"
                            labelKey={"label"}
                            multiple={false}
                            onChange={onChangeSingleSelection}
                            options={options}
                            placeholder="Choose a state..."
                            selected={singleSelections}
                        />
                    </Card.Body>

                </div>
                <div class="col">
                <Card.Body >
                        <p className="mb-1 fw-bold">Culture:</p>
                        <Typeahead
                            id="select2"
                            labelKey={"label"}
                            multiple={false}
                            onChange={onChangeSingleSelection}
                            options={options}
                            placeholder="Choose a state..."
                            selected={singleSelections}
                        />
                    </Card.Body>
                </div>
                <div class="col">

                </div>


            </div>

        </Card>

    );
};

export default AccountingReport;