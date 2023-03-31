
import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image, Dimensions } from 'react-native'



const windowWidth = Dimensions.get('window').width


const App = () => {
   const [active_player, setActive_player] = useState('X')
  
   return (
      <SafeAreaView style={styles.body} >
         <View style={[styles.playerInfo, {backgroundColor: active_player === 'X' ? '#007FF4': '#F40075'}]} >
            <Text style={styles.playerTxt} >Player {active_player}'s turn</Text>
         </View>
         <View style={styles.mainContainer} >
            {/* Top Left Cell */}
            <Pressable style={styles.cell_top_left} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            {/* Top Mid Cell */}
            <Pressable style={styles.cell_top_mid} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            {/* Top Right Cell */}
            <Pressable style={styles.cell_top_right} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            {/* Mid Left Cell */}
            <Pressable style={styles.cell_mid_left} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            {/* Mid Mid Cell */}
            <Pressable style={styles.cell_mid_mid} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            {/* Mid Right Cell */}
            <Pressable style={styles.cell_mid_right} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            {/* Bottom Left Cell */}
            <Pressable style={styles.cell_bottom_left} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            {/* Bottom Mid Cell */}
            <Pressable style={styles.cell_bottom_mid} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
            {/* Bottom Right Cell */}
            <Pressable style={styles.cell_bottom_right} >
               <Image source= {require('./assets/image/cross.png')} style={styles.icon} />
            </Pressable>
         </View>
         <Pressable>
            <Image source={require('./assets/image/replay.png')} />
         </Pressable>
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
      flexWrap: 'wrap',
      marginTop: 60
   },
   cell_top_left: {
      width: windowWidth/3.2,
      height: windowWidth/3.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 6,
      borderBottomWidth: 6
   },
   cell_top_mid: {
      width: windowWidth/3.2,
      height: windowWidth/3.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 6
   },
   cell_top_right: {
      width: windowWidth/3.2,
      height: windowWidth/3.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 6,
      borderBottomWidth: 6
   },
   cell_mid_left: {
      width: windowWidth/3.2,
      height: windowWidth/3.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 6,
   },
   cell_mid_mid: {
      width: windowWidth/3.2,
      height: windowWidth/3.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   cell_mid_right: {
      width: windowWidth/3.2,
      height: windowWidth/3.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 6,
   },
   cell_bottom_left: {
      width: windowWidth/3.2,
      height: windowWidth/3.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 6,
      borderTopWidth: 6
   },
   cell_bottom_mid: {
      width: windowWidth/3.2,
      height: windowWidth/3.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 6,
   },
   cell_bottom_right: {
      width: windowWidth/3.2,
      height: windowWidth/3.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 6,
      borderTopWidth: 6
   },
   icon: {
      width: 62,
      height: 62
   }
   


})

export default App


