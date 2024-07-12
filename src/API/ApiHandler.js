import api from "./Client"

const getOtp=()=>{
	return api.get('/b76f5108-0963-4a07-b7c2-c2ae0ed2a839');
}
export { getOtp };