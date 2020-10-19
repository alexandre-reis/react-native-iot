import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './src/pages/HomePage';

const AppNavigator = createStackNavigator({
  Main: {
    screen: HomePage,
    navigationOptions: {
      title: 'Dispositivos sincronizados',
      headerTitleStyle: {
        textAlign: 'center',
        fontSize: 30,
      },
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
