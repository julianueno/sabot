import React from "react";
import {View, Dimensions} from "react-native";

import HomeMap from '../../components/HomeMap';
import Message from '../../components/Message';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';

const HomeScreen = (props) => {
    return (
        <View>
            <Logo/>
            <View style={{height: Dimensions.get('window').height -200}}>
            <HomeMap />
            </View>
            <NavBar/>
            {/*<Message/>*/}
        </View>
    );
};

export default HomeScreen;