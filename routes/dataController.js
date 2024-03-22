const Data = require('../models/exchangeData.js');

// Create new data entry
async function createData(data) {
    console.log(data)
    try {
        const newData = await Data.create(data);
        // console.log(newData)
        return newData;
    } catch (error) {
        throw error;
    }
}

// Retrieve data
async function getData() {
    try {
        const data = await Data.find();
        return data;
    } catch (error) {
        throw error;
    }
}

// Update data
async function updateData(id, newData) {
    try {
        const updatedData = await Data.findByIdAndUpdate(id, newData, { new: true });
        return updatedData;
    } catch (error) {
        throw error;
    }
}

// Delete data
async function deleteData(id) {
    try {
        await Data.findByIdAndDelete(id);
        return { message: 'Data deleted successfully' };
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createData,
    getData,
    updateData,
    deleteData
};
