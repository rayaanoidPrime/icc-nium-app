import { View, Text , StyleSheet , Image} from 'react-native';

export default function NavBar(){
   return (
    <View style={styles.navbar}>
        <View style={styles.accordian}>
            <Text style={{color:'white'}}>accordian</Text>
        </View>
        <View style={styles.pfp}>
            <Image source={require("../assets/1599554433642.jpeg")} style={{
                height : 30 , 
                width : 30 , 
                borderRadius: 25 , 
                justifyContent : 'center' 
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
        paddingBottom : 20,
        paddingTop : 20,
        backgroundColor : 'black',
        width : '100%',
        position : 'relative',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    accordian:{
        
    },
    pfp:{
    }
})