import axios from "axios";
const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v2/assets';

const getAuthHeader = () => {
    const token = localStorage.authToken;
    return { headers: { 'Authorization': `Bearer ${token}` } };
};

const AssetService = {
    getAssets: function() {
        return axios.get(EMPLOYEE_API_BASE_URL, getAuthHeader());
    },
    updateEmployee: function(assetId, asset) {
        return axios.put(`${EMPLOYEE_API_BASE_URL}/${assetId}`, asset, getAuthHeader());
    },
    deleteAsset: function(assetId) {
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/${assetId}`, getAuthHeader());
    }
}
export default AssetService;