import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName='home'
      screenOptions={{
        tabBarStyle: Platform.OS === 'ios' && {
          backgroundColor: '#040D12',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#872341',
        headerShown: false,
      }}
      tabBar={(props) =>
        Platform.OS === 'ios' ? (
          <BlurView
            style={{
              position: 'absolute',
              backgroundColor: '1F1D36',
              bottom: 0,
              left: 0,
              right: 0,
            }}
            intensity={100}
          >
            <BottomTabBar {...props} />
          </BlurView>
        ) : (
          <BottomTabBar {...props} />
        )
      }
    >
      <Tabs.Screen
        name='home'
        options={{
          href: '/home',
          title: '',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
                backgroundColor: 'transparent',
              }}
            >
              <Foundation name='home' size={24} color={color} />
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 10,
                  opacity: 0.5,
                  color: 'white',
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='movies'
        options={{
          title: '',
          headerShown: true,
          href: {
            pathname: '/movies',
          },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
                backgroundColor: 'transparent',
              }}
            >
              <MaterialIcons name='movie' size={24} color={color} />
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 10,
                  opacity: 0.5,
                  color: 'white',
                }}
              >
                Movies
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='tv'
        options={{
          title: '',
          headerShown: true,
          href: {
            pathname: '/tv',
          },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
                backgroundColor: 'transparent',
              }}
            >
              <Ionicons name='tv' size={24} color={color} />
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 10,
                  opacity: 0.5,
                  color: 'white',
                }}
              >
                Tv
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
