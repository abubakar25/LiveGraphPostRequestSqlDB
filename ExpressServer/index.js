var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello abubakar!");
});

app.get("/sendfile", function (req, res) {
  res.sendFile("test.html", { root: __dirname });
});

app.get("/sendjson", function (req, res) {
  res.send({ id: 1, name: "abubakar" });
});

app.get("/jsonobject", function (req, res) {
  res.json({ id: 1, name: "abubakar" });
});
app.get("/jsonArrayOfObject", function (req, res) {
  res.json([
    { id: 2, name: "abc" },
    { id: 3, name: "bcd" },
    { id: 4, name: "def" },
  ]);
});

// app.get("/dashboardTesting", function (req, res) {
//   res.json({
//     PlacedOrders: {
//       id: 1,
//       status: "Placed",
//       value: 13,
//       date: new Date().toLocaleString(),
//       userName: "Abubakar",
//       userRole: "Admin",
//       DateAndTime: {
//         id: 1,
//         date: new Date().toLocaleString(),
//         userName: "Ali",
//         userRole: "Admin",
//       },
//     },
//     ConfirmedOrders: {
//       id: 2,
//       status: "Confirmed",
//       value: 7,
//       date: new Date().toLocaleString(),
//       userName: "Abubakar",
//       userRole: "Admin",
//       DateAndTime: {
//         id: 1,
//         date: new Date().toLocaleString(),
//         userName: "Ali",
//         userRole: "Admin",
//       },
//     },
//     CompletedOrders: {
//       id: 3,
//       status: "Completed",
//       value: 12,
//       date: new Date().toLocaleString(),
//       userName: "Abubakar",
//       userRole: "Admin",
//     },
//     CanceledOrders: {
//       id: 4,
//       status: "Canceled",
//       value: 4,
//       date: new Date().toLocaleString(),
//       userName: "Abubakar",
//       userRole: "Admin",
//     },
//     // DateAndTime: {
//     //   id: 1,
//     //   date: new Date().toLocaleString(),
//     //   userName: "Ali",
//     //   userRole: "Admin",
//     // },
//   });
// });

// app.get("/dashboardTesting", function (req, res) {
//   res.json({
//     statusHistory: {
//       Initiated: {
//         at: new Date(),
//         by: {
//           uid: 1000,
//           firstName: "abubakar",
//           lastName: "saddique",
//           email: "Admin@test.com",
//           address: "lahore",
//           phone: "03330688270",
//           paymentMethod: "Cash on Delivery",
//           role: "admin",
//         },
//       },
//       Acknowledge: {
//         at: new Date(),
//         // by: {
//         //   uid: 1000,
//         //   firstName: "abubakar",
//         //   lastName: "saddique",
//         //   email: "Admin@test.com",
//         //   address: "lahore",
//         //   phone: "03330688270",
//         //   paymentMethod: "Cash on Delivery",
//         //   role: "admin",
//         // },
//       },
//       Acknowledge: {
//         at: new Date(),
//         by: {
//           uid: 1000,
//           firstName: "abubakar",
//           lastName: "saddique",
//           email: "Admin@test.com",
//           address: "lahore",
//           phone: "03330688270",
//           paymentMethod: "Cash on Delivery",
//           role: "admin",
//         },
//       },
//       Assigned: {
//         at: new Date(),
//         by: {
//           uid: 1000,
//           firstName: "abubakar",
//           lastName: "saddique",
//           email: "Admin@test.com",
//           address: "lahore",
//           phone: "03330688270",
//           paymentMethod: "Cash on Delivery",
//           role: "admin",
//         },
//       },
//       InProgress: {
//         at: new Date(),
//         by: {
//           uid: 1000,
//           firstName: "abubakar",
//           lastName: "saddique",
//           email: "Admin@test.com",
//           address: "lahore",
//           phone: "03330688270",
//           paymentMethod: "Cash on Delivery",
//           role: "admin",
//         },
//       },
//       Completed: {
//         at: new Date(),
//         by: {
//           uid: 1000,
//           firstName: "abubakar",
//           lastName: "saddique",
//           email: "Admin@test.com",
//           address: "lahore",
//           phone: "03330688270",
//           paymentMethod: "Cash on Delivery",
//           role: "admin",
//         },
//       },
//       Disapproved: {
//         at: new Date(),
//         by: {
//           uid: 1000,
//           firstName: "abubakar",
//           lastName: "saddique",
//           email: "Admin@test.com",
//           address: "lahore",
//           phone: "03330688270",
//           paymentMethod: "Cash on Delivery",
//           role: "admin",
//         },
//       },
//       Canceled: {
//         at: new Date(),
//         by: {
//           uid: 1000,
//           firstName: "abubakar",
//           lastName: "saddique",
//           email: "Admin@test.com",
//           address: "lahore",
//           phone: "03330688270",
//           paymentMethod: "Cash on Delivery",
//           role: "admin",
//         },
//       },
//     },
//   });
// });

