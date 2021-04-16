import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

function Vehicles({vehicles}) {
    return (
        <>
            <h1>Vehicles</h1>
            <Grid columns={4}>
                {vehicles.map((vehicle, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{vehicle.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Model</strong>
                                        <p>{vehicle.model}</p>
                                        <strong>Manufacturer</strong>
                                        <p>{vehicle.manufacturer}</p>
                                        <strong>Passengers</strong>
                                        <p>{vehicle.passengers}</p>
                                        <strong>Class</strong>
                                        <p>{vehicle.vehicle_class}</p>
                                        
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

export default Vehicles;