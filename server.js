"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Set up Express
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// JSON file to store the requests
const DATA_FILE = path_1.default.join(__dirname, 'requests.json');
// Utility to read the JSON file
const readDataFile = () => {
    if (!fs_1.default.existsSync(DATA_FILE)) {
        fs_1.default.writeFileSync(DATA_FILE, JSON.stringify([]));
    }
    const data = fs_1.default.readFileSync(DATA_FILE);
    return JSON.parse(data.toString());
};
// Utility to write to the JSON file
const writeDataFile = (data) => {
    fs_1.default.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};
// Helper function to generate unique ID
const generateId = () => {
    return Math.random().toString(36).substring(2, 10);
};
// GET /requests - Retrieve all requests sorted by priority
app.get('/requests', (req, res) => {
    const requests = readDataFile();
    requests.sort((a, b) => a.priority - b.priority); // Sort by priority (lower number means higher priority)
    res.json(requests);
});
// GET /requests/:id - Retrieve a specific request by its ID
app.get('/requests/:id', (req, res) => {
    const requests = readDataFile();
    const request = requests.find(r => r.id === req.params.id);
    if (request) {
        res.json(request);
    }
    else {
        res.status(404).json({ message: 'Request not found' });
    }
});
// POST /requests - Add a new service request
app.post('/requests', (req, res) => {
    const requests = readDataFile();
    const newRequest = {
        id: generateId(),
        guestName: req.body.guestName,
        roomNumber: req.body.roomNumber,
        requestDetails: req.body.requestDetails,
        priority: req.body.priority,
        status: 'received' // Default status
    };
    requests.push(newRequest);
    writeDataFile(requests);
    res.status(201).json(newRequest);
});
// PUT /requests/:id - Update an existing request's details or priority
app.put('/requests/:id', (req, res) => {
    const requests = readDataFile();
    const requestIndex = requests.findIndex(r => r.id === req.params.id);
    if (requestIndex !== -1) {
        const updatedRequest = Object.assign(Object.assign({}, requests[requestIndex]), req.body);
        requests[requestIndex] = updatedRequest;
        writeDataFile(requests);
        res.json(updatedRequest);
    }
    else {
        res.status(404).json({ message: 'Request not found' });
    }
});
// DELETE /requests/:id - Remove a completed or canceled request
app.delete('/requests/:id', (req, res) => {
    let requests = readDataFile();
    requests = requests.filter(r => r.id !== req.params.id);
    writeDataFile(requests);
    res.json({ message: 'Request deleted' });
});
// POST /requests/:id/complete - Mark a request as completed
app.post('/requests/:id/complete', (req, res) => {
    const requests = readDataFile();
    const requestIndex = requests.findIndex(r => r.id === req.params.id);
    if (requestIndex !== -1) {
        requests[requestIndex].status = 'completed';
        writeDataFile(requests);
        res.json(requests[requestIndex]);
    }
    else {
        res.status(404).json({ message: 'Request not found' });
    }
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
