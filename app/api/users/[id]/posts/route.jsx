import { connectToDB } from "@utils/database";
import Entry from "@models/entry";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const entries = await Entry.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(entries), { status: 200 });
  } catch (error) {
    return new Response("Failed to load entry", { status: 500 });
  }
};
