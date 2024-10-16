import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AssetService from '../services/AssetService';

function AssetDetailsComponent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [asset, setAsset] = useState(null);

    useEffect(() => {
        AssetService.getAssetById(id)
            .then((res) => {
                setAsset(res.data);
            })
            .catch((error) => {
                console.log('Error fetching asset details:', error);
            });
    }, [id]);

    const goBack = () => {
        navigate(-1);
    };

    if (!asset) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Asset Details</h2>
            <div className="grid grid-cols-2 gap-4">
                <p><strong>Asset Type:</strong> {asset.assetType}</p>
                <p><strong>Brand Name:</strong> {asset.brandName}</p>
                <p><strong>Model:</strong> {asset.model}</p>
                <p><strong>RAM:</strong> {asset.ram}</p>
                <p><strong>Storage Capacity:</strong> {asset.storageCapacity}</p>
                <p><strong>Serial Number:</strong> {asset.serialNumber}</p>
                <p><strong>Operating System:</strong> {asset.operatingSystem}</p>
                <p><strong>License of OS:</strong> {asset.licenceOfOS}</p>
                <p><strong>PC Architecture:</strong> {asset.pcArchitecture}</p>
                <p><strong>Host Name:</strong> {asset.hostName}</p>
                <p><strong>Admin Structure:</strong> {asset.isAdminStructureThere ? 'Yes' : 'No'}</p>
                <p><strong>IP Address:</strong> {asset.ipAddress}</p>
                <p><strong>MAC Address:</strong> {asset.macAddress}</p>
                <p><strong>Purchase Date:</strong> {asset.purchaseDate}</p>
                <p><strong>Warranty Date:</strong> {asset.warrantyDate}</p>
            </div>
            <button
                onClick={goBack}
                className="mt-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
                Back to List
            </button>
        </div>
    );
}

export default AssetDetailsComponent;