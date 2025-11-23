const mongoose = require("mongoose")

const SattaKingResultOrderSchema = new mongoose.Schema({


    delhiLuckyBazar: {
        name: {
            type: String,
            default: "Delhi Lucky Bazar"
        },
        order: Number,
        isVerified:Boolean

    },
    disawer: {
        name: {
            type: String,
            default: "Disawer"
        },
        order: Number,
        isVerified:Boolean

    },
    faridabad: {
        name:  {
            type: String,
            default: "Faridabad"
        },
        order: Number,
        isVerified:Boolean

    },
    gaziyabad: {
        name:  {
            type: String,
            default: "Gaziyabad"
        },
        order: Number,
        isVerified:Boolean

    },
    kolkataKing: {
        name: {
            type: String,
            default: "Kolkata King"
        },
        order: Number,
        isVerified:Boolean

    },
    gali: {
        name: {
            type: String,
            default: "Gali"
        },
        order: Number,
        isVerified:Boolean

    },
    delhiBazar: {
        name: {
            type: String,
            default: "Delhi Bazar"
        },
        order: Number,
        isVerified:Boolean

    },
    shreeGanesh: {
        name: {
            type: String,
            default: "Shree Ganesh"
        },
        order: Number,
        isVerified:Boolean

    },
    luckpoti: {
        name: {
            type: String,
            default: "Luckpoti"
        },
        order: Number,
        isVerified:Boolean

    },
    sreeRam: {
        name: {
            type: String,
            default: "Sree Ram"
        },
        order: Number,
        isVerified:Boolean

    },
    dlb: {
        name: {
            type: String,
            default: "DLB"
        },
        order: Number,
        isVerified:Boolean

    }
}, { timestamps: true })

const SattaKingResultOrder = mongoose.model("SattaKingResultOrder", SattaKingResultOrderSchema)
module.exports = SattaKingResultOrder;