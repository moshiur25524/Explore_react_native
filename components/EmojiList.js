import { useState } from "react";
import { FlatList, Image, Platform, Pressable, StyleSheet } from "react-native";

const emoji1 = require("../assets/images/emoji01.jpg");
const emoji2 = require("../assets/images/emoji02.jpg");
const emoji3 = require("../assets/images/emoji03.jpg");
const emoji4 = require("../assets/images/emoji04.jpg");
const emoji5 = require("../assets/images/emoji05.jpg");
const emoji6 = require("../assets/images/emoji06.jpg");

const EmojiList = ({ onSelect, onCloseModal }) => {
  const [emoji] = useState([emoji1, emoji2, emoji3, emoji4, emoji5, emoji6]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      randerItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

export default EmojiList;
