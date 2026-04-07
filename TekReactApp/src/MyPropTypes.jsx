import React,{Component} from "react";
import PropTypes from "prop-types";

class MyPropTypes extends React.Component{
    render(){
        return(
            <div>
                <h1>My PropTypes</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Valid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Array</td>
                            <td>{this.props.arrayArray}</td>
                            <td>{this.props.propArray ? "true" : "false"}</td>
                        </tr>
                        <tr>
                            <td>Boolean</td>
                            <td>{this.props.propBoolean}</td>
                            <td>{this.props.propBoolean ? "true" : "false"}</td>
                        </tr>
                        <tr>
                            <td>Function</td>
                            <td>{this.props.propFunc(5)}</td>
                            <td>{this.props.propFunc (5)? "true" : "false"}</td>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td>{this.props.propNumber}</td>
                            <td>{this.props.propNumber ? "true" : "false"}</td>
                        </tr>
                        <tr>
                            <td>String</td>
                            <td>{this.props.propString}</td>
                            <td>{this.props.propString ? "true" : "false"}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        );
    }
}
MyPropTypes.propTypes={
    propArray: PropTypes.array.isRequired,
    propBoolean: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
}
MyPropTypes.defaultProps={
    propArray: [1,2,3,4,5],
    propBoolean: true,
    propFunc: function(x){return x+5},
    propNumber: 1,
    propString: "React PropTypes",
}
export default MyPropTypes; 
