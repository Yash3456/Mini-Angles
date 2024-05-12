import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SchemesCard = ({title,val,toggleModal2}) => {
  return (
    <View style={{marginVertical:10}}>
      <View style={{ backgroundColor: "#1F654D", display: "flex", flexDirection: "row", maxWidth: "100%", paddingLeft: 20, paddingVertical: "4%",borderTopLeftRadius:20,borderTopRightRadius:20 }}>
        <View style={{ width: "60%" }}>
          <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "900" }}>{title} Risk</Text>
          <Text style={{ fontSize: 17,marginTop:5, color: "#ffffff" }}>{title} Interest</Text>
        </View>
        <View style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", maxWidth: "40%" }}>
          <TouchableOpacity onPress={toggleModal2}>
            <Text style={{ textDecorationLine: "underline", color: "#ffffff", fontSize: 16 }}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 240, backgroundColor: "#FE804D", borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
        <View style={{ flex: 1, flexDirection: "column", width: "100%" }}>
          <Text style={{ paddingHorizontal: 20, paddingTop: 14, fontSize: 16, fontWeight: "400", color: "#1C1B1FB3" }}>Rate of Interest(gain)</Text>
          <Text style={{ color: "#1C1B1F", marginTop: 8, marginHorizontal: "8%", fontSize: 28, fontWeight: "600" }}>~{val}%</Text>
          <Text style={{ color: "#ffffff", marginHorizontal: "4%", marginTop: 15,lineHeight:22, letterSpacing: 1, fontSize: 18, fontWeight: "500" }}>The Scheme is for those who are looking for <Text style={{color:"#1F654D"}}>{title} risk and {title} interest gain</Text> and want to play safe. </Text>
        </View>
      </View>
    </View>
  );
}

export default SchemesCard;
