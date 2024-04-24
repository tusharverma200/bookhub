import Query from "../model/query.model.js";

export const getQuery = async (req, res) => {
    try {
        const { name, email, message } = req.body
        const userMessage = new Query({
            name: name,
            email: email,
            message: message

        })
        await userMessage.save()
        res.status(200).json({ massage: "sent successfully" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};