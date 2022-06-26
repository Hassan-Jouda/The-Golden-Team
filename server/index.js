import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import customerRoutes from "./routes/customer.js";
import workerRoutes from "./routes/worker.js";
import customer from "./models/customer.js";
import worker from "./models/worker.js";
const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://Hassan:059509@cluster0.pjcmnzm.mongodb.net/SwiftHouse?retryWrites=true&w=majority";

const PORT = 5000;

mongoose
  .connect(CONNECTION_URL, {
    //avoid warnings and errors
    useNewUrLParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`connection is established and running on port: ${PORT}`),
    ),
  )
  .catch((err) => console.log(err.message));
1;
app.use("/customer", customerRoutes);
app.use("/worker", workerRoutes);

app.post("/login", (req, res) => {
  customer.find({ email: req.body.email }, { password: 1 }).then((data) => {
    if (data.length === 0) {
      worker.find({ email: req.body.email }, { password: 1 }).then((data) => {
        if (data.length === 0) {
          return res.json({ status: "not found" }).status(404);
        } else {
          worker.findById(data[0]._id, (err, workerData) => {
            return res.json({
              status: "worker",
              data: workerData,
            });
          });
          // store worker findbyId data into a variable
        }
      });
    } else {
      customer.findById(data[0]._id, (err, customerData) => {
        return res.json({
          status: "customer",
          data: customerData,
        });
      });
    }
  });
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
