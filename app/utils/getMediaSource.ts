import {SERVER_URL} from "@/config/api.confige";
import {ImageSourcePropType} from "react-native";

export const getMediaSource = (path: string): ImageSourcePropType => ({
    uri: SERVER_URL
})