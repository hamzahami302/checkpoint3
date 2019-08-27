import React from "react";
import List from "./list";
class Container extends React.Component{
    render(){
        return (
            <>
        <h1> {this.props.cont} </h1>
        <List lis='11111'/>
        </>

        )
    }
}



export default Container;