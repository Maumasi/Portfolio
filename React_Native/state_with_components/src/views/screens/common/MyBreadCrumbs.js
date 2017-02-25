
import _ from 'lodash';
import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { myBreadCrumbs, mapMove } from 'Bread_Crumbs/src/controllers/actions/';

// menu
import { HambergerStackMenu } from 'Bread_Crumbs/src/views/screens/';

// components
import { UserBreadCrumbListItem, Header } from 'Bread_Crumbs/src/views/components/';

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
class MyBreadCrumbs extends Component {

  componentWillMount() {
    this.props.myBreadCrumbs();

    this.buildDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps : next set of props component will render
    //  this.props will still be the old props
    this.buildDataSource(nextProps);
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

  // helper for data
  buildDataSource({ myCrumbs, mapMove }) {
    const crumbs = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.dataSource = crumbs.cloneWithRows(myCrumbs);
  }

  renderRow(myCrumbs) {
    return (
      <UserBreadCrumbListItem
        breadCrumb={ myCrumbs }
        onRowPress={ () => {
          const marker = {
            lat: myCrumbs.lat,
            lng: myCrumbs.lng,
            delta: 0.03,
            focus: true,
          };

          // bring user to a selected map marker
          Actions.mapArea({ type: 'reset' });
          this.props.mapMove(marker);
        }}
      />);
  }

  render() {
    return (
      <View style={ [styles.theme] }>
        <Header
          theme={ [styles.headerTheme] }
          textTheme={ styles.textTitle }
          title={ 'My Bread Crumbs' } />

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
  const { mapChange } = state;

  const myCrumbs = _.map(state.dbCrumbs, (val, uid) => {
    return { ...val, uid };
  });

  return { myCrumbs, menuState, mapChange };
};


MyBreadCrumbs = connect(mapStateToProps, { myBreadCrumbs, mapMove })(MyBreadCrumbs);
export { MyBreadCrumbs };
