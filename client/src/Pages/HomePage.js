import React, { Component } from 'react';
import { 
    Table,
  } from '../components'
  import columns from '../util/columns'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            stations: [],
        };
    }

    formattingNodes = (nodes) => {
    const nodesFormatted = [];
    nodes.forEach((item, index) => {
        nodesFormatted.push(
            {
                ...item,
                is_renting: item.is_renting ? 'Yes' : 'No',
                is_returning: item.is_returning ? 'Yes' : 'No',
                is_installed: item.is_installed ? 'Yes' : 'No',
                num_docks_available: item.num_docks_available === undefined ? 'N/A' : item.num_docks_available,
                id: index
            }
        )
    })
    this.setState({stations: nodesFormatted})
    }
    
    componentDidMount() {
    fetch("http://localhost:5000/api/v1.0/stations")
        .then(res => res.json())
        .then(
        ({data}) => {
            const { stations } = data;
            this.formattingNodes(stations);
            this.setState({
            isLoaded: true
            });
        },
        (error) => {
            this.setState({
            isLoaded: true,
            error,
            });
        }
        )
    }

    onClickRow = (stationSelected) => {
        const { station_id } = stationSelected;
        this.props.history.push({ pathname: `/station/${station_id}`, data: stationSelected })
    }

    render() {
        const {
            error, 
            isLoaded, 
            stations,
        } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Table data={stations} columns={columns} onClick={this.onClickRow}/>
            );
        }
    }
}

export default Home;