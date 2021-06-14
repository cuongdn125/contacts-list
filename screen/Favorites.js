import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Image, TouchableOpacity, FlatList, ActivityIndicator, Dimensions} from 'react-native';

import {fetchContacts} from '../utils/api';

let deviceWidth = Dimensions.get('window').width

function Favorites(props) {
    const {navigation} = props;
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        async function getData() {
            try{
                const newContacts = await fetchContacts();
                setContacts(newContacts);
                setLoading(false);
                setError(false);
            }catch(e){
                console.log(e);
                setError(true);
                setLoading(false);
            }
        }
        getData();
    },[]);
    const newContacts = contacts.filter(contact => contact.favorite);
    const keyExtractor = ({phone}) => phone;
    const renderContact = ({item}) => {
        const {avatar, favorite} = item;
        return (
            <TouchableOpacity onPress={() => {navigation.navigate("Profile", item)}} style={styles.avatarSection}>
                <Image source={{uri: avatar}}  style={styles.avatar}/>
            </TouchableOpacity>
        )
        
    }


    return (
        <View style={styles.container} >
            {loading && <ActivityIndicator size={'large'} />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList 
                    data={newContacts}
                    keyExtractor={keyExtractor}
                    renderItem={renderContact}
                    numColumns={3}
                    contentContainerStyle={styles.list}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    avatarSection: {
        height: deviceWidth/3,
        width: deviceWidth/3,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    list: {
        alignItems: "center"
    }

})

export default Favorites;