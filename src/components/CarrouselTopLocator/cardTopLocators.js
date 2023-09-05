
import { Text, View, Image } from 'react-native';
import styles from "./stylesCardTopLocal";

export default function CardTopLocators({item}) {
  return (
    <View style={styles.divTopLocators}>
    
    <View style={styles.divAvatar}>
    <Image style={styles.imageAvatar} source={item.image}></Image>
    </View>


<View style={styles.divNameLocator}>
<Text style={styles.nameLocator}>{item.name}</Text>
<Text style={styles.nameScore}>{item.score}</Text>
</View>
    


    </View>

    );
}
