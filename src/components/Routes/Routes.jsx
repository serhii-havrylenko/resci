// @flow

import { Location } from 'history';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { ROUTES } from '../../constants';
import Layout from '../Layout';
import { FAQ, NotFound, Songs, Playlists, PlaylistsAdd } from '../Pages';

type RoutesProps = {
  routing?: { location?: Location },
};

@inject('routing')
@observer
class Routes extends React.Component<RoutesProps> {
  static defaultProps = {
    routing: {
      location: undefined,
    },
  };

  render() {
    const {
      // $FlowIgnore
      routing: { location },
    } = this.props;

    return (
      <Layout>
        <Switch location={location}>
          <Route exact path="/" component={Songs} />
          <Route path={ROUTES.SONGS} component={Songs} />
          <Route path={ROUTES.PLAYLISTS} component={Playlists} />
          <Route path={ROUTES.FAQ} component={FAQ} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Route path={ROUTES.PLAYLISTS_ADD} component={PlaylistsAdd} />
      </Layout>
    );
  }
}
export default Routes;
