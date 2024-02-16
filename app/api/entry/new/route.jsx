import { connectToDB } from "@utils/database";
import Entry from "@models/entry";

export const POST = async (req) => {
  try {
    await connectToDB;

    const { userId, entry, tag } = await req.json();

    const newEntry = new Entry({ creator: userId, entry, tag });

    await newEntry.save();

    return new Response(JSON.stringify(newEntry), {
      status: 201,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Failed to create a new entry", { status: 500 });
  }
};
