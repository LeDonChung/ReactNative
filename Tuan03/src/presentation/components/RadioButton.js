import { View } from "react-native"


export const RadioButton = (props) => {
    return (
        <View key={props.lable}>
              {checked == key ? (
                <TouchableOpacity style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('../images/radio_Checked.jpg')}
                  />
                  <Text>{props.lable}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    props.setChecked(key);
                  }}
                  style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('../images/radio_Unchecked.png')}
                  />
                  <Text>{props.gender}</Text>
                </TouchableOpacity>
              )}
            </View>
    )
}