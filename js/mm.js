 // connect to Moralis server
 Moralis.initialize("aYe2UDCqRqgpINaRgIRTV8MGhilipR5TfSlWL2Cr");
 Moralis.serverURL = "https://6nfrimixgufy.usemoralis.com:2053/server";

 // add from here down
 async function login() {
   let user = Moralis.User.current();
   if (!user) {
     user = await Moralis.Web3.authenticate();
   }
   console.log("logged in user:", user);
 }

 async function logOut() {
   await Moralis.User.logOut();
   console.log("logged out of wallet");
 }




 // functionality below 

 // New group chat feature
 async function newGroupChat(){
    alert("Create new group chat room name " + document.getElementById("group-name-text").value);

   let chatTitle = document.getElementById("group-name-text").value;

   const Chats = Moralis.Object.extend("Chats");
   const chat = new Chats();
   chat.set("title", chatTitle);
   chat.save();

   console.log('created chat with title ' + chatTitle);
   
 }

 async function getGroupChats(){
    const Chats = Moralis.Object.extend("Chats");
    const query = new Moralis.Query(Chats);
    const results = await query.find();

    const roomList = document.getElementById("roomList");

    for (let i = 0; i < results.length; i++) {
        const object = results[i];
        alert(object.id + ' - ' + object.get('title'))
        
    }

    console.log("all group chats: ")
    console.log(results)
 }
 getGroupChats();




 document.getElementById("btn-login").onclick = login;
 document.getElementById("btn-logout").onclick = logOut;
 document.getElementById("btn-new-group-chat").onclick = newGroupChat;