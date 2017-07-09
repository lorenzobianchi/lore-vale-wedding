import request from 'superagent'

export const ping = () => request.get('/api/ping')
