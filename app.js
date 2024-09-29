// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const express_1 = __importDefault(require("express"));
// const fs_1 = __importDefault(require("fs"));
// const path_1 = __importDefault(require("path"));
// // Set up Express
// const app = (0, express_1.default)();
// const port = 3000;
// app.use(express_1.default.json());
// // JSON file to store the requests
// const DATA_FILE = path_1.default.join(__dirname, 'requests.json');
// // Utility to read the JSON file
// const readDataFile = () => {
//     if (!fs_1.default.existsSync(DATA_FILE)) {
//         fs_1.default.writeFileSync(DATA_FILE, JSON.stringify([]));
//     }
//     const data = fs_1.default.readFileSync(DATA_FILE);
//     return JSON.parse(data.toString());
// };
// // Utility to write to the JSON file
// const writeDataFile = (data) => {
//     fs_1.default.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
// };
// // Helper function to generate unique ID
// const generateId = () => {
//     return Math.random().toString(36).substring(2, 10);
// };
