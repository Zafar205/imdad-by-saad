import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.config'

const Welcome = () => {
  const router = useRouter();
  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
      router.replace('/'); // Redirect to home/login screen after logout
    } catch (error) {
      alert(`Error logging out: ${error.message}`);
    }
  }
  
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Text className="text-3xl text-teal-900 mb-6">Welcome</Text>
      <TouchableOpacity className="bg-blue-500 py-3 px-10 rounded-lg shadow-md w-11/12" onPress={() => router.push('/realtime')}>
        <Text className="text-center text-white text-lg font-semibold">Explore Realtime Database</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-500 py-3 px-10 rounded-lg shadow-md w-11/12 mt-4" onPress={() => router.push('/firestore')}>
        <Text className="text-center text-white text-lg font-semibold">Explore Firestore Database</Text>
      </TouchableOpacity>
      
      {/* Logout button */}
      <TouchableOpacity 
        className="bg-red-500 py-3 px-10 rounded-lg shadow-md w-11/12 mt-8"
        onPress={handleLogout}
      >
        <Text className="text-center text-white text-lg font-semibold">Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome