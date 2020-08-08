import React from "react";

import { Card, TextField, Button } from "@material-ui/core";
import "./ContactCard.css";

function ContactCard() {
  return (
    <Card variant="outlined" className="contactContainer">
      <div className="mainSection">
        <h1 className="mainTitle">Get in touch</h1>
        <p className="mainDetails">
          Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo
          risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit
          libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
          Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
          <br />
          <br />
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam
          porta sem malesuada magna mollis euismod. Etiam porta sem malesuada
          magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem
          lacinia quam venenatis vestibulum.
        </p>
      </div>
      <div className="formSection">
        <form noValidate autoComplete="off">
          <TextField
            className="textField"
            id="outlined-basic"
            label="Enter your name"
            variant="outlined"
          />
        </form>
        <form noValidate autoComplete="off">
          <TextField
            className="textField"
            id="outlined-basic"
            label="Enter your email address"
            variant="outlined"
          />
        </form>
        <form noValidate autoComplete="off">
          <TextField
            className="textField"
            id="outlined-textarea"
            label="Enter your message"
            multiline
            variant="outlined"
          />
        </form>

        <Button className="submit" variant="contained">
          Submit
        </Button>
      </div>
    </Card>
  );
}

export default ContactCard;
