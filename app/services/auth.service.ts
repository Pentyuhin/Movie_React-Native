import {EnumAsyncStorage, IAuthResponse} from "@/shared/types/auth.interface";
import {getAuthUrl} from "@/config/api.confige";
import {deleteTokensStorage, saveToStorage} from "@/services/auth.helper";
import {request} from "@/services/api/request.api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthService = {
    async main(variant: 'reg' | 'login', email: string, password: string){
        const response = await request<IAuthResponse>({
            url: getAuthUrl(`/${variant === 'reg' ? 'reqister' : 'login'}`),
            method: 'POST',
            data: {email, password}
        })

        if(response.accessToken) await saveToStorage(response)
        return response
    },

    async logout(){
        await deleteTokensStorage()
        await AsyncStorage.removeItem(EnumAsyncStorage.USER)
    }
}