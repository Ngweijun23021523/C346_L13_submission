import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Detail = ({navigation}) => {

    const route = useRoute();
    const { school } = route.params;

    return (
        <View contentContainerStyle={styles.container}>
            <Text style={styles.title}>{school.school_name}</Text>
            <Text style={styles.detail}><Text style={styles.label}>Address:</Text> {school.address}</Text>
            <Text style={styles.detail}><Text style={styles.label}>Postal Code:</Text> {school.postal_code}</Text>
            <Text style={styles.detail}><Text style={styles.label}>Email:</Text> {school.email_address}</Text>
            <Text style={styles.detail}><Text style={styles.label}>MRT Nearby:</Text> {school.mrt_desc}</Text>
            <Text style={styles.detail}><Text style={styles.label}>Principal:</Text> {school.principal_name}</Text>
            <Text style={styles.detail}><Text style={styles.label}>Vice Principal:</Text> {school.first_vp_name}</Text>
            <Text style={styles.detail}><Text style={styles.label}>School Type:</Text> {school.type_code}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(school.url_address)}>
                <Text style={styles.link}>Visit Website</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() =>  navigation.navigate("Home")
            }>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f7f7f7",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#192689",
        marginBottom: 10,
        paddingTop: 20,
    },
    detail: {
        fontSize: 16,
        marginBottom: 5,
        color: "#333",
    },
    label: {
        fontWeight: "bold",
        color: "#192689",
    },
    link: {
        fontSize: 16,
        color: "#007bff",
        marginTop: 10,
    },
    backButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#192689",
        borderRadius: 8,
        alignItems: "center",
    },
    backButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    containerDark: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 16,
    },
    titleDark: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#fff",
        paddingTop: 15,
    },
    searchBoxDark: {
        height: 40,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: "#333",
        color: "#fff",
    },
    itemDark: {
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: "#333",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    schoolNameDark: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    schoolTypeDark: {
        fontSize: 14,
        color: "#007bff",
    },
    switchLabelDark: {
        fontSize: 16,
        marginRight: 10,
        color: "#fff",
    },

});

export default Detail;
