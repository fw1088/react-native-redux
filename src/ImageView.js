import React, {Component} from 'react';
import {Image,StyleSheet} from 'react-native';
export default class ImageView extends Component {
  render() {
    const { params } = this.props.navigation.state
    console.log(params.url)
    return (
      <Image style={styles.pic}
            source={{uri: params.url}}
      resizeMode="contain" />
    )
  }
}
const styles = StyleSheet.create({
  pic:{
    flex:1,
    height:150
  }
});