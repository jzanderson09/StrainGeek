import React, { Component } from 'react';
import axios from 'axios';
import Strain from './Strain';
import Button from 'react-bootstrap/Button';
import '../sass/Strains.scss';

class Strains extends Component {
    constructor() {
        super();
        this.state = {
            strainData: [],
            firstStrain: 0,
            lastStrain: 8
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        // Initializes array for strain object with name added:
        let combinedArray = [];
        axios
            .get('http://strainapi.evanbusse.com/oNKr3rg/strains/search/all')
            .then(res => {
                // Names of strains in order:
                const objKeys = Object.keys(res.data);

                // strain information as objects, in order:
                const objValues = Object.values(res.data);

                
                // Traditional For loop to combine name with strainObj at respective index:
                for (var i = 0; i < objValues.length; i++) {
                    const currentStrainObj = {
                        ...objValues[i],
                        name: objKeys[i]
                    };
                    combinedArray[i] = currentStrainObj;
                    this.setState({ strainData: combinedArray });
                }
            })
            .catch(err => {
                window.alert('Error retrieving strains! Check console for more details.');
                console.log(err);
            });
    }

    prevPage = () => {
        const startPoint = this.state.firstStrain;
        this.setState({ firstStrain: startPoint - 8, lastStrain: startPoint });
    }

    nextPage = () => {
        const endPoint = this.state.lastStrain;
        this.setState({ firstStrain: endPoint, lastStrain: endPoint + 8 });
    }

    render() {
        if (this.state.firstStrain === 0) {
            return (
                <div className='Strains'>
                    <h1>Strains!</h1>
                        {this.state.strainData.slice(this.state.firstStrain, this.state.lastStrain).map(strain => <Strain key={strain.id} strain={strain} />)}
                        <div className='button-wrapper'>
                            <Button 
                                className='strain-buttons' 
                                variant='light'
                                onClick={this.nextPage}
                            >Next</Button>
                        </div>
                </div>
            );
        }
        else {
            return (
                <div className='Strains'>
                    <h1>Strains!</h1>
                        {this.state.strainData.slice(this.state.firstStrain, this.state.lastStrain).map(strain => <Strain key={strain.id} strain={strain} />)}
                        <div className='button-wrapper'>
                            <Button 
                                className='strain-buttons' 
                                variant='light'
                                onClick={this.prevPage}
                            >Previous</Button>
                            <Button 
                                className='strain-buttons' 
                                variant='light'
                                onClick={this.nextPage}
                            >Next</Button>
                        </div>
                </div>
            );
        }
    }
};

export default Strains;