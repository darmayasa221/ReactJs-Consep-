import { useSelector } from "react-redux";
import { HandlerCalender } from "../../../../store/calender-slice";
import Button from "../../../UI/Button";
import Card from "../../../UI/Card";
import classes from "./FormCalender.module.css";

const FormCalender = () => {
  const calender = useSelector((state) => state.calender);
  const [handlerEvent, handlerDate, handlerSubmit] = HandlerCalender();
  return (
    <Card classes={classes.container}>
      <form onSubmit={handlerSubmit}>
        <div className={classes.wrap_label}>
          <label htmlFor="event">
            <input
              type="text"
              name="event"
              id="event"
              value={calender.event}
              onChange={handlerEvent}
              placeholder="input your event here..."
            />
          </label>
          <label htmlFor="date">
            <input
              type="date"
              name="date"
              id="date"
              value={calender.date}
              onChange={handlerDate}
              placeholder="dd/mm/yy"
            />
          </label>
        </div>
        <Button classes={classes.btn__form_calender} type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default FormCalender;
