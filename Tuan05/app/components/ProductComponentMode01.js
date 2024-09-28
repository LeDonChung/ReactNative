import { Image, TouchableOpacity, View, Text } from "react-native"
export const ProductComponentMode01 = ({ image, name, shop }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', borderWidth: 1, borderColor: '#C4C4C4' }}>
            <Image source={image} resizeMode="center" style={{ flex: 1, width: 100, height: 100, margin: 5 }} />
            <View style={{ flex: 2, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'regular', fontFamily: 'Roboto', color: '#000', marginBottom: 10 }} numberOfLines={1}>{name}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'regular', fontFamily: 'Roboto', color: '#FF0E0E' }} numberOfLines={1}>
                    <Text style={{ color: '#7D5B5B' }}>
                        Shop: {' '}
                    </Text>
                    {shop}
                </Text>
            </View>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#F31111', marginHorizontal: 10 }}>
                <Text style={{ textAlign: 'center', paddingHorizontal: 20, paddingVertical: 10, fontSize: 16, fontWeight: 'regular', fontFamily: 'Roboto', color: '#fff' }}>
                    Chat
                </Text>
            </TouchableOpacity>
        </View>

    )
}
