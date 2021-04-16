import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Menu inverted>
            <Container>
                <Link to='/'>
                    <Menu.Item name="Star Wars API" />
                </Link>
                <Link to='/people'>
                    <Menu.Item name="People" />
                </Link>
                <Link to='/planets'>
                    <Menu.Item name="Planets" />
                </Link>
                <Link to='/species'>
                    <Menu.Item name="Species" />
                </Link>
                <Link to='/starships'>
                    <Menu.Item name="Starships" />
                </Link>
                <Link to='/vehicles'>
                    <Menu.Item name="Vehicles" />
                </Link>
            </Container>
        </Menu>
    );
}

export default Navbar;