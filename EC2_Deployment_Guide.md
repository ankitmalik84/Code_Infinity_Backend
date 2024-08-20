# EC2 Deployment Guide for Code_Infinity_Backend

This guide explains how to deploy the `Code_Infinity_Backend` on an AWS EC2 instance with minimum configurations....

### 1. Launching a New EC2 Instance

1. **Sign in to AWS Console**: Go to the [AWS Management Console](https://aws.amazon.com/console/) and sign in.
2. **Navigate to EC2**: From the console, navigate to the EC2 dashboard.
3. **Click on "Launch Instance"**: Begin the process of launching a new EC2 instance.
4. **Instance Name**: Give your instance a name (e.g., `CodeInfinityBackendServer`).
5. **Choose an Amazon Machine Image (AMI)**:
   - Select an OS, preferably Ubuntu 24.04 LTS or similar.
6. **Instance Type**:
   - Choose a `t2.micro` instance type (eligible for free tier).
7. **Key Pair**:
   - Create a new key pair (e.g., `your-key.pem`). Download and securely store it as you’ll need it to SSH into your instance.
8. **Network Settings**:
   - Allow inbound traffic on `HTTP (80)` and `HTTPS (443)`.
   - Additionally, open a custom port `4000` for your application.
9. **Storage**:
   - Leave the default settings (8 GB is generally sufficient for a basic deployment).
10. **Launch**:
    - Review your settings and launch the instance.

### 2. Connecting to Your EC2 Instance

1. **Open Terminal** (Linux/Mac) or **PowerShell** (Windows).
2. **Navigate to the Directory** where your key file is located:
   ```bash
   cd path_to_your_key_file
   ```
3. **SSH into the EC2 Instance**:
   ```bash
   ssh -i "ankit-key.pem" ubuntu@your-ec2-public-ip
   ```
   Replace `your-ec2-public-ip` with the actual public IP of your EC2 instance.

### 3. Setting Up the Server

1. **Update and Install Node.js & NPM**:
   ```bash
   sudo apt update
   sudo apt install nodejs
   sudo apt install npm
   ```
2. **Clone Your GitHub Repository**:
   ```bash
   git clone https://github.com/ankitmalik84/Code_Infinity_Backend.git
   ```
3. **Navigate to the Project Directory**:
   ```bash
   cd Code_Infinity_Backend/server
   ```
4. **Install Project Dependencies**:
   ```bash
   npm install
   ```

### 4. Configuring Environment Variables

1. **Set Environment Variables**:
   ```bash
   export RAZORPAY_KEY="your_razorpay_key"
   export RAZORPAY_KEY_SECRET="your_razorpay_key_secret"
   export MONGODB_URL="your_mongodb_url"
   export JWT_SECRET="your_jwt_secret"
   export FOLDER_NAME="your_folder_name"
   export CLOUD_NAME="your_cloud_name"
   export API_SECRET="your_api_secret"
   export API_KEY="your_api_key"
   ```

### 5. Running the Application

1. **Start the Server**:
   ```bash
   npm run dev
   ```
2. **Access the Application**:
   - Open your browser and navigate to `http://your-ec2-public-ip:4000`.

### 6. Configuring Security Group for Port 4000

1. **Go to EC2 Dashboard**.
2. **Select your Instance** and go to the **Security Tab**.
3. **Edit Inbound Rules**:
   - Add a new rule:
     - **Type**: Custom TCP
     - **Port Range**: 4000
     - **Source**: 0.0.0.0/0 (or your specific IP)
   - **Save**.

### 7. Stopping and Restarting the Server

- **Stop Server**:
  ```bash
  ctrl + c
  ```
- **Restart Server**:
  ```bash
  npm run dev
  ```

### 8. Additional Notes

- **Persistent Environment Variables**: To make environment variables persistent across sessions, consider adding them to a `.env` file or your shell profile (`~/.bashrc` or `~/.bash_profile`).
- **Monitoring**: Keep an eye on resource usage, and scale up the instance if necessary.

