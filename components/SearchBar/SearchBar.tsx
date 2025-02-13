import { TextInput } from "react-native";
import { s } from "./SearchBar.style";

interface props {
  onSubmit: (e: any) => void;
}

export function SearchBar({ onSubmit }: props) {
  return (
    <>
      <TextInput
        onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
        style={s.input}
        placeholder="Type a city... Ex: Orani"
      />
    </>
  );
}
