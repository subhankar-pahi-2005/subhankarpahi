AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/php.webp",
    langName: "PHP",
    langDesc: "<li> Hypertext Preprocessor. It is a server-side scripting language that is widely used for web development. PHP is embedded within HTML code and is used to create dynamic web pages.</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "assets/images/techstack-page/github.webp",
    langName: "Github",
    langDesc: "<li>GitHub is a web-based platform for version control and collaboration that is widely used in software development. It provides a way for multiple people to work on projects simultaneously, managing changes to the codebase, and tracking the development history. </li>",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system</li>"
  },
  {
    langImage:"assets/images/techstack-page/java.webp",
    langName:"Java",
    langDesc:"<li>Java is a high-level, object-oriented programming language that was developed by Sun Microsystems (now owned by Oracle Corporation) in the mid-1990s. It is known for its platform independence</li>"
  },
  {
    langImage:"assets/images/techstack-page/shell.webp",
    langName:"Bash shell",
    langDesc:"<li>Bash, short for Bourne Again SHell is a command processor that typically runs in a text window where the user types commands that cause actions. It is the default shell on many Unix-like operating systems, including Linux and macOS</li>"
  },
  {
    langImage:"assets/images/techstack-page/ora.webp",
    langName:"Oracle",
    langDesc:"<li>Oracle Database is a relational database management system (RDBMS) developed by Oracle Corporation. It is one of the most widely used database systems in the world and is known for its reliability, scalability, and comprehensive features.</li>"
  },
  {
    langImage:"assets/images/techstack-page/sql.webp",
    langName:"MySql",
    langDesc:"<li>MySQL is an open-source relational database management system (RDBMS) that is widely used for managing and organizing data. It is one of the most popular databases in the world, known for its reliability, performance, and ease of use</li>"
  },
  {
    langImage:"assets/images/techstack-page/XAMPP.webp",
    langName:"Xampp",
    langDesc:"<li> XAMPP is a free and open-source cross-platform web server solution stack that is developed by Apache FriendsXAMPP provides an easy and convenient way to set up a local web server environment on a personal computer. It is particularly popular among developers and web designers for testing and developing dynamic web applications offline before deploying them to a live server</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
