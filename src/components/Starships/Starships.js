import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

function Starships({starships}) {
    return (
        <>
            <h1>Starships</h1>
            <Grid columns={4}>
                {starships.map((starship, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{starship.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Model</strong>
                                        <p>{starship.model}</p>
                                        <strong>Manufacturer</strong>
                                        <p>{starship.manufacturer}</p>
                                        <strong>Passengers</strong>
                                        <p>{starship.passengers}</p>
                                        <strong>Class</strong>
                                        <p>{starship.starship_class}</p>
                                        
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    );
}

export default Starships;