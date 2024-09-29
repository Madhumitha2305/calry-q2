# Hotel Room Service Request API (No Database, No Auth)


## Objective:
Develop a comprehensive set of RESTful APIs designed specifically for managing and prioritizing hotel room service requests. You will create a backend system that utilizes JSON files for temporary data storage, facilitating the efficient handling of requests based on urgency and guest status. In real-world application, it helps hotel staff manage room service operations effectively, ensuring that urgent and high-priority requests are serviced promptly to enhance guest satisfaction and operational efficiency.

## Project Description:
### API Design:
Design RESTful APIs to create, update, retrieve, and delete room service requests.  
The service requests has following fields - id: string; guestName: string; roomNumber: number; requestDetails: string; priority: number; // Lower numbers indicate  
 higher priority, status: 'received' | 'in progress' | 'awaiting confirmation' | 'completed' | 'canceled'  
Implement sorting functionality in the API to prioritize requests based on urgency and guest status.  
### JSON Data Storage Handling:
Use JSON files to store room service request data temporarily. Operations will read from and write to these files as needed, ensuring that these can handle reading and writing operations safely when accessed by multiple users.  
Consider using a locking mechanism or managing access through a queuing system.  
### API Endpoints:
POST /requests to add a new service request.  
GET /requests to retrieve all requests, showing them sorted by priority.  
GET /requests/{id} to retrieve a specific request by its ID.  
PUT /requests/{id} to update details or the priority of an existing request.  
DELETE /requests/{id} to remove a completed or canceled request.  
POST /requests/{id}/complete to mark a request as completed.  
### Example Scenarios:  
Manually test the API using tools like Postman or through command-line tools like cURL. Test adding requests, updating their status or priority, retrieving sorted  
lists, and deleting requests.
