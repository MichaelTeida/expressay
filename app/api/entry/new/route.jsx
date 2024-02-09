import { connectToDB} from "@utils/database";
import Entry from "@models/entry";

export const POST = async (req) => {
    const { userId, entry, tag } = await req.json()

    try {
        await connectToDB
        const newEntry = new Entry({creator: userId, entry, tag})

        await newEntry.save()

        return new Response(JSON.stringify(newEntry), {status: 201})
    } catch (error) {
        return new Response('Failed to create a new entry', { status: 500 })
    }
}