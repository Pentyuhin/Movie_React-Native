import * as SplashScreen from 'expo-splash-screen'
import {createContext, FC, PropsWithChildren, useEffect, useState} from 'react'

import {IContext, TypeUserState} from '@/providers/auth/auth-provider.interface'
import {getAccessToken, getUserFromStorage} from "@/services/auth.helper";
import {IUser} from "@/shared/types/user.interface";

export const AuthContext = createContext({} as IContext)

let ignore = SplashScreen.preventAutoHideAsync()

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>({} as IUser)

	useEffect(() => {
		let isMounted = true

		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken()
				if(accessToken){
					const user = await getUserFromStorage()
					if(isMounted) setUser((user))
				}
			} catch {
			} finally {
				await SplashScreen.hideAsync()
			}
		}

		let ignore = checkAccessToken()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
