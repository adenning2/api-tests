const fetch = require("node-fetch2");

it("Should get a login token",async ()=>{

    let token = "";//this is an empty string
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "userName":"john.deere@deere.com",
            "password":"johnDeere1!"
        })
    }

    const response = await fetch('https://dev.stedi.me/login',options);

    token = await response.text();
    console.log("Token "+token);
    const status = response.status;

    expect(status).toBe(200);
    expect(token.length).toBe(36);

})