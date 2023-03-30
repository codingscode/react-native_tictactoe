
import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'




const App = () => {
   const [active_player, setActive_player] = useState('O')
  
   return (
      <SafeAreaView style={styles.body} >
         <View style={[styles.playerInfo, {backgroundColor: active_player === 'X' ? '#007FF4': '#F40075'}]} >
            <Text style={styles.playerTxt} >Player {active_player}'s turn</Text>

         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
      backgroundColor: '#fff'
   },
   playerInfo: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
   playerTxt: {
      fontSize: 20,
      fontWeight: '700',
      letterSpacing: 1.2
   }


})

export default App


