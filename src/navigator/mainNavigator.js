import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings165282Navigator from '../features/Settings165282/navigator';
import UserProfile165275Navigator from '../features/UserProfile165275/navigator';
import Settings165274Navigator from '../features/Settings165274/navigator';
import Settings165272Navigator from '../features/Settings165272/navigator';
import SignIn2165270Navigator from '../features/SignIn2165270/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings165282: { screen: Settings165282Navigator },
UserProfile165275: { screen: UserProfile165275Navigator },
Settings165274: { screen: Settings165274Navigator },
Settings165272: { screen: Settings165272Navigator },
SignIn2165270: { screen: SignIn2165270Navigator },

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
