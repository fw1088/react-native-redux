import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,FlatList,RefreshControl,TouchableOpacity} from 'react-native';
import { getProData} from './store/Main/action';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class MainList extends Component {
  static propTypes = {
    proData: PropTypes.object.isRequired
  }
 
  componentDidMount(){
      this.props.getProData([]);
  }

  _onEndReached(){
    this.props.getProData(this.props.proData.dataList);
  }

  //列表的头部
  ListHeaderComponent() {
      return (
          <View style={styles.header}>
          <Text>福利</Text> 
          </View>
      )
  }

  //列表的每一行
  renderItem({item,index}) {
    return (
      <TouchableOpacity>
        <View style={styles.flatview}>
          <View style={styles.title}>
          <Text>
          {item.createdAt}
          </Text> 
          </View>
           <Image style={styles.img}
              source={{uri: item.url}}
              resizeMode="contain"/>
          </View>
          </TouchableOpacity>
      )
  }
  //绘制列表的分割线
  renderItemSeparator(){
      
  }

  //点击列表点击每一行
  clickItem(item,index) {
      alert(index)
  }



  render() {
    return (
      <View style={styles.container} >
          <FlatList
          data={this.props.proData.dataList}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={this.ListHeaderComponent.bind(this)}
          renderItem={this.renderItem.bind(this)}
          onEndReached={this._onEndReached.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    flatview: {
      alignItems:'center',
      flexDirection:'row',
      justifyContent: 'center',
      borderRadius: 2,
    },
    name: {
      fontFamily: 'Verdana',
      fontSize: 18
    },
    email: {
      color: 'red'
    },
    img:{
      width:200,
      height:150
    },
    header: {
      justifyContent:'center',
      alignItems: 'center'
    },
    title:{
      justifyContent:'center',
      alignItems: 'center',
      paddingLeft:20
    }
  });

  export default connect(state => ({
    proData: state.proData,
  }), {
    getProData, 
  })(MainList);