import React from 'react';
import { View, Text, Image } from 'react-native';

const HistoryTransaction = () => {
    return (
        <View style={{ width: "100%", paddingHorizontal: 10, paddingVertical: 10, flex: 1, flexDirection: "row",marginBottom:"4%" }}>
            <Image source={require("../../assets/EM.png")} style={{ width: 49, height: 49 }} />
            <View style={{ paddingHorizontal: "5%" }}>
                <Text style={{ fontSize: 19, fontWeight: "700", marginLeft: 3 }}>E-Mandate</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ fontSize: 12, fontWeight: "600" }}> Debited</Text>
                    <Text style={{ marginHorizontal: 6, fontSize: 12, fontWeight: "800", color: "#1F654D" }}>8 May 24</Text>
                </View>
            </View>

            <View style={{ flex: 1, alignItem: "flex-end", justifyContent: "flex-end", width: "20%", marginLeft: "16%" }}>
                <Text style={{ fontWeight: "800", fontSize: 14 }}>₹7000</Text>
                <Text>-₹300</Text>
            </View>

        </View>
    );
}

export default HistoryTransaction;
