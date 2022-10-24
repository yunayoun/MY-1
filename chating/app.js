const express = require("express");
const { exit } = require("process");
const app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("chat");
});
//io.on 안에 말고 밖에놓기
var client_list = {};

io.on("connection", function (socket) {
  io.emit("notice", socket.id);

  //본인이 보내고 싶은 클라이언트의 id를 to 안에 쓰면 해당하는 사람한테만 emit 할 수 있음
  //io.to(소켓 아이디).emit()

  socket.on("sending", (data) => {
    // msg 받아서 전체 클라이언트한테 전송
    console.log(data);
    if (data.dm == "all") {
      io.emit("send", data.msg);
    } else {
      io.to(data.dm).emit("send", data.msg);
      socket.emit("send", data.msg);
    }
  });

  // socket.on("sending", (msg)=>{
  //     // msg 받아서 전체 클라이언트한테 전송
  //     io.emit("send", msg);
  // })

  socket.on("new-user", (nickname) => {
    console.log("리스트", Object.values(client_list));
    // 배열에서 내가원하는 값의 존재여부를 확인할 수 있는 함수 : arr.indexOf()
    // [123,2,3,54,5,2].indexOf(1) = -1
    if (Object.values(client_list).indexOf(nickname) > -1) {
      socket.emit("err", "중복되는 닉네임입니다.");
    } else {
      client_list[socket.id] = nickname;
      console.log(client_list);
      socket.emit("success", "입장성공");
      io.emit("update", nickname);
      io.emit("clientUpdate", client_list);
    }
  });

  // 나갈때마다 삭제되는코드
  socket.on("disconnect", () => {
    delete client_list[socket.id];
    io.emit("clientUpdate", client_list);
  });
});

// socket.on('exit-user',(username)=>{
//   socket.broadcast.emit('update',username);
// });

//on일때는 함수로받아라

http.listen(8000, () => {
  console.log("Server Port : ", 8000);
});
