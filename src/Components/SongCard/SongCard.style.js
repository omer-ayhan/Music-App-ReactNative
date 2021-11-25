import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  title: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
  },
  info_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  year: {
    marginLeft: 10,
    color: "#aaa",
    fontWeight: "bold",
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: "red",
    padding: 6,
    borderRadius: 5,
    marginBottom: 5,
  },
  soldout_title: {
    color: "red",
    textAlign: "center",
    fontSize: 13,
  },
  content_container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
