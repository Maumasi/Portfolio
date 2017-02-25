
import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const styles = {
  loadingSpiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const LoadingSpinner = (props) => {
  const { size, color, style } = props;

  return (
    <View style={ [styles.loadingSpiner, style] }>
      <ActivityIndicator
        size={ size || 'large' }
        color={ color || '#FFF' }
      />
    </View>
  );
};

export { LoadingSpinner };
