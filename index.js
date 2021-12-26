const app = express();

app.use(express.json());

const uri =
  "mongodb+srv://noobdev:coder2020@cluster0.lf5dh.mongodb.net/Geekbook?retryWrites=true&w=majority";

app.listen(3000, () => {
  console.log("Server is running...");
});
