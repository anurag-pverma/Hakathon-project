const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
        background-image: url("https://i.pinimg.com/originals/f5/9c/e3/f59ce3c50ff404d3e0531e9306ef2864.jpg");
        height: 500px; 
        background-repeat: no-repeat;
        background-position: center;
  
        max-height: 700px;
        overflow: hidden;
    }
    .c{
      display:flex;
      align-items:center;
      justify-content:space-around;
      font-size:30px;
      color:red;
     

    }
    .c>div{
      margin-top:500px;
    }
   
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
    <div class='c'>
        
        <div class='_1'><h1>This Device Is Not You 😂😂😂😂</h1></div>
        <div class='_2'>
        <h1>Please Dont Touch This 😡😡😡😡> ${pageName}</h1></div>
    </div>
     `;
  };

  
  switch (window.location.hostname) {
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YOUTUBE");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.netflix.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("NETFLIX");
      break;
    case "www.roblox.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("ROBLOX");
      break;
    case "discord.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("DISCORD");
      break;
    case "www.spotify.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("SPOTIFY");
      break;
      case "www.whatsapp.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("WHATSAPP");
        break;
        case "www.hotstar.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("HOTSTAR");
        break;
        case "www.masaischool.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("MASAISCHOOL");
        break;
        case "www.twitter.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("TWITTER");
        break;
        case "www.instagram.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("INSTAGRAM");
        break;
        case "hwww.kooapp.com/":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("INSTAGRAM");
        break;
        
  }
  