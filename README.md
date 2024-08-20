# Backend Overview of Code Infinity
# :rocket: [Live Preview](https://code-infinity.vercel.app/)

The backend of Code Infinity is responsible for handling the core functionality of the platform, including user authentication, course management, payment processing, and data storage. It is built using Node.js and Express.js, and it interacts with a MongoDB database to manage user data and course content. Below is a detailed explanation of the backend components.

### Key Components of the Backend

#### 1. **User Authentication and Authorization**

   - **JWT (JSON Web Tokens):** Used for secure authentication. JWT tokens are issued upon user login and are required for accessing protected routes.
   - **Bcrypt:** Used to hash user passwords before storing them in the database, ensuring password security.
   - **OTP Verification:** The platform supports OTP (One-Time Password) verification for additional security during user registration or password recovery.
   - **Roles:** Users are categorized into different roles, such as students and instructors, with different levels of access and permissions.

#### 2. **Course Management**

   - **CRUD Operations:** Instructors can create, read, update, and delete courses. This includes managing course content such as video lectures, documents, and quizzes.
   - **Markdown Formatting:** Course content can be written and stored in Markdown format, making it easy to render on the front-end.
   - **Course Rating:** Students can rate and provide feedback on courses they have completed.

#### 3. **Payment Integration**

   - **Razorpay Integration:** The backend integrates with Razorpay for handling payments. Students can purchase courses, and the backend processes these transactions securely.
   - **Order Management:** The backend handles the creation and management of orders, ensuring that transactions are properly recorded and associated with the correct users and courses.

#### 4. **Cloud-based Media Management**

   - **Cloudinary:** The platform uses Cloudinary for managing media content, including images, videos, and documents. Cloudinary provides scalable and secure storage, as well as optimization features for media delivery.
   - **Media Uploads:** The backend handles the upload of media files to Cloudinary, storing references to these files in the MongoDB database.

### Backend Structure

#### 1. **Routes**

   - **Auth Routes:** Handle user authentication, including login, registration, OTP verification, and password reset.
   - **Course Routes:** Manage course-related operations such as creating, updating, deleting, and retrieving course details.
   - **Payment Routes:** Manage payment processing and order management using Razorpay.
   - **User Routes:** Manage user profiles, including updating profile information and retrieving user details.

#### 2. **Controllers**

   - **Auth Controller:** Contains the logic for user authentication and authorization processes.
   - **Course Controller:** Manages the logic for course-related operations, including handling media uploads, processing Markdown content, and interacting with the database.
   - **Payment Controller:** Manages the payment flow, including creating orders, verifying payments, and handling Razorpay integration.
   - **User Controller:** Contains the logic for managing user data, including profile updates and fetching user-specific information.

#### 3. **Models**

   - **User Model:** Represents the user schema in MongoDB, including fields such as `name`, `email`, `password`, `role`, and `courses`.
   - **Course Model:** Represents the course schema, including fields for `title`, `description`, `instructor`, `content`, `media`, and `ratings`.
   - **Order Model:** Represents the order schema, storing transaction details and associating them with the relevant users and courses.

#### 4. **Middleware**

   - **Authentication Middleware:** Ensures that routes requiring authentication are protected, verifying JWT tokens before allowing access.
   - **Authorization Middleware:** Checks user roles to ensure that only authorized users (e.g., instructors) can perform certain actions like creating or modifying courses.

### Database Schema

- **User Schema:** Contains user information such as name, email, password, and role. It also stores references to the courses a user has enrolled in or created.
- **Course Schema:** Stores course-related information, including the instructor, course content (text, videos, documents), and ratings.
- **Order Schema:** Stores payment and transaction details, associating orders with specific users and courses.

## API Design

The StudyNotion platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE.

For detailed API documentation and endpoints, refer to the [API Documentation](https://www.notion.so/ankitmalik/API-Design-Of-Code-Infinity-WebSite-be8f811ac5c84f938508d6e395e81efc?pvs=4).

### Configuration

To run the backend locally:

1. **Environment Variables:** Set up a `.env` file with the following environment variables:
   - `MONGODB_URI`: Your MongoDB connection string.
   - `JWT_SECRET`: A secret key for signing JWT tokens.
   - `RAZORPAY_KEY_ID`: Your Razorpay key ID.
   - `RAZORPAY_KEY_SECRET`: Your Razorpay key secret.
   - `CLOUDINARY_URL`: Your Cloudinary URL for media uploads.

2. **Dependencies:** Install the required dependencies using `npm install`.

### Running the Backend

1. **Start the Backend Server:** Run `npm start` to start the Node.js server.
2. **Accessing API Endpoints:** The backend will be accessible at `http://localhost:5000` (or the port specified in your environment configuration).

This setup ensures a robust and scalable backend for the Code Infinity platform, handling everything from user authentication to course management and payment processing.

### For Deployment Guide On AWS

For detailed instructions on how to deploy this project on an AWS EC2 instance, please refer to the [EC2 Deployment Guide](EC2_Deployment_Guide.md).
