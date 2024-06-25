# Tafukut

Welcome to **Tafukut**, the world’s leading platform for interactive coding tutorials. Built with PHP Laravel and React, our mission is to empower aspiring developers and seasoned professionals alike by providing a comprehensive and engaging learning experience.

## Features

- **Interactive Learning**: Boost your coding skills with interactive lessons that allow you to write, run, and debug code in real-time.
- **Engaging Tutorials**: Learn by doing with hands-on coding exercises that guide you step-by-step through each concept.
- **Real-Time Code Editing**: Get instant feedback and guidance as you code, making learning more effective and enjoyable.

## Technology Stack

- **Backend**: PHP Laravel
- **Frontend**: React
- **Database**: MySQL
- **Others**: HTML, CSS, JavaScript

## Getting Started

### Prerequisites

- PHP >= 7.4
- Composer
- Node.js
- npm or yarn
- MySQL or PostgreSQL

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/bwissal13/tafukut.git
    cd tafukut
    ```

2. **Backend Setup**:
    - Install dependencies:
        ```bash
        composer install
        ```
    - Copy `.env.example` to `.env` and configure your database settings:
        ```bash
        cp .env.example .env
        ```
    - Generate application key:
        ```bash
        php artisan key:generate
        ```
    - Run migrations:
        ```bash
        php artisan migrate
        ```
    - Seed the database (optional):
        ```bash
        php artisan db:seed
        ```

3. **Frontend Setup**:
    - Navigate to the frontend directory:
        ```bash
        cd frontend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Build the frontend assets:
        ```bash
        npm run dev
        ```

4. **Run the application**:
    - Start the backend server:
        ```bash
        php artisan serve
        ```
    - Access the application at `http://localhost:5173`

---