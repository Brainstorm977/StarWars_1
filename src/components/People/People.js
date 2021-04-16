import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

function People({people, planets}) {
    return (
        <>
            <h1>People</h1>
            <Grid columns={4}>
                {people.map((people, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Gender</strong>
                                        <p>{people.gender}</p>
                                        <strong>Height</strong>
                                        <p>{people.height}</p>
                                        <strong>Mass</strong>
                                        <p>{people.mass}</p>
                                        <strong>Hair Color</strong>
                                        <p>{people.hair_color}</p>
                                        <strong>Homeworld</strong>
                                        {
                                            planets.map((planet, i) => {
                                                return (
                                                    planet.url === people.homeworld  ? <p key={i}>{planet.name}</p> : null
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

export default People;