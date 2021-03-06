import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import * as H from 'history';

interface IProps {
  location: H.Location;
}

const NoMatch: React.FC<IProps> = ({location}) => {
  return (
    <Container>
      <h3>
        404 - Sorry, there was no match for <code>{location.pathname}</code>.
        <br />
        Click <Link to={'/'}>here</Link> to go back home.
      </h3>
    </Container>
  );
};

export default NoMatch;
