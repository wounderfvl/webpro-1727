# Webpro-1727

This project is a simple full-stack project consisting of a backend and frontend. The backend uses Node.js and Express, while the frontend uses Vite + React.

**Web Programming '23 Project** by **Dahayu Azhka Daeshawnda (10231027)** and **Ansellma Tita Pakartiwuri Putri (10231017).**

## How to Run the Project

### Prerequisites
Before running this project, make sure you have installed:
- Node.js (version 16 or higher)
- npm (Node Package Manager)

### Usage Steps

#### 1. Clone the Repository
Clone this repository to your local computer:
```bash
git clone https://github.com/wounderfvl/webpro-1727.git
cd webpro-1727
```

#### 2. Install Dependencies
Install all required dependencies for both backend and frontend:

backend
```bash
cd backend
npm install
```

frontend
```bash
cd frontend/eccomerce-frontend
npm install
```

#### 3. Run the Backend Application
Run the backend using the following command in the project root directory:
```bash
node index.js
```
The backend will run on the default port. Access it at:
```
http://localhost:3001
```

#### 4. Run the Frontend Application
To run the frontend in development mode:
```bash
npm run dev
```
The frontend will run on the default port. Access it at:
```
http://localhost:5173
```

## API Endpoint List
Below is a list of available API endpoints in the backend:

### 1. **GET /api/produk**
   - **Description**: Retrieves a list of all products.
   - **Example Response**:
     ```json
     [
       {"id":3,"nama":"Azhka","harga":0},
       {"id":4,"nama":"Ansel","harga":0}
     ]
     ```

### 2. **POST /api/products**
   - **Description**: Adds a new product.
   - **Request Body**:
     ```json
     {
       "name": "Azhka",
       "harga": "0"
     }
     ```
   - **Example Response**:
     ```json
     {
       "id": 3,
       "name": "Azhka",
       "harga": "0"
     }
     ```

### 3. **GET /api/products/:id**
   - **Description**: Retrieves product details by ID.
   - **Example Response**:
     ```json
     {
       "id": 1,
       "name": "Alhaitham",
       "harga": "0"
     }
     ```

### 4. **PUT /api/products/:id**
   - **Description**: Updates product data by ID.
   - **Request Body**:
     ```json
     {
       "name": "Alhaitham C6R5",
       "harga": "0"
     }
     ```
   - **Example Response**:
     ```json
     {
       "id": 1,
       "name": "Alhaitham C6R5",
       "harga": "0"
     }
     ```

### 5. **DELETE /api/products/:id**
   - **Description**: Deletes a product by ID.
   - **Example Response**:
     ```json
     {
       "message": "Product deleted successfully"
     }
     ```

## Contribution
We welcome contributions! If you would like to contribute, please submit a pull request with a clear explanation of the changes you propose.

If you have any questions or need assistance, feel free to open an issue in this repository.