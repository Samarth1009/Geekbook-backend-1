const { MongoClient } = require("mongodb");
const app = express();

app.use(express.json());

const uri =
  "mongodb+srv://noobdev:coder2020@cluster0.lf5dh.mongodb.net/Authentication?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  client.close();
});

app.listen(3000, () => {
  console.log("Server is running...");
});
