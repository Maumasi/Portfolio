import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

// screens
import {
  LogInScreen,
  LoadingScreen,
  MapLoadingScreen,
  CreateBreadCrumb,
  EditBreadCrumb,
  BreadCrumbMap,
  MyBreadCrumbs,
  MyFavs,
  ProximityCrumbs,
  DeleteUserBreadCrumbPopUp,
} from 'Bread_Crumbs/src/views/screens/';

// test components
import { MapArea, HambergerStackIcon, ConfirmPopUp } from 'Bread_Crumbs/src/views/components/';

const styles = {
  routerNavigationBarStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: 'rgba(0, 0, 0, 0)',
  },

  routerSceneStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },

  mapBackButton: {
    height: 20,
    width: 60,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)',
  },
};


class AppRouter extends Component {

//   <Scene key={ 'userLogin' } component={ LogInScreen } title={ ' ' } initial />
  render() {
    return (
      <Router
        sceneStyle={ styles.routerSceneStyle }
        navigationBarStyle={ styles.routerNavigationBarStyle }
        >
          <Scene key={ 'login' } initial >
            <Scene
              key={ 'userLogin' }
              component={ LogInScreen }
              title={ ' ' }
              titleStyle={{ color: 'rgba(0, 0, 0, 0)' }}
              initial
            />
          </Scene>


          <Scene key={ 'mapActivities' } >
            <Scene
              key={ 'mapArea' }
              component={ BreadCrumbMap }
              renderRightButton={ () => <HambergerStackIcon /> }
              title={ ' ' }
              titleStyle={{ color: 'rgba(0, 0, 0, 0)' }}
              initial
            />

            <Scene
              key={ 'createBreadCrumb' }
              component={ CreateBreadCrumb }
              backTitle={ 'Map' }
              backButtonTextStyle={ styles.mapBackButton }
              title={ ' ' }
              titleStyle={{ color: 'rgba(0, 0, 0, 0)' }}
              renderRightButton={ () => <HambergerStackIcon /> }
            />

            <Scene
              key={ 'proximityCrumbs' }
              component={ ProximityCrumbs }
              title={ ' ' }
              titleStyle={{ color: 'rgba(0, 0, 0, 0)' }}
              renderRightButton={ () => <HambergerStackIcon /> }
            />

            <Scene
              key={ 'favCrumbs' }
              component={ MyFavs }
              title={ ' ' }
              titleStyle={{ color: 'rgba(0, 0, 0, 0)' }}
              renderRightButton={ () => <HambergerStackIcon /> }
            />

            <Scene
              key={ 'myBreadCrumbs' }
              component={ MyBreadCrumbs }
              title={ ' ' }
              titleStyle={{ color: 'rgba(0, 0, 0, 0)' }}
              renderRightButton={ () => <HambergerStackIcon /> }
            />

            <Scene
              key={ 'editBreadCrumb' }
              component={ EditBreadCrumb }
              title={ ' ' }
              titleStyle={{ color: 'rgba(0, 0, 0, 0)' }}
              renderRightButton={ () => <HambergerStackIcon /> }
            />
          </Scene>

      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const {
  auth,
  menu,
  breadCrumbs,
  mapChange,
  myCrumbs,
} = state;
  return {
    auth,
    menu,
    breadCrumbs,
    mapChange,
    myCrumbs,
  };
};

AppRouter = connect(mapStateToProps, null)(AppRouter);
export default AppRouter;
