import Category from "@/types/categories";
import React from "react";
import { Link } from "expo-router";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";
import { getColorBasedOnIndex } from "@/constants/Colors";
import remToPx from "@/constants/fontSize";
export default function CategoryRender({
  item,
  index,
  screenWidth,
}: {
  item: Category;
  index: number;
  screenWidth: number;
}) {
  const { color, borderColor } = getColorBasedOnIndex(index);
  return (
    <Link href={"category/" + item.name} asChild key={item.id}>
      <Pressable
        style={{
          ...styles.categoryContainer,
          height: screenWidth * 0.35,
          borderColor: borderColor,
          backgroundColor: color,
        }}
      >
        <View
          style={{
            width: 0.54 * screenWidth,
          }}
        >
          <Text
            //text-3xl font-medium
            style={{
              fontWeight: "bold",
              fontSize: remToPx(1.5),
              lineHeight: remToPx(1.5),
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: remToPx(1.12),
              lineHeight: remToPx(1.5),
            }}
          >
            {item.description}
          </Text>
        </View>
        <Image
          source={{
            uri: `${process.env.EXPO_PUBLIC_API_URL}/assets/categories/${item.id}.jpg`,
          }}
          style={{
            height: screenWidth * 0.3,
            width: screenWidth * 0.3,
            borderRadius: 8,
          }}
        />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    borderWidth: 1,
    textAlign: "center",
    borderColor: "grey",
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android Shadow
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
});
