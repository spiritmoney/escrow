import { NextApiRequest, NextApiResponse } from "next";

export async function signUp(
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  country: string,
  userType: string
) {
  // Implement your signup logic here
  // This could involve creating a new user in your database
  // For now, we'll just return a mock user object
  return {
    id: "new-user-id",
    name: `${firstName} ${lastName}`,
    email,
    phoneNumber,
    country,
    userType,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, phoneNumber, email, country, userType } = req.body;

  try {
    const user = await signUp(
      firstName,
      lastName,
      phoneNumber,
      email,
      country,
      userType
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
}
