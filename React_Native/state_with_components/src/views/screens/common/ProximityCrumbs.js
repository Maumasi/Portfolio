
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { breadCrumbsNearUser, mapMove } from 'Bread_Crumbs/src/controllers/actions/';

// menu
import { HambergerStackMenu } from 'Bread_Crumbs/src/views/screens/';

// components
import { NearByCrumbListItem, Header } from 'Bread_Crumbs/src/views/components/';

const styles = {
  theme: {
    backgroundColor: 'rgb(26, 188, 156)',
    flex: 1,
  },

  headerTheme: {
    paddingTop: 60,
    paddingBottom: 5,
    marginBottom: 5,
  },

  textTitle: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginTop: 0,
  },
};

class ProximityCrumbs extends Component {

  componentWillMount() {
    this.props.breadCrumbsNearUser();

    this.buildDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps : next set of props component will render
    //  this.props will still be the old props
    this.buildDataSource(nextProps);
  }

  // helper for data
  buildDataSource({ nearByCrumbs }) {
    const crumbs = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.dataSource = crumbs.cloneWithRows(nearByCrumbs);
  }

  renderRow(nearByCrumbs) {
    return (
      <NearByCrumbListItem
        breadCrumb={ nearByCrumbs }
        onRowPress={ () => {
          const marker = {
            lat: nearByCrumbs.lat,
            lng: nearByCrumbs.lng,
            delta: 0.03,
            focus: true,
          };

          // bring user to a selected map marker
          Actions.mapArea({ type: 'reset' });
          this.props.mapMove(marker);
        }}
      />);
  }

  menuDisplay() {
    let result;

    if (this.props.menuState) {
      result = <HambergerStackMenu />;
    } else {
      result = null;
    }
    return result;
  }

  render() {
    return (
      <View style={ [styles.theme] }>
        <Header
          theme={ [styles.headerTheme] }
          textTheme={ styles.textTitle }
          title={ 'Bread Crumbs Around You' } />

        <ListView
        enableEmptySections
        dataSource={ this.dataSource }
        renderRow={ this.renderRow.bind(this) }
        />

        { this.menuDisplay() }
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  const { menuState } = state.menu;

  const nearByCrumbs = _.map(state.dbCrumbs, (val, uid) => {
    return { ...val, uid };
  });

  return { nearByCrumbs, menuState };
};


ProximityCrumbs = connect(mapStateToProps, { breadCrumbsNearUser, mapMove })(ProximityCrumbs);
export { ProximityCrumbs };
