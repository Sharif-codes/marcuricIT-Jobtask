import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

const Doctor = () => {
    const [singleSelections, setSingleSelections] = useState([]);

    const CategoryOptions: Array<OptionTypes> = [
        { id: 1, value: "Sample", label: "Sample" },
        { id: 2, value: "drAbrarul", label: "Dr Abrarul" },
        { id: 3, value: "drShifat", label: "DrShifat" },
    ]

    const onChangeSingleSelection = (selected: OptionTypes[]) => {
        setSingleSelections(selected);
    }
    return (
        <div>
            <Typeahead
                id="select2"
                labelKey={"label"}
                multiple={false}
                onChange={onChangeSingleSelection}
                options={CategoryOptions}
                placeholder="Choose a state..."
                selected={singleSelections}
            />
        </div>
    );
};

export default Doctor;