import * as React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

class BaseContentOptions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
       return (
           
           <div>FROM_BASE_PAGE
               <div>{this.props.header}</div>
               {this.props.component}
           </div>
       ) 
    }
}

export default BaseContentOptions;