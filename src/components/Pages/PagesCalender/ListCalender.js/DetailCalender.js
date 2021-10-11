import React from "react";
import Button from "../../../UI/Button";
import Card from "../../../UI/Card";
import classes from "./DetailCalender.module.css";

const DetailCalender = (props) => {
  return (
    <Card classes={classes.wrap_calender}>
      <div className={classes.wrap_infrom}>
        <p className={classes.text_date}>{props.date}</p>
        <p className={classes.text_event}>{props.event}</p>
      </div>
      <div>
        <Button>Update</Button>
      </div>
    </Card>
  );
};

export default DetailCalender;
