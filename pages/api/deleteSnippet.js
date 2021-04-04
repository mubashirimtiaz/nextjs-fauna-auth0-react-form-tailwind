import { deleteSnippet, getSnippetById } from "../../utils/Fauna";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(req, res) {
  const session = getSession(req, res);
  const userId = session.user.sub;

  if (req.method !== "DELETE") {
    return res.status(405).json({ msg: "Method not allowed" });
  }

  const { id } = req.body;
  const existingRecord = await getSnippetById(id);
  if (!existingRecord || existingRecord.data.userId !== userId) {
    return res.status(404).json({ msg: "Record not Found" });
  }
  try {
    const deletedSnippet = await deleteSnippet(id);
    return res.status(201).json(deletedSnippet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong." });
  }
});
