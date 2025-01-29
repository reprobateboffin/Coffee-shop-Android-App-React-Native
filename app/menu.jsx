import { StyleSheet,FlatList, Appearance,Platform,SafeAreaView, View,Text,Image} from "react-native";
import { Colors } from "@/constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import {MENU_ITEMS} from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages'
import { setStatusBarHidden } from "expo-status-bar";
export default function menuList(){
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark'? Colors.dark: Colors.light;

    const styles =  createStyles(theme,colorScheme);
    //scrollView will work on web, SafeaArea View works on android or ios
    const Container = Platform.OS === 'web'? ScrollView : SafeAreaView;
    const seperatorComp = <View style={styles.seperator}/>
    // const headerComp = <Text>Head of List</Text>
    const footerComp = <Text style={{color: theme.text}}>End of Menu</Text>
  
  
    return (
            <Container>
        <FlatList data={MENU_ITEMS}
        keyExtractor={(item)=> item.id.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={seperatorComp}
        // ListHeaderComponent={headerComp}
        ListFooterComponent={footerComp}
        ListFooterComponentStyle={styles.footerComp}
        ListEmptyComponent={<View>No item</View>}
                contentContainerStyle={styles.contentContainer}
                  renderItem={({item}) =>(
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                        <Text style={[styles.menuItemTitle,styles.menuItemText]}>{item.title}</Text>
                        <Text style={styles.menuItemText}>{item.description}</Text>
                        
                        </View>
                        <Image source={MENU_IMAGES[item.id-1]} style={styles.menuImage}/>
                        </View>
                    



                  )}
        
        ></FlatList>
            </Container>

    )
}

function createStyles(theme,colorScheme){
    return StyleSheet.create({
            contentContainer:{
                paddingTop:10,
                paddingBottom:20,
                paddingHorizontal:12,
                backgroundColor: theme.background
            },
            seperator:{
                height:1,
                backgroundColor: colorScheme === 'dark'? 
                '#ffff': '#0000',
                width:'50%',
                maxWidth:300,
                marginHorizontal: 'auto',
                marginBottom:10,
            },
            footerComp:{
                marginHorizontal:'auto'
            },
            row:{
                flexDirection: "row",
                width: '100%',
                maxWidth : 600,
                height: 100,
                marginBottom:10,
                borderStyle:'solid',
                borderColor : colorScheme === 'dark'? '#ffff': '#0000',
                borderWidth : 1,
                borderRadius : 20,
                overflow: 'hidden',
                marginHorizontal: 'auto'
            },
            menuTextRow:{
                width: '65%',
                paddingTop: 10,
                paddingLeft:10,
                paddingRight:5,
                flexGrow:1,
            }  ,
            menuItemTitle:{
                fontSize: 18,
                textDecorationLine : 'underline',
            },
            menuItemText : {
                color : theme.text
            },
            menuImage : {
                width:100,
                height:100,
            }  ,

    })
}