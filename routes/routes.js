const express = require('express');
const router = express.Router();
const { createData, getData, updateData, deleteData } = require('./dataController');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const Data = require('../models/exchangeData')
// Swagger options
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Scale-x Finance Assignment API",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
      },
      servers: [
        {
          url: "http://localhost:3001",
        },
      ],
    },
    apis: ['./routes/routes.js'], // Assuming this file is named routes.js and located in the routes folder
};
const specs = swaggerJsdoc(options);

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(specs));


/**
 * @swagger
 * /data:
 *   post:
 *     summary: Create a new data entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Data'
 *     responses:
 *       200:
 *         description: Successfully created data
 *       500:
 *         description: Internal server error
 */
router.post('/data', async (req, res) => {
    try {
        const newData = await createData(req.body);
        res.json({"message": "user created successfully"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all data
/**
 * @swagger
 * /data:
 *   get:
 *     summary: Get all data entries
 *     responses:
 *       200:
 *         description: Successfully retrieved data
 *       500:
 *         description: Internal server error
 */
router.get('/data', async (req, res) => {
    try {
        const data = await getData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update data
/**
 * @swagger
 * /data/{id}:
 *   put:
 *     summary: Update a data entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the data entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Data'
 *     responses:
 *       200:
 *         description: Successfully updated data
 *       500:
 *         description: Internal server error
 */
router.put('/data/:id', async (req, res) => {
    try {
        const updatedData = await updateData(req.params.id, req.body);
        res.json(updatedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete data
/**
 * @swagger
 * /data/{id}:
 *   delete:
 *     summary: Delete a data entry by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the data entry
 *     responses:
 *       200:
 *         description: Successfully deleted data
 *       500:
 *         description: Internal server error
 */
router.delete('/data/:id', async (req, res) => {
    try {
        const result = await deleteData(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
