const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const ForbiddenWordSchema = new mongoose.Schema(
    {
        word:{
            type: String,
            trim: true,
            required: true
        }
    }
)

ForbiddenWordSchema.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt : true });
module.exports = mongoose.model("Forum", ForbiddenWordSchema);