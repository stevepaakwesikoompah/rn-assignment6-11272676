import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CartContext } from './context/CartContext';

const CartScreen = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);


    const renderItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itemDetails}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item)}>
                <Image source={require('../assets/remove.png')} style={styles.remove} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.checkout}>CHECKOUT</Text>
            <Image source={require('../assets/line.png')} style={styles.line}/>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <Text style={styles.total}>EST. TOTAL</Text>
            <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
            <View style={styles.footer}>
              <Ionicons name="bag-outline" size={30} color="red" style={styles.bag} />
              <Text style={styles.footerText}>CHECKOUT</Text>
          </View>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    cartItem: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: -45,
    },
    itemDetails: {
        flex: 1,
        bottom: 150,
        left: 50
    },
    description: {
        fontSize: 14,
      
    },
 
    cartList: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    image: {
        width: 180,
        borderRadius: 0,
        right: 130
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 14,
        color: 'red',
        paddingTop: 5,
        fontWeight: 'bold',
    },
    remove: {
        left: 210,
        width: 30,
        height: 30,
    },
    checkout: {
        fontSize: 24,
        left: 140
    },
    total: {
        fontSize: 20
    },
    totalPrice: {
        color: 'red',
        fontSize: 20,
        left: 340,
        bottom: 25
    },
    footer: {
        bottom: 0,
        width: '140%',
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        right:20,
      },
      footerText: {
        color: '#fff',
        fontSize: 24,
        right: 60
    },
    bag: {
        right: 70,
        color: '#fff'
    },
    line: {
        left: 70
    }
});
