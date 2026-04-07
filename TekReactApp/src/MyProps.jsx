import { Component } from "react";

class ExpenseEnteryItem extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <h2>This is displaying props</h2>
                <div><b>Item: </b> <em>{this.props.item}</em></div>
                <div><b>Amount: </b> <em>{this.props.amount}</em></div>
                <div><b>SpendDate: </b> <em>{this.props.spendDate.toString()}</em></div>
                <div><b>Category:</b> <em>{this.props.category}</em></div>
            </div>
        );
    }
}
ExpenseEnteryItem.defaultProps={
    item:"Grape Juice",
    amount:30,
    spendDate:new Date(),
    category:"Food"
}
export default ExpenseEnteryItem;