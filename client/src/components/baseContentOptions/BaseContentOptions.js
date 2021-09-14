// import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import "./BaseContentOptions.style.scss";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     flexBasis: '33.33%',
//     flexShrink: 0,
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function BaseContentOptions(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div className={classes.root + " basic-box-option "}>
//       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header" className="box-header">
//           <Typography className={classes.heading + " title "}>{props.header}</Typography>
//           <Typography className={classes.secondaryHeading}> {props.subTitle} Click to add description</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <div>
//             <div className="box-option-content">
//                 {props.component}
//             </div>
//           </div>
//         </AccordionDetails>
//       </Accordion>
    
//     </div>
//   );
// }



import * as React from "react";
import "./BaseContentOptions.style.scss";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

class BaseContentOptions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          componentDispalyed: false
        }

        this.init();
    }
    render() {
       return (
           <div className="basic-box-option">

               <div className="box-header" onClick={() => this.toggleComonentContent()}>
                  <span className="icon">{this.props.icon}</span>
                  <span className="title">{this.props.header}</span>
                  <div className="toggle-icon">
                    {
                      this.state.componentDispalyed ?  <ChevronLeftIcon/> : <ChevronRightIcon/>
                    }
                  </div>
                </div>
                <div className="box-option-content" className={this.state.componentDispalyed ? "": "hide-content"}>
                    {this.props.component}
               </div>
           </div>
       ) 
    }

    init() {
      if (this.props.name === "addLayer") {
        this.state.componentDispalyed = true;
      }
    }

    toggleComonentContent() {
      this.setState({componentDispalyed: !this.state.componentDispalyed})
    }
}

export default BaseContentOptions;