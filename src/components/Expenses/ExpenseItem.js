import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState} from "react";

const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle(`updated!`); //this will also update the refresh the component with the updated value
    console.log(title);
  }
  // const clickHandler = () => {
  //   console.log('Button Clicked');
  // };
  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
  );
}

export default ExpenseItem;
