
import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image } from 'react-native'




const App = () => {
   const [active_player, setActive_player] = useState('X')
  
   return (
      <SafeAreaView style={styles.body} >
         <View style={[styles.playerInfo, {backgroundColor: active_player === 'X' ? '#007FF4': '#F40075'}]} >
            <Text style={styles.playerTxt} >Player {active_player}'s turn</Text>
         </View>
         <View style={styles.mainContainer} >
            <Pressable style={styles.cell} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            <Pressable style={styles.cell} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            <Pressable style={styles.cell} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            <Pressable style={styles.cell} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            <Pressable style={styles.cell} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            <Pressable style={styles.cell} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            <Pressable style={styles.cell} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            <Pressable style={styles.cell} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            <Pressable style={styles.cell} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
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
      alignItems: 'center',
      marginHorizontal: 20,
      paddingVertical: 20,
      marginTop: 30
   },
   playerTxt: {
      fontSize: 20,
      fontWeight: '700',
      letterSpacing: 1.2,
      color: '#fff'
   },
   mainContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap'
   },
   cell: {
      width: 100,
      height: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 6
   },
   icon: {
      width: 62,
      height: 62
   }
   


})

export default App