app.get("/dashboardTesting", function (req, res) {
  res.json({
    statusHistory: {
      Placed: {
        at: new Date(),
        by: {
          uid: 1000,
          firstName: "abubakar",
          lastName: "saddique",
          email: "Admin@test.com",
          address: "lahore",
          phone: "03330688270",
          paymentMethod: "Cash on Delivery",
          role: "admin",
        },
      },
      Confirmed: {
        at: new Date(),
        by: {
          uid: 1000,
          firstName: "abubakar",
          lastName: "saddique",
          email: "Admin@test.com",
          address: "lahore",
          phone: "03330688270",
          paymentMethod: "Cash on Delivery",
          role: "admin",
        },
      },
      Prepared: {
        at: new Date(),
        by: {
          uid: 1000,
          firstName: "abubakar",
          lastName: "saddique",
          email: "Admin@test.com",
          address: "lahore",
          phone: "03330688270",
          paymentMethod: "Cash on Delivery",
          role: "admin",
        },
      },
      Delivered: {
        at: new Date(),
        by: {
          uid: 1000,
          firstName: "abubakar",
          lastName: "saddique",
          email: "Admin@test.com",
          address: "lahore",
          phone: "03330688270",
          paymentMethod: "Cash on Delivery",
          role: "admin",
        },
      },
      Completed: {
        at: new Date(),
        // by: {
        //   uid: 1000,
        //   firstName: "abubakar",
        //   lastName: "saddique",
        //   email: "Admin@test.com",
        //   address: "lahore",
        //   phone: "03330688270",
        //   paymentMethod: "Cash on Delivery",
        //   role: "admin",
        // },
      },
      Canceled: {
        at: new Date(),
        by: {
          uid: 1000,
          firstName: "abubakar",
          lastName: "saddique",
          email: "Admin@test.com",
          address: "lahore",
          phone: "03330688270",
          paymentMethod: "Cash on Delivery",
          role: "admin",
        },
      },
      PlacedOrders: {
        id: 1,
        status: "Placed",
        value: 13,
        date: new Date().toLocaleString(),
        userName: "Abubakar",
        userRole: "Admin",
        DateAndTime: {
          id: 1,
          date: new Date().toLocaleString(),
          userName: "Ali",
          userRole: "Admin",
        },
      },
      ConfirmedOrders: {
        id: 2,
        status: "Confirmed",
        value: 7,
        date: new Date().toLocaleString(),
        userName: "Abubakar",
        userRole: "Admin",
        DateAndTime: {
          id: 1,
          date: new Date().toLocaleString(),
          userName: "Ali",
          userRole: "Admin",
        },
      },
      CompletedOrders: {
        id: 3,
        status: "Completed",
        value: 12,
        date: new Date().toLocaleString(),
        userName: "Abubakar",
        userRole: "Admin",
      },
      CanceledOrders: {
        id: 4,
        status: "Canceled",
        value: 4,
        date: new Date().toLocaleString(),
        userName: "Abubakar",
        userRole: "Admin",
      },
    },
  });
});

// app.get("/dashboardTesting", function (req, res) {
//   res.json([
//     { id: 1, status: "Placed Orders", value: 15 },
//     { id: 2, status: "Confirmed Orders", value: 2 },
//     { id: 3, status: "Completed Orders", value: 12 },
//     { id: 4, status: "Canceled Orders", value: 4 },
//   ]);
// });

app.get("*", function (req, res) {
  res.send("Hello world!");
});

app.listen(3000);

// "Initiated",
//   "Acknowledge",
//   "Assigned",
//   "InProgress",
//   "Completed",
//   "Approved",
//   "Disapproved",
//   "Canceled",
