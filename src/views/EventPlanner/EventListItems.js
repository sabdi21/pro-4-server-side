
import React from "react";
import axios from 'axios'

// reactstrap components
import { CardBody, Card, Button} from "reactstrap";

class EventListItems extends React.Component {
    

    handleDelete = (e) => {
        e.preventDefault()

        let token = localStorage.getItem('mernToken')
        console.log('delete button was clicked', token)
        console.log('result', this.props.result)
        let eventId = this.props.result._id
        console.log('id', eventId)
        axios.delete(`http://localhost:3000/event/${eventId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            this.props.getData()
            // this.props.result.removeItem()
            console.log(response)

        })
        .catch(err => {
            console.log('ERROR', err)
        })
    }

  render() {
    console.log(this.props.result)
    return ( 
      <div>
      <Card className="shadow">
      
        <CardBody className="event-cards">
            <h2>Event: {this.props.result.eventname}</h2>
            <p>Date/Time: {this.props.result.date} at {this.props.result.time}</p>
            <p>Street: {this.props.result.location}, Seattle, WA</p>
            <p>Child(ren): {this.props.result.child}</p>
            <p>Info: {this.props.result.description}</p>
                <Button
                      className="my-4"
                      color="primary"
                      type="submit"
                      onClick={this.handleDelete}
                    > Delete Event </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default EventListItems;
