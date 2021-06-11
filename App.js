import React from 'react'
import{StyleSheet, Text, View } from 'react-native'
import{createAppContainer} from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import bookTransactionScreen from './screens/bookTransactionScreen'
import searchScreen from './screens/searchScreen'

export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
  const tabNavigator= createBottomTabNavigator({
      Transaction:{screen:TransactionScreen},
      Search:{screen:SearchScreen}
  })
  const AppContainer=createAppContainer(tabNavigator)

  const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        
    }  
  })
