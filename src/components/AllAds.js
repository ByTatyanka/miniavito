import React, {Component} from 'react';
import axios from 'axios';
import Ad from './Ad';


export default class AllAds extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ad: [],
            err: false,
            favorit: []
        };

    }

    setFavorit = (id) => {

        const {favorit} = this.state
        if (favorit.includes(id)){

            favorit.splice(favorit.indexOf(id), 1);
            this.setState({favorit});
            return
        }

        this.setState({favorit: [...favorit, ...id]});
        return
    }

    componentDidMount() {
        axios.get('http://avito.dump.academy/products')
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    this.setState({ad: response.data.data})
                } else {
                    this.setState({err: true})
                }
            })
    };

    render() {
        console.log(this.state)
        if (!this.state.ad.length) {
            return null;
        }

        const {selectValue, forPrice, toPrice} = this.props

        const filterProductByCat = this.state.ad.filter((item) => {
            if (!selectValue) {
                return true
            }
            return item.category === selectValue
        });

        const filterProductByPrice = filterProductByCat.filter((item) => {

            if (!forPrice && !toPrice){
                return true
            }
            if (!forPrice && toPrice){
                return item.price <= toPrice
            }
            if (forPrice && !toPrice){
                return item.price >= forPrice
            }
            if (item.price >= forPrice && item.price <= toPrice ){
              return true
            }
        })



        const ads = filterProductByPrice.map((item, index) => {
            return <Ad key={item.id} {...item} setFavorit={this.setFavorit}/>

        });




        return (
            <>
                {ads}
            </>
        )
    }

}