# Traveller: The Ultimate Travel Itinerary Community

Traveller is a modern, full-stack web application designed to make travel planning intuitive, collaborative, and inspiring. Built with the latest web technologies, it allows users to create detailed, day-by-day itineraries, discover trips shared by a community of travelers, and plan group adventures seamlessly.



## ✨ Key Features

* **Secure User Authentication**: Complete sign-up and sign-in flow using email and password, powered by **Auth.js (Next-Auth v5)**.
* **Intuitive Itinerary Builder**: Users can create detailed, multi-day travel plans, adding activities, accommodations, transport, notes, and costs.
* **Interactive UI**: A beautiful, responsive interface with smooth animations and transitions, built with **Framer Motion**.
* **Community Discovery**: Explore a collection of public itineraries created by other travel enthusiasts to find inspiration for your next trip.
* **Dark & Light Mode**: A stunning, user-toggleable dark mode experience, built with **`next-themes`** and Tailwind CSS.
* **Robust Form Handling**: Secure and user-friendly forms with client-side and server-side validation using **React Hook Form** and **Zod**.
* **Full-Stack Architecture**: A modern, monolithic application structure leveraging **Next.js API Routes** for all backend logic.

## 🛠️ Tech Stack

This project is built with a modern, type-safe, full-stack JavaScript toolkit:

* **Framework**: [Next.js](https://nextjs.org/) 14+ (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Authentication**: [Auth.js (Next-Auth v5)](https://authjs.dev/)
* **Database**: [MongoDB](https://www.mongodb.com/)
* **ODM**: [Mongoose](https://mongoosejs.com/)
* **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
* **API Requests**: [Axios](https://axios-http.com/)
* **UI Animation**: [Framer Motion](https://www.framer.com/motion/)
* **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js (v18.17 or later)
* npm, yarn, or pnpm
* A MongoDB database instance (you can get a free one from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/traveller.git](https://github.com/your-username/traveller.git)
    cd traveller
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of your project and add the following variables:

    ```.env.local
    # A secret key for Auth.js to encrypt tokens.
    # Generate one with: openssl rand -hex 32
    AUTH_SECRET="your-super-strong-secret-here"
    
    # Your MongoDB connection string.
    MONGODB_URI="mongodb+srv://<user>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
