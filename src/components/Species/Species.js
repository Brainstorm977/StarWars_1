import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

function Species({species, people, planets}) {
    return (
        <>
            <h1>Species</h1>
            <Grid columns={4}>
                {species.map((species, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{species.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Classification</strong>
                                        <p>{species.classification}</p>
                                        <strong>Language</strong>
                                        <p>{species.language}</p>
                                        <strong>Average height</strong>
                                        <p>{species.average_height}</p>
                                        <strong>Average lifespan</strong>
                                        <p>{species.average_lifespan}</p>
                                        <strong>Homeworld</strong>
                                        {
                                            planets.map((planet, i) => {
                                                return (
                                                    
                                                    planet.url === species.homeworld ? <p key={i}>{planet.name}</p> : null
                                                )
                                            })
                                        }
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

export default Species;