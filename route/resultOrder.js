const SattaKingResultOrder = require("../model/resultmasterModel");

const router = require("express").Router()

router.post("/", async (req, res) => {
    try {
        // Always one single document
        const updatedDoc = await SattaKingResultOrder.findOneAndUpdate(
            {},              // query (empty → match first document)
            req.body,        // data from client
            { new: true, upsert: true } // upsert → create if not exists
        );

        res.json(updatedDoc);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await SattaKingResultOrder.findOne({});
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router