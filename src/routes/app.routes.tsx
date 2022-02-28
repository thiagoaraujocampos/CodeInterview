import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home'
import { AppointmentCreate } from '../screens/AppointmentCreate'
import { AppointmentDetails } from '../screens/AppointmentDetails'

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return(
    <Navigator
      screenOptions={{
        headerShown: false,  
        cardStyle: {
          backgroundColor: '#FAFAFA'
        }
      }}
    >
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
      <Screen 
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
    </Navigator>
  )
}