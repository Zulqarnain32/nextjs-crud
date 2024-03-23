import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
   title: {
    type: String 
   },
   description: {
    type: String 
   }
});
const TopicModel = mongoose.models.Topic || mongoose.model("Topic", TopicSchema);

export default TopicModel;
