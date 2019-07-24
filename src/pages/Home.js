import React, { Component } from 'react';
import Select from './../components/Select';


export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            currencyData:[],
            value: this.props.getCcy
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    getCcy = () => {

        const ccy = [];
        
        this.state.currencyData.forEach((item)=>{
            console.log(item)
            ccy.push(item.ccy)

        })

        console.log(ccy)
    }



    componentDidMount(){
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(function(response){
            // console.log(response)
            return response.json();
        })
        .then((response)=>{
            console.log(response)
            this.setState({currencyData:response})
            // return response.json();
        })
        .catch(
            (error) => console.log(error)
        )
    }

    render() {

        this.getCcy();

        console.log(this.state)

        return (
            <div className="main">
                <div className="row">
                    <Select />
                    <Select />
                </div>
            </div>
        )
    }
}
