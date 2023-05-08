import React from 'react'
import TabNav from './components/TabNav'
import { NavigationContainer } from '@react-navigation/native'
import { PlayIcon, QuestionIcon } from 'native-base'
import { NativeBaseProvider } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function App() {
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

