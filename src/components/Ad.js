import React, {Component} from 'react';
import { Card, Button } from 'react-bootstrap';


export default class Ad extends Component {
    render() {
        const {title, body_type, category, gearbox, pictures, price, year, id} = this.props;
        return(
            <Card style={{ width: '33%',float: 'left' }} key={id}>
                <Card.Img variant="top" src={pictures[1]} />
                <Card.Body>
                    <Card.Title>{ title }</Card.Title>
                    <Card.Text>
                        <p>{price}</p>
                        <p>{body_type}</p>
                        <p>{category}</p>
                        <p>{gearbox}</p>
                        <p>{/*pictures */}</p>
                        <p>{year}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{this.props.setFavourit(id)}}>В избранное</Button>
                </Card.Body>
            </Card>

        )
    }
}