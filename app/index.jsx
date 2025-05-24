import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      
      if (currentUser && currentUser.emailVerified) {
        // User is signed in and verified, redirect to welcome screen
        router.replace('/welcome');
      }
    });
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // If no user is signed in or not verified, show the sign-up/sign-in screen
  return (
    <View className="flex-1 justify-center items-center bg-gray-50 px-6">
      <Text className="text-4xl font-bold text-gray-800 mb-4">Welcome</Text>
      <Text className="text-lg text-gray-600 mb-8 text-center">Welcome to our app! Sign up and explore amazing features</Text>
      <TouchableOpacity
        onPress={() => router.push('/sign-up')}
        className="bg-blue-500 py-3 px-10 rounded-lg shadow-md w-full">
        <Text className="text-white text-center text-lg font-semibold">Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push('/sign-in')}
        className="mt-4 py-3 px-10 rounded-lg border border-gray-300 w-full">
        <Text className="text-gray-700 text-center text-lg font-semibold">Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;