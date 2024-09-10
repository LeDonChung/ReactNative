import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
export const FirstScreen = () => {
    const navigation = useNavigation()
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../assets/eclipse.png')} />
                <Text style={[styles.textStyle, {fontWeight: '700', fontSize: 22, marginVertical: 75}]}>GROW {'\n'} YOUR BUSINESS</Text>
                <Text style={[styles.textStyle, {fontWeight: '700', fontSize: 15}]}>We will help you to grow your business using online server</Text>
                <View style={[styles.btnGroup, {marginTop: 75}]}>
                    <TouchableOpacity style={{borderRadius: 10, overflow: "hidden"}}>
                        <Text style={styles.button}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderRadius: 10, overflow: "hidden"}}>
                        <Text style={styles.button}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{marginTop: 30}}>
                    <Text onPress={() => navigation.navigate('forgetPassword')} style={[styles.textStyle, {fontWeight: '700', fontSize: 20}]}>HOW WE WORK?</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#00CCF9'
    },
    textStyle: {
        color: '#000',
        fontFamily: 'Roboto',
        textAlign: 'center' 
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: '#E3C000',
        color: '#000',
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        padding: 10, 
    },
    image: {
        width: 140,
        height: 140
    }

})