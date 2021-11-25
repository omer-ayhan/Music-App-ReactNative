import React, { memo } from "react";
import { TextInput } from "react-native";
import styles from "./SearchBar.style";

function Searchbar({ onSearch }) {
  return (
    <TextInput
      style={styles.container}
      placeholder="Search..."
      onChangeText={onSearch}
    />
  );
}
export default memo(Searchbar);
