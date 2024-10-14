import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AssetService from '../services/AssetService';
function AddAssetComponent() {
    const  [formState, setFormState] = useState({
        assetType: '',
        brandName: '',
        model: '',
        ram: '',
        storageCapacity: '',
        serialNumber: '',
        operatingSystem: '',
        licenceOfOS: '',
        pcArchitecture: '',
        hostName: '',
        isAdminStructureThere: '',
        ipAddress: '',
        macAddress: '',
        purchaseDate: '',
        warrantyDate: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { assetType, brandName, model, ram, storageCapacity, serialNumber, operatingSystem, licenceOfOS, pcArchitecture, hostName, isAdminStructureThere, ipAddress, macAddress, purchaseDate, warrantyDate } = formState;
        if (!assetType || !brandName || !model || !ram || !storageCapacity || !serialNumber || !operatingSystem || !licenceOfOS || !pcArchitecture || !hostName || !isAdminStructureThere || !ipAddress || !macAddress || !purchaseDate || !warrantyDate) {
            alert("Please fill out all fields.");
            return;
        }
        console.log('Form submitted:', formState);        
        try {
            await AssetService.addAsset(formState);
            // Reset form after submission
            setFormState({
                assetType: '',
                brandName: '',
                model: '',
                ram: '',
                storageCapacity: '',
                serialNumber: '',
                operatingSystem: '',
                licenceOfOS: '',
                pcArchitecture: '',
                hostName: '',
                isAdminStructureThere: '',
                ipAddress: '',
                macAddress: '',
                purchaseDate: '',
                warrantyDate: ''
            });
            setTimeout(() => navigate('/'), 2000);

        } catch (e) {
            console.error(e);
        }
    }

    const navigate = useNavigate();
    const backToHome = () => {
        navigate('/');
    }
    
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Add New Asset</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Asset Type</label>
                    <input
                        type="text"
                        name="assetType"
                        value={formState.assetType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter asset type"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Brand Name</label>
                    <input
                        type="text"
                        name="brandName"
                        value={formState.brandName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter brand name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Model</label>
                    <input
                        type="text"
                        name="model"
                        value={formState.model}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter model"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">RAM</label>
                    <input
                        type="text"
                        name="ram"
                        value={formState.ram}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter RAM"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Storage Capacity</label>
                    <input
                        type="text"
                        name="storageCapacity"
                        value={formState.storageCapacity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter storage capacity"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Serial Number</label>
                    <input
                        type="text"
                        name="serialNumber"
                        value={formState.serialNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter serial number"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Operating System</label>
                    <input
                        type="text"
                        name="operatingSystem"
                        value={formState.operatingSystem}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter operating system"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">License of OS</label>
                    <input
                        type="text"
                        name="licenceOfOS"
                        value={formState.licenceOfOS}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter license of OS"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">PC Architecture</label>
                    <input
                        type="text"
                        name="pcArchitecture"
                        value={formState.pcArchitecture}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter PC architecture"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Host Name</label>
                    <input
                        type="text"
                        name="hostName"
                        value={formState.hostName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter host name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Is Admin Structure There?</label>
                    <input
                        type="text"
                        name="isAdminStructureThere"
                        value={formState.isAdminStructureThere}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter if admin structure is present"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">IP Address</label>
                    <input
                        type="text"
                        name="ipAddress"
                        value={formState.ipAddress}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter IP address"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">MAC Address</label>
                    <input
                        type="text"
                        name="macAddress"
                        value={formState.macAddress}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter MAC address"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Purchase Date</label>
                    <input
                        type="date"
                        name="purchaseDate"
                        value={formState.purchaseDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Warranty Date</label>
                    <input
                        type="date"
                        name="warrantyDate"
                        value={formState.warrantyDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="flex space-x-36 text-center">
                    <button 
                        type="submit" 
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                    >
                        Add Asset
                    </button>
                    <button 
                        onClick={backToHome}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
    
    
    
};


export default AddAssetComponent;
