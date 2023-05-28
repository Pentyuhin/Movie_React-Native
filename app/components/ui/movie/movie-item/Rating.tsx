import {View} from "react-native";
import {FC} from "react";
import {AntDesign} from "@expo/vector-icons";
import {getColor} from "@/config/color.confige";
import cn from "clsx";

interface IRating {
    size?: number
    rating: number
}

export const Rating: FC<IRating> = ({size = 20, rating}) => {
  return(
      <View className='flex-row items-center'>
          <AntDesign name='star' size={size as number} color={getColor('yellow')}/>
          <Text className={cn('text-white ml-2 font-bold', size === 20 ? 'text-lg' : 'text-base')}
          >
              {rating.toFixed(1)}
          </Text>
      </View>
  )
}