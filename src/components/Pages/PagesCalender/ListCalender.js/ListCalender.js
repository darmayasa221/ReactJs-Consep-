import { useEffect } from "react";
import { useSelector } from "react-redux";
import DUMY_CALENDER from "../../../../data/calender";
import Card from "../../../UI/Card";
import DetailCalender from "./DetailCalender";
import classes from "./ListCalender.module.css";
const ListCalender = () => {
  const calender = useSelector((state) => state.calender.count);
  useEffect(() => {
    if (calender > 0) {
    }
  }, [calender]);
  return (
    <Card>
      <div className={classes.container__detail_calender}>
        {DUMY_CALENDER.map((itm, index) => {
          return (
            <DetailCalender key={index} event={itm.event} date={itm.date} />
          );
        })}
      </div>
    </Card>
  );
};

export default ListCalender;
