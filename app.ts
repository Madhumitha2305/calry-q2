import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

// Set up Express
const app = express();
const port = 3000;

app.use(express.json());

// JSON file to store the requests
const DATA_FILE = path.join(__dirname, 'requests.json');

// Utility to read the JSON file
const readDataFile = (): any[] => {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify([]));
    }
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data.toString());
};

// Utility to write to the JSON file
const writeDataFile = (data: any[]): void => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Helper function to generate unique ID
const generateId = (): string => {
    return Math.random().toString(36).substring(2, 10);
};
