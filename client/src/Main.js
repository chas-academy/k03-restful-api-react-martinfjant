import React, { Component } from 'react'
// import  Rx from "rxjs";
import { ajax } from 'rxjs/ajax'
import { map, filter, scan } from 'rxjs/operators'
import { Button, Heading } from 'react-bulma-components'

import Item from './Item.jsx'

import 'react-bulma-components/dist/react-bulma-components.min.css'

// Create an Observable that will create an AJAX request
const items = ajax('http://localhost:3000/item')
// Subscribe to create the request

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { items: [] }
    }

    componentDidMount() {
        this.items = items
            .pipe(
                // Accumulate our items in an array
                scan((items, item) => [items].concat(item), [])
            )
            // And render whenever we get a new message
            .subscribe(items =>
                items[1].response.map(items =>
                    this.setState({
                        items: [...this.state.items.concat(items.name + ' ')],
                    })
                )
            )
    }

    render() {
        return (
            <div>
                <Heading>hej</Heading>
                <Item />
                {this.state.items}
                <Button color="primary">My Bulma button</Button>
            </div>
        )
    }
}

export default Main
