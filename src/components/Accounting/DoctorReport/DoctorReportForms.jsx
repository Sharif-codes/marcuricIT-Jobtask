import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import PageTitle from "../../PageTitle";


const DoctorReportForms = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [selectedDateRange, setSelectedDateRange] = useState("");

    const options: Array<OptionTypes> = [
        { id: 1, value: "sample", label: "Sample" },
        { id: 2, value: "drBiswas", label: "Dr Biswas" },
        { id: 3, value: "drAlif", label: "Dr Alif" },
    ];

    const onChangeSingleSelection = (selected: OptionTypes[]) => {
        setSingleSelections(selected);
    };
    const DaysOptions = [
        { id: 1, label: "Today" },
        { id: 2, label: "Yesterday" },
        { id: 3, label: "Last 7 days" },
        { id: 4, label: "Last 30 days" },
        { id: 5, label: "This month" },
        { id: 6, label: "Last month" },
        { id: 7, label: "This year" },
        { id: 8, label: "Last year" },
    ];

    const handleOptionClick = (label) => {
        let minDate, maxDate;
        const currentDate = new Date();
        switch (label) {
            case "Today":
                minDate = currentDate;
                maxDate = currentDate;
                break;
            case "Yesterday":
                minDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
                maxDate = minDate;
                break;
            case "Last 7 days":
                minDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
                maxDate = currentDate;
                break;
            case "Last 30 days":
                minDate = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
                maxDate = currentDate;
                break;
            case "This month":
                minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                maxDate = currentDate;
                break;
            case "Last month":
                minDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
                maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
                break;
            case "This year":
                minDate = new Date(currentDate.getFullYear(), 0, 1);
                maxDate = currentDate;
                break;
            case "Last year":
                minDate = new Date(currentDate.getFullYear() - 1, 0, 1);
                maxDate = new Date(currentDate.getFullYear() - 1, 11, 31);
                break;
            default:
                break;
        }
        setSelectedDateRange(`${minDate.toLocaleDateString()} - ${maxDate.toLocaleDateString()}`);
    };
    return (
        <>
       <PageTitle
                breadCrumbItems={[

                    { label: "Accounting", path: "/components/accounting-report", active: true },

                ]}
                title={"Accounting"}
            />
        <Card class="">
        
                <h4 class="px-2">Doctor Report</h4>
           
            <Card.Body>
            <Row>
                <Col>
                    <p className="mb-1 fw-bold">Date range:
                    </p>
                    <Typeahead
                        id="select2"
                        labelKey={"label"}
                        multiple={false}
                        options={DaysOptions}
                        placeholder="Choose a date range..."
                        selected={[{ label: selectedDateRange }]} // Display selected date range in the input field
                        onChange={(selected) => {
                            if (selected.length > 0) {
                                handleOptionClick(selected[0].label);
                            }
                        }}
                    />
                </Col>
                <Col>

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

                </Col>
              
               
                <Col>

                    <p className="mb-1 fw-bold">
                        Show Details</p>
                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        label="Show Group tests"
                    />
                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        label="Show Payment"
                    />
                    

                </Col>
                <Col>
                <Button class="primary width-xs align-center"><i class="bi bi-gear-fill"></i><span>Save</span></Button>
                </Col>



            </Row>
            </Card.Body>

        </Card> </>
    );
};

export default DoctorReportForms;