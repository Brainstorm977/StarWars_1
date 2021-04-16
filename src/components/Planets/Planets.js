import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

function Planets({planets}) {
    return (
        <>
            <h1>Planets</h1>
            <Grid columns={4}>
                {planets.map((planet, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{planet.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Climate</strong>
                                        <p>{planet.climate}</p>
                                        <strong>Diameter</strong>
                                        <p>{planet.diameter}</p>
                                        <strong>Population</strong>
                                        <p>{planet.population}</p>
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

export default Planets;