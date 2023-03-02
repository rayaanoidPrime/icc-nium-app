import { View, Text , StyleSheet , Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NavBar(){
   return (
    <View style={styles.navbar}>
        <View >
            <Ionicons name="menu" size={26} color="white" />
        </View>
        <View style={styles.pfp}>
            <Ionicons style={styles.icons} name="cart" size={24} color="white" />
            <MaterialCommunityIcons style={styles.icons} name="star-four-points-outline" size={24} color="white" />
            <Ionicons style={styles.icons} name="settings-outline" size={24} color="white" />
            <Image source={require("../assets/1599554433642.jpeg")} style={{
                height : 40 , 
                width : 40 , 
                borderRadius: 25 , 
            }}></Image>
        </View>
    </View>
   )
}

const styles = StyleSheet.create({
    navbar:{
        flex : 1,
        flexDirection : 'row',
        padding : 15,
        paddingBottom : 30,
        paddingTop : 30,
        backgroundColor : 'black',
        width : '100%',
        position : 'relative',
        alignItems : 'center',
        justifyContent : 'space-between',
        zIndex : 10,
        //position : 'absolute'
    },
    icons:{
        paddingTop : 6.5,
        paddingRight : 10
    },
    pfp:{
        flex:1,
        flexDirection: 'row',
        alignSelf : 'center',
        justifyContent : 'flex-end',
    }
})