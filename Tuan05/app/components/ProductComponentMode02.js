import { Image, View, Text } from "react-native"
export const ProductComponentMode02 = ({ image, name, star, discount, comment, price }) => {
    return (
        <View style={{ height: 300, flex: 1, flexDirection: 'column', backgroundColor: '#fff', alignItems: 'center', borderWidth: 1, borderColor: '#C4C4C4' }}>
            <Image resizeMode="contain" source={image} style={{ height: 150, width: 150, margin: 5 }} />
            <View style={{ marginHorizontal: 10, flex: 1, justifyContent: 'space-between' }}>
                <Text style={{ flex: 1, fontSize: 16, fontWeight: 'medium', fontFamily: 'Roboto', color: '#000' }} numberOfLines={2}>{name}</Text>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', marginVertical: 15 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {
                            [1, 2, 3, 4, 5].map(((item, index) => {
                                if (index <= star) return <Image key={index} source={require('../../assets/ic_star.png')} style={{ width: 20, height: 20 }} />
                                else return <Image key={index} source={require('../../assets/ic_none_star.png')} style={{ width: 20, height: 20 }} />
                            }))
                        }
                    </View>
                    <Text style={{flex: 1, marginStart: 40, fontSize: 16, fontWeight: 'medium', fontFamily: 'Roboto', color: '#000'}}>({comment})</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'Roboto', color: '#000', marginRight: 10 }}>{price}</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'medium', fontFamily: 'Roboto', color: '#969DAA' }}>-{discount}%</Text>
                </View>

            </View>
        </View>

    )


}

{/* <View style={{ marginHorizontal: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'medium', fontFamily: 'Roboto', color: '#000' }} numberOfLines={2}>{name}</Text>

                <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10, alignItems: 'flex-start' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {
                            [1, 2, 3, 4, 5].map(((item, index) => {
                                if (index <= star) return <Image key={index} source={require('../../assets/ic_star.png')} style={{ width: 20, height: 20 }} />
                                else return <Image key={index} source={require('../../assets/ic_none_star.png')} style={{ width: 20, height: 20 }} />
                            }))
                        }
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: 'medium', fontFamily: 'Roboto', color: '#000', marginStart: 2 }}>({comment})</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'Roboto', color: '#000', marginRight: 10 }}>{price}</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'medium', fontFamily: 'Roboto', color: '#969DAA' }}>-{discount}%</Text>
                </View>
            </View> */}
