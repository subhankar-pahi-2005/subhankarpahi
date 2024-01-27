
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1: "Subhankar Pahi",
    designation1: "student of computer science and engineering",
    image1: "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
    message1: "<p>I'm Subhankar from Bhadrak, Odisha a student of computer science and engineering<br><br>who enjoys programming design and learning new things.</br></br>" +
              "<p>I finished high school from Manjula Manjari Saraswati Shishu Vidya Mandir Bhadrak.</p><p>From 2021 onwards, I will be pursuing a diploma in computer science and engineering at Bhadrak Engineering School and Technology.</p>" +
              "<P>I'm a developer,geek,and curious human besides being an open-source enthusiast.</p>" +
              "<p>I have experience delivering solutions for interesting problems in the startup and industry spaces, both in academic and industry.</p>" +
              "<p> With a passion for technology and a versatile skill set that spans multiple domainsI’m well-positioned to make lasting contributions through innovation and teamwork.</p>",

  }

   
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,

      
     
 
      
      
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                        
                      </div>  
                </td>
            </tr> 
            
    `)      
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
