import { DateTimePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from '@date-io/moment';
import React from "react";
import orange from "@material-ui/core/colors/orange";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';
import grey from "@material-ui/core/colors/grey";
import { withStyles } from '@material-ui/core/styles';

const materialTheme = createMuiTheme({
  palette: {
      primary: orange,
      secondary: grey
  }
});

const styles = theme => ({
    input: {
        color: "#E6B447",
        float: 'left'
    }
});

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          selectedDate: Date(),
          getDate: this.props.getDate
        }
    }

    handleDateChange = (date) => {
      this.setState({selectedDate: date},
        ()=>{this.state.getDate(date)}
      );
    }

    render() {
        const { classes } = this.props;
        return (
          <ThemeProvider theme={materialTheme} >
          <MuiPickersUtilsProvider utils={MomentUtils} >
            <div className="pickers">
              <DateTimePicker 
                              onChange={this.handleDateChange}
                              ampm={false}
                              disablePast={true}
                              invalidDateMessage={"Invalid date selected"}
                              minDateMessage={"Selected date cannot be in the past"}
                              keyboard={false}
                              cancelLabel={"Cancel"}
                              format={"DD.MM.YYYY HH:mm"}
                              showTodayButton={true}
                              todayLabel={"Today"}
                              InputProps={{ className: classes.input }}
              />
            </div>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
    }
}

export default withStyles(styles)(DatePicker);