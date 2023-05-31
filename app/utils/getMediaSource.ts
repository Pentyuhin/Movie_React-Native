import { SERVER_URL } from '@/config/api.confige'

export const getMediaSource = (path: string) => ({
	uri: SERVER_URL + path
})
