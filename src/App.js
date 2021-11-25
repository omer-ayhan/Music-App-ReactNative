import React, { useState } from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import music_data from "../music-data.json";
import SearchBar from "./Components/SearchBar/SearchBar";
import SongCard from "./Components/SongCard";

export default function App() {
  const [songData, setSongData] = useState(music_data);
  const renderSong = ({ item }) => <SongCard song={item} />;
  const extractKey = ({ id }) => id;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = (text) => {
    const newData = music_data.filter((song) => {
      const songTitle = song.title.toUpperCase();
      const textData = text.toUpperCase();
      return songTitle.includes(textData);
    });
    setSongData(newData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={extractKey}
        data={songData}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: { borderWidth: 1, borderColor: "#e0e0e0" },
});
