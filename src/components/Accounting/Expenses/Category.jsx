import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

const Category = () => {
    const [singleSelections, setSingleSelections] = useState([]);

    const CategoryOptions: Array<OptionTypes> = [
        { id: 1, value: "chocolate", label: "Chocolate" },
        { id: 2, value: "strawberry", label: "Strawberry" },
        { id: 3, value: "vanilla", label: "Vanilla" },
    ]

    const onChangeSingleSelection = (selected: OptionTypes[]) => {
        setSingleSelections(selected);
    }
    return (
    
            <Typeahead
                id="select2"
                labelKey={"label"}
                multiple={false}
                onChange={onChangeSingleSelection}
                options={CategoryOptions}
                placeholder="Choose a state..."
                selected={singleSelections}
            />
        
    );
};

export default Category;