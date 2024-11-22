import { json, type ActionFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { connectToDatabase } from "~/utils/db.server";
import { User } from "~/models/User";

// Utility function to generate usernames
function generateUsername(name: string): string {
  const sanitized = name.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters
  const randomNumber = Math.floor(Math.random() * 10000); // Append a random number
  return `${sanitized}${randomNumber}`;
}

// Backend action to handle user creation
export const action: ActionFunction = async ({ request }) => {
  // Ensure the MongoDB connection is established
  await connectToDatabase();

  // Get form data from the request
  const formData = await request.formData();
  const name = formData.get("name");

  // Validate the input
  if (!name || typeof name !== "string") {
    return json({ error: "Name is required and must be a string." }, { status: 400 });
  }

  try {
    // Generate a unique username
    const user_name = generateUsername(name);

    // Create a new user instance
    const newUser = new User({ name, user_name });
    await newUser.save(); // Save the user to the database

    // Return a success response
    return json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    return json({ error: "Failed to create user." }, { status: 500 });
  }
};

// Frontend component for user creation
export default function CreateUser() {
  const fetcher = useFetcher(); // Use fetcher for handling the form submission

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    fetcher.submit(formData, { method: "post" });
  };

  return (
    <div className="min-h-screen py-24 container mx-auto">
      <h1 className="text-3xl font-semibold">Create User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg">Full Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Create User
        </button>
      </form>

      {fetcher.data && fetcher.data.message && (
        <p className="text-green-500 mt-4">{fetcher.data.message}</p>
      )}

      {fetcher.data && fetcher.data.error && (
        <p className="text-red-500 mt-4">{fetcher.data.error}</p>
      )}
    </div>
  );
}
