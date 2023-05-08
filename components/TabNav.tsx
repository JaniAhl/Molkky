import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Rules from './Rules'
import FrontPage from './FrontPage'
import { styles } from './StyleSheet'

export default function TabNav() {


    const Tab = createBottomTabNavigator();

    const screenOptions = ({ route }: {route:any}) => ({
        tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number}) => {
          let iconName: any
      
          if (route.name === 'Etusivu') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Säännöt') {
            iconName = focused ? 'help-circle' : 'help-circle';
          }
      
          return <Feather name={iconName} size={24} color={color} />
        },

        headerStyle: {
            backgroundColor: '#009933',
            borderBottomColor: 'black',
            borderBottomWidth: 2,
        }, 

        headerTintColor: 'white',

        headerTitleStyle: {
            fontSize: 27,
            fontFamily: 'Optima-ExtraBlack',
            color: '#ffffff'
        },

        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#bfbfbf',

        tabBarStyle: {
            backgroundColor: '#009933',
            borderTopColor: 'black',
            borderTopWidth: 2,
        },

        tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Optima-ExtraBlack',
        },
        
      });

    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name='Etusivu'
                component={FrontPage}
              />
            <Tab.Screen 
                name='Säännöt' 
                component={Rules}
                />
        </Tab.Navigator>
    )   
}

