import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from './src/context/ThemeContext';
import StackNavigator from './src/navigation/StackNavigator';
import OnboardingScreen from './src/components/Onboarding';
import LoadingScreen from './src/components/LoadingScreen';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showOnboarding, setShowOnboarding] = useState(false);

    useEffect(() => {
        checkOnboardingStatus();
    }, []);

    const checkOnboardingStatus = async () => {
        try {
            // Add a minimum loading time for better UX
            const [hasSeenOnboarding] = await Promise.all([
                AsyncStorage.getItem('hasSeenOnboarding'),
                new Promise(resolve => setTimeout(resolve, 1500)) // Minimum 1.5s loading
            ]);
            
            if (hasSeenOnboarding === null) {
                setShowOnboarding(true);
            }
        } catch (error) {
            console.log('Error checking onboarding status:', error);
            // If there's an error, show onboarding to be safe
            setShowOnboarding(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOnboardingComplete = () => {
        setShowOnboarding(false);
    };

    if (isLoading) {
        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <ThemeProvider>
                    <LoadingScreen />
                </ThemeProvider>
            </GestureHandlerRootView>
        );
    }

    if (showOnboarding) {
        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <ThemeProvider>
                    <OnboardingScreen onComplete={handleOnboardingComplete} />
                </ThemeProvider>
            </GestureHandlerRootView>
        );
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
};

export default App;