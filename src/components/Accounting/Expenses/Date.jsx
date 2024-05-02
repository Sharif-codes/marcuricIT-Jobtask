import { useState } from "react";
import ShreyuDatepicker from "../../Datepicker";


const DatePick = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    /*
     * handle date change
     */
    const onDateChange = (date: Date) => {
      if (date) {
        setSelectedDate(date);
      }
    };
    return (
        <div>
             <div className="mb-3">
              <label className="form-label">Single Date</label> <br />
              <ShreyuDatepicker
                hideAddon={true}
                value={selectedDate}
                onChange={(date) => {
                  onDateChange(date);
                }}
              />
            </div>
        </div>
    );
};

export default DatePick;