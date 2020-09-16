import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen410841Navigator from '../features/BlankScreen410841/navigator';
import BlankScreen010840Navigator from '../features/BlankScreen010840/navigator';
import BlankScreen110839Navigator from '../features/BlankScreen110839/navigator';
import BlankScreen110837Navigator from '../features/BlankScreen110837/navigator';
import BlankScreen010835Navigator from '../features/BlankScreen010835/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen410841: { screen: BlankScreen410841Navigator },
BlankScreen010840: { screen: BlankScreen010840Navigator },
BlankScreen110839: { screen: BlankScreen110839Navigator },
BlankScreen110837: { screen: BlankScreen110837Navigator },
BlankScreen010835: { screen: BlankScreen010835Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
