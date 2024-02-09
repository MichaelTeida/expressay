import { connectToDB} from "@utils/database";

export const POST = async (req) => {
    const { usetId, entry, tag } = await req.json()

    try {
        await connectToDB
    } catch (error) {

    }
}