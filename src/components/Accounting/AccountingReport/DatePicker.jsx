import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

const CustomDatePicker = () => {
    const [selectedDateRange, setSelectedDateRange] = useState("");

    const options = [
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
        <Card.Body>
            <Typeahead
                id="select2"
                labelKey={"label"}
                multiple={false}
                options={options}
                placeholder="Choose a date range..."
                selected={[{ label: selectedDateRange }]} // Display selected date range in the input field
                onChange={(selected) => {
                    if (selected.length > 0) {
                        handleOptionClick(selected[0].label);
                    }
                }}
            />
        </Card.Body>
    );
};

export default CustomDatePicker;
