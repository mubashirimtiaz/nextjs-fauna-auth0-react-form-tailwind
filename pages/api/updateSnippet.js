import { updateSnippet } from "../../utils/Fauna";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
export default withApiAuthRequired(async function handler(req, res) {
  const session = getSession(req, res);
  if (req.method !== "PUT") {
    return res.status(405).json({ msg: "Method not allowed" });
  }
  const { id, code, language, description, name } = req.body;

  try {
    //TODO: update snippet
    const updatedSnippet = await updateSnippet(
      id,
      code,
      language,
      name,
      description
    );
    return res.status(201).json(updatedSnippet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong." });
  }
});
