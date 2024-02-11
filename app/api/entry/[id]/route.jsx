import { connectToDB } from "@utils/database";
import Entry from "@models/entry";

// GET (read)
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const entry = await Entry.findById(params.id).populate("creator");
    if (!entry) {
      return new Response("Entry not found", { status: 404 });
    }

    return new Response(JSON.stringify(entry), { status: 200 });
  } catch (error) {
    return new Response("Failed to load entry", { status: 500 });
  }
};

// PATCH (update)
export const PATCH = async (req, { params }) => {
  const { entry, tag } = await req.json();

  try {
    await connectToDB();

    const existingEntry = await Entry.findById(params.id);

    if (!existingEntry) {
      return new Response("Entry not found", { status: 404 });
    }
    existingEntry.entry = entry;
    existingEntry.tag = tag;

    await existingEntry.save();

    return new Response(JSON.stringify(existingEntry), { status: 200 });
  } catch (error) {
    return new Response("Failed to edit entry", { status: 500 });
  }
};

// DELETE (delete)
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Entry.findByIdAndDelete(params.id);

    return new Response("Entry deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete entry", { status: 500 });
  }
};
