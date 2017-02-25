import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { mapMove, createAFav, findUser, breadCrumbsNearUser, mapMarkerFocus, mapMarkerBlur } from 'Bread_Crumbs/src/controllers/actions/';

import { MapArea, CircleButton, GeoMessage } from 'Bread_Crumbs/src/views/components/';

// menu
import { HambergerStackMenu } from 'Bread_Crumbs/src/views/screens/';

const styles = {
  wrapper: {
    // position: 'relative',
  },

  statusBarBack: {
    height: 25,
    backgroundColor: 'rgba(26, 188, 156, 0.7)',
    flex: 1,
  },
};
class BreadCrumbMap extends Component {

  state = { Markers: [], lat: 0, lng: 0, onUser: true };

  componentWillMount() {
    this.props.breadCrumbsNearUser();

    navigator.geolocation.getCurrentPosition((geo) => {
      const { latitude, longitude } = geo.coords;
      this.setState({ lat: latitude, lng: longitude });
    });

    this.collectMapMarkers(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps : next set of props component will render
    //  this.props will still be the old props
    this.collectMapMarkers(nextProps);
  }

  // helper for data
  collectMapMarkers({ nearByCrumbs }) {
    const markers = _.map(nearByCrumbs, (crumb) => {
      const resolveAssetSource = require('resolveAssetSource');
      const imgSrc = resolveAssetSource(require('Bread_Crumbs/src/views/resources/bread_crumb_pin6x16.png'));

      return {
        latitude: crumb.lat,
        longitude: crumb.lng,
        title: crumb.title,
        subtitle: crumb.message,
        image: imgSrc,
        onFocus: () => {
          this.props.mapMarkerFocus(crumb);
        },
        onBlur: () => {
          this.props.mapMarkerBlur();
        },
      };
    });

    this.setState({ Markers: markers });
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

  breadCrumbDisplay() {
    let result;
    const {
      title,
      message,
      show,
      // discoverable,
      // lat,
      // lng,
      // createdAt,
      // userId,
    } = this.props.mapMarker;

    console.log(this.props.mapMarker);
    if (show) {
      result = (
        <GeoMessage
          title={ title }
          message={ message }
          onCloseCrumb={ () => this.props.mapMarkerBlur() }
          onAddCrumb={ () => {
            console.log('add to favs');
            this.props.createAFav(this.props.mapMarker);
            // this.props.createAFav({
            //   title,
            //   message,
            //   discoverable,
            //   lat,
            //   lng,
            //   createdAt,
            //   userId,
            // });

          }}
        />
      );
    } else {
      result = null;
    }
    return result;
  }

  renderMainMapButton() {
    let result;
    if (!this.props.mapChange.focusOnUser) {

      result = (
        <CircleButton
          onPress={ () => {
            this.props.findUser();
          }}
          text={ 'Back To You' }
        />
      );
    } else {
      result = (
        <CircleButton
          onPress={ () => {
            Actions.createBreadCrumb();
          }}
          text={ 'Drop Bread Crumb' }
        />
      );
    }
    return result;
  } // render main map button

  findARegion() {
    let result;
    const { latitude, longitude } = this.props.mapChange.marker;
    const { lat, lng } = this.state;

    if (latitude !== null && longitude !== null) {
      result = this.props.mapChange.marker;
    } else {
      result = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      };
    } // if
    return result;
  } // findARegion

  mapDragFinish() {
    // this.setState({ onUser: false });
  }

  render() {
    return (
      <View style={ [styles.wrapper] }>
        <View>
          <MapArea
            followUser={ this.props.mapChange.focusOnUser }
            goToMarker={ this.findARegion() }
            markerCollection={ this.state.Markers }
            onDragMap={ this.mapDragFinish.bind(this) }
          />
          <View style={ styles.statusBarBack } />

          <View>
            { this.renderMainMapButton() }
          </View>
        </View>

        { this.breadCrumbDisplay() }

        { this.menuDisplay() }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { mapChange } = state;
  const { menuState } = state.menu;
  const { mapMarker } = state;

  const nearByCrumbs = _.map(state.dbCrumbs, (val, uid) => {
    return { ...val, uid };
  });

  return {
    nearByCrumbs,
    mapChange,
    mapMarker,
    menuState,
  };
};

BreadCrumbMap = connect(mapStateToProps, { mapMove, createAFav, findUser, breadCrumbsNearUser, mapMarkerFocus, mapMarkerBlur })(BreadCrumbMap);
export { BreadCrumbMap };
