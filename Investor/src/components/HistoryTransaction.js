import React from 'react';
import { View, Text, Image } from 'react-native';

const HistoryTransaction = ({title,title2,flag,amount}) => {
    return (
        <View style={{ width: "100%", paddingHorizontal: 10, paddingVertical: 10, flex: 1, flexDirection: "row",marginBottom:"4%" }}>
            
            <View style={{maxWidth:"43%"}}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>{title}</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ fontSize: 12, fontWeight: "600" }}>{title2}</Text>
                </View>
            </View>

            {
              flag === true && (<Image source={require("../../assets/green.png")} style={{ width: 81, height: 32,marginHorizontal:"5%" }} />)
            }

            {
                flag === false && (<Image source={require("../../assets/red.png")} style={{ width: 81, height: 32,marginHorizontal:"5%" }} />)
              }

            <View style={{ flex: 1, alignItem: "center", justifyContent: "center", width: "40%",marginLeft:"4%" }}>
                <Text style={{ fontWeight: "800", fontSize: 16 }}>{amount}</Text>
            </View>

        </View>
    );
}

export default HistoryTransaction;
