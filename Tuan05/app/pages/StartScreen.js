import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

export const StartScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginBottom: 20, backgroundColor: '#F31111', marginHorizontal: 10 }} onPress={() => navigation.navigate('ProductScreen1')}>
                <Text style={{ textAlign: 'center', paddingHorizontal: 20, paddingVertical: 10, fontSize: 16, fontWeight: 'regular', fontFamily: 'Roboto', color: '#fff' }}>
                    Mode 01
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{  backgroundColor: '#F31111', marginHorizontal: 10 }}  onPress={() => navigation.navigate('ProductScreen2')}>
                <Text style={{ textAlign: 'center', paddingHorizontal: 20, paddingVertical: 10, fontSize: 16, fontWeight: 'regular', fontFamily: 'Roboto', color: '#fff' }}>
                    Mode 02
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
    },
});