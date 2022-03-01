
(function launch(){
let user = Moralis.User.current();
if (!user) {
    console.log("Please Connect Wallet. Thanks!")
}
else{
    console.log(user.get('ethAddress') + " " + "logged in.")
    game = new Phaser.Game(config);
}
})()
