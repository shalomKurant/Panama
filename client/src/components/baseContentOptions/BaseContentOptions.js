import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./BaseContentOptions.style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function BaseContentOptions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root + " basic-box-option "}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header" className="box-header">
          <Typography className={classes.heading + " title "}>{props.header}</Typography>
          <Typography className={classes.secondaryHeading}> {props.subTitle} Click to add description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          {/* <div className="basic-box-option">
               <div className="box-header">
                   <span className="tile">{props.header}</span>
                </div> */}
                <div className="box-option-content">
                    {props.component}
               </div>
           {/* </div> */}
          </div>
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
}



// import * as React from "react";
// import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
// import "./BaseContentOptions.style.scss";
// import Card from '@material-ui/core/Card';
// import { CardContent } from '@material-ui/core';

// class BaseContentOptions extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }
//     render() {
//        return (
        //    <div className="basic-box-option">
        //        <div className="box-header">
        //            <span className="tile">{this.props.header}</span>
        //         </div>
        //         <div className="box-option-content">
        //             {this.props.component}
        //        </div>
        //    </div>
//        ) 
//     }
// }

// export default BaseContentOptions;