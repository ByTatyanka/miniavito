import React, {Component} from 'react';
import AllAds from './AllAds';
import {Col, Container, Form, Row, FormControl, InputGroup } from 'react-bootstrap';

export default class Filter extends Component {
    constructor (props) {
        super(props)
        this.state ={
            selectValue: null,
            forPrice: 0,
            toPrice: 0
        }
    }

    setSelectValue(value) {
        if (value === "Выбирете категорию"){
            value = null
        }
        this.setState({selectValue: value})
}
    setForPrice (value){
        this.setState({forPrice: value})
    }
    setToPrice (value){
        this.setState({toPrice: value})
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col xs={3}>
                        <Form.Label>Категория товаров</Form.Label>
                        <Form.Control as="select" onChange={(e) => {this.setSelectValue(e.target.value)}}>
                            <option>Выбирете категорию</option>
                            <option value={'immovable'}>недвижимость</option>
                            <option value={'cameras'}>фотоаппараты</option>
                            <option value={'auto'}>автомобили</option>
                            <option value={'laptops'}>ноутбуки</option>
                        </Form.Control>

                    </Col>
                    <Col xs={3}>
                        <Row>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>C</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Amount (to the nearest dollar)" onChange={(e) => {this.setForPrice(e.target.value)}}/>
                                <InputGroup.Append>
                                    <InputGroup.Text>руб.</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>До</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Amount (to the nearest dollar)" onChange={(e) => {this.setToPrice(e.target.value)}}/>
                                <InputGroup.Append>
                                    <InputGroup.Text>руб.</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <AllAds selectValue={this.state.selectValue} forPrice={this.state.forPrice} toPrice={this.state.toPrice}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}