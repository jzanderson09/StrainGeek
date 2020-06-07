import React, { useState } from 'react';
import axios from 'axios';
import { Accordion, Button, Card } from 'react-bootstrap';
import '../sass/Strain.scss';

//Strain Descriptions: strainapi.evanbusse.com/oNKr3rg/strains/data/desc/STRAIN_ID


const Strain = ({ strain }) => {
    const [info, setInfo] = useState('');

    const fetchStrainInfo = e => {
        e.stopPropagation();
        const {id} = strain;
        axios
            .get(`http://strainapi.evanbusse.com/oNKr3rg/strains/data/desc/${id}`)
            .then(res => {
                setInfo(res.data.desc);
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    return (
        <div className='Strain'>
            <Accordion>
                <Card
                    className='strain-card'
                    bg='light'
                    text='dark'
                    border='dark'
                    onClick={fetchStrainInfo}
                >
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="success" eventKey="0">
                        <p>{strain.name}</p>
                        <p>Type: {strain.race}</p>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.body>
                            <p>Description:</p>
                            <p>{info}</p>
                            <p>Flavors:</p>
                            <p>{strain.flavors.map(flavor => <p>flavor</p>)}</p>
                            <h1>+</h1>
                            {strain.effects.positive.map(effect => <p>{effect}</p>)}
                            <h1>-</h1>
                            {strain.effects.negative.map(effect => <p>{effect}</p>)}
                            <p>Medical:</p>
                            {strain.effects.medical.map(effect => <p>{effect}</p>)}
                        </Card.body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>  
    );
};


// {strain.effects.medical.map(effect => <p>{effect}</p>)}

export default Strain;