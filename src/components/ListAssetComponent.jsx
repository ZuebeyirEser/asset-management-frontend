import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AssetService from '../services/AssetService';

function ListAssetComponent() {

    const navigate = useNavigate();
    const [assets, setAssets] = useState([]);
    const [editingAsset, setEditingAsset] = useState(null);
    

    useEffect(() => {
        fetchAssets();
    }, []);

    const fetchAssets = () => {
        AssetService.getAssets()
        .then((res) => {
            setAssets(res.data)
        })
        .catch(error => {
            console.log("there is fetching issue with employees" + error);
        });
    }
    const startEditAsset = (asset) => {
        setEditingAsset(asset);

    }

    const addAsset = () => {
        navigate('/add-assets')
    };

    const cancelEdit = () => {
        setEditingAsset(null);
    };
    const deleteAsset = (assetId) => {
        AssetService.deleteAsset(assetId)
            .then(() => {
            setAssets(assets.filter(asset => asset.id !== assetId));
        })
            .catch((error) => {
                console.log('There was an error deleting the asset', error);
        });
    }
    const viewAsset = (id) => {
        navigate(`/view-asset/${id}`);
    }
    const saveAsset = () => {
        const updatedAsset = {
            assetType: editingAsset.assetType,
            brandName: editingAsset.brandName,
            model: editingAsset.model,
            ram: editingAsset.ram,
            storageCapacity: editingAsset.storageCapacity,
            serialNumber: editingAsset.serialNumber,
            operatingSystem: editingAsset.operatingSystem,
            licenceOfOS: editingAsset.licenceOfOS,
            pcArchitecture: editingAsset.pcArchitecture,
            hostName: editingAsset.hostName,
            isAdminStructureThere: editingAsset.isAdminStructureThere,
            ipAddress: editingAsset.ipAddress,
            macAddress: editingAsset.macAddress,
            purchaseDate: editingAsset.purchaseDate,
            warrantyDate: editingAsset.warrantyDate,
        };

        AssetService.updateAssets(editingAsset.id, updatedAsset)
            .then(() => {
                setEditingAsset(null);  
                fetchAssets();  
            })
            .catch((error) => {
                console.log('There was an error updating the employee', error);
            });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingAsset({ ...editingAsset, [name]: value });
    };
    
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h2 className="text-center mb-4 text-lg font-semibold">Asset List</h2>
            <div className="mt-5">
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                    onClick={addAsset}
                >
                    Add Asset
                </button>
            </div>

            {editingAsset ? (
                <div className="max-w-md mx-auto mt-10">
                    <h2 className="text-center mb-4 text-lg font-semibold">Edit Asset</h2>
                    <div>
                        <label className="block text-gray-700">Asset Type</label>
                        <input
                            type="text"
                            name="assetType"
                            value={editingAsset.assetType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Brand Name</label>
                        <input
                            type="text"
                            name="brandName"
                            value={editingAsset.brandName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Model</label>
                        <input
                            type="text"
                            name="model"
                            value={editingAsset.model}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">RAM</label>
                        <input
                            type="text"
                            name="ram"
                            value={editingAsset.ram}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Storage Capacity</label>
                        <input
                            type="text"
                            name="storageCapacity"
                            value={editingAsset.storageCapacity}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Serial Number</label>
                        <input
                            type="text"
                            name="serialNumber"
                            value={editingAsset.serialNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Operating System</label>
                        <input
                            type="text"
                            name="operatingSystem"
                            value={editingAsset.operatingSystem}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">License of OS</label>
                        <input
                            type="text"
                            name="licenceOfOS"
                            value={editingAsset.licenceOfOS}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">PC Architecture</label>
                        <input
                            type="text"
                            name="pcArchitecture"
                            value={editingAsset.pcArchitecture}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Host Name</label>
                        <input
                            type="text"
                            name="hostName"
                            value={editingAsset.hostName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Is Admin Structure There</label>
                        <input
                            type="checkbox"
                            name="isAdminStructureThere"
                            checked={editingAsset.isAdminStructureThere}
                            onChange={(e) => handleChange({ target: { name: 'isAdminStructureThere', value: e.target.checked } })}
                            className="ml-2"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">IP Address</label>
                        <input
                            type="text"
                            name="ipAddress"
                            value={editingAsset.ipAddress}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">MAC Address</label>
                        <input
                            type="text"
                            name="macAddress"
                            value={editingAsset.macAddress}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Purchase Date</label>
                        <input
                            type="date"
                            name="purchaseDate"
                            value={editingAsset.purchaseDate ? editingAsset.purchaseDate.slice(0, 10) : ''}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Warranty Date</label>
                        <input
                            type="date"
                            name="warrantyDate"
                            value={editingAsset.warrantyDate ? editingAsset.warrantyDate.slice(0, 10) : ''}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-purple-700 transition ease-in-out duration-300 mr-4"
                            onClick={saveAsset}
                        >
                            Save
                        </button>
                        <button
                            className="bg-gray-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-gray-700 transition ease-in-out duration-300"
                            onClick={cancelEdit}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <table className="overflow-scroll w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-6">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Asset Type</th>
                        <th scope="col" className="px-6 py-3">Brand Name</th>
                        <th scope="col" className="px-6 py-3">Model</th>
                        <th scope="col" className="px-6 py-3">RAM</th>
                        <th scope="col" className="px-6 py-3">Storage Capacity</th>
                        <th scope="col" className="px-6 py-3">Serial Number</th>
                        <th scope="col" className="px-6 py-3">Operating System</th>
                        <th scope="col" className="px-6 py-3">License of OS</th>
                        <th scope="col" className="px-6 py-3">PC Architecture</th>
                        <th scope="col" className="px-6 py-3">Host Name</th>
                        <th scope="col" className="px-6 py-3">Admin Structure Setup</th>
                        <th scope="col" className="px-6 py-3">IP Address</th>
                        <th scope="col" className="px-6 py-3">MAC Address</th>
                        <th scope="col" className="px-6 py-3">Purchase Date</th>
                        <th scope="col" className="px-6 py-3">Warranty Date</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>

                    </thead>
                    <tbody className="bg-grey-light overflow-x-scroll w-full">
                        {assets.map((asset) => (
                            <tr key={asset.id} className="odd:bg-white even:bg-gray-50 border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {asset.assetType}
                                </th>
                                <td className="px-6 py-4">{asset.brandName}</td>
                                <td className="px-6 py-4">{asset.model}</td>
                                <td className="px-6 py-4">{asset.ram}</td>
                                <td className="px-6 py-4">{asset.storageCapacity}</td>
                                <td className="px-6 py-4">{asset.serialNumber}</td>
                                <td className="px-6 py-4">{asset.operatingSystem}</td>
                                <td className="px-6 py-4">{asset.licenceOfOS}</td>
                                <td className="px-6 py-4">{asset.pcArchitecture}</td>
                                <td className="px-6 py-4">{asset.hostName}</td>
                                <td className="px-6 py-4">{asset.isAdminStructureThere ? 'Yes' : 'No'}</td>
                                <td className="px-6 py-4">{asset.ipAddress}</td>
                                <td className="px-6 py-4">{asset.macAddress}</td>
                                <td className="inline-flex px-6 py-4">
                                    <button
                                        onClick={() => startEditAsset(asset)}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteAsset(asset.id)}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => viewAsset(asset.id)}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
    
    
}

export default ListAssetComponent;