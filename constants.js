export default {
  PORTFOLIO_SECTIONS: [
    { name: 'Home', tagLine: 'The beginning!' },
    { name: 'About', tagLine: 'Curious?' },
    { name: 'Skills', tagLine: 'I got game!' },
    { name: 'Works', tagLine: 'Only the finest!' },
    { name: 'Contact', tagLine: "Don't hesitate!" }
  ],
  SKILLS: [
    {
      name: 'set1',
      items: [
        {
          name: 'Vue',
          image: 'vue.png'
        },
        {
          name: 'Flutter',
          image: 'flutter.png'
        },
        {
          name: 'Nuxt',
          image: 'nuxt.svg'
        }
      ]
    },
    {
      name: 'set2',
      items: [
        {
          name: 'Vuetify',
          image: 'vuetify.png'
        },
        {
          name: 'Node',
          image: 'nodejs.webp'
        },
        {
          name: 'Mongo DB',
          image: 'mongodb.png'
        }
      ]
    },
    {
      name: 'set3',
      items: [
        {
          name: 'Typescript',
          image: 'typescript.png'
        },
        {
          name: 'Scss',
          image: 'scss.png'
        },
        {
          name: 'c#',
          image: 'csharp.png'
        }
      ]
    },
    {
      name: 'set4',
      items: [
        {
          name: 'Github',
          image: 'github.png'
        },
        {
          name: 'Git',
          image: 'git.png'
        },
        {
          name: 'Trello',
          image: 'trello.png'
        }
      ]
    }
  ],
  SOCIAL_LINKS: [
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/schadrackngunza/' },
    {
      name: 'Stackoverflow',
      link: 'https://stackoverflow.com/users/13585015/schadrack-ngunza'
    },
    { name: 'Medium', link: 'https://medium.com/@schadrackngunza' },
    { name: 'GitHub', link: 'https://github.com/Schandroid243' },
    { name: 'Twitter', link: 'https://twitter.com/ClanNgunza' },
    { name: 'Email', link: 'mailto:schadrackngnuza@gmail.com' }
  ],
  HIRE_ME: 'mailto:schadrackngnuza@gmail.com',
  Resume: 'assets/Ngunza-Chadrack-CV.pdf',
  CONNECT_VIA_LINKEDIN: 'https://www.linkedin.com/in/schadrackngunza/',
  GITHUB_LINK: 'https://github.com/Schandroid243',
  PROJECTS: [
    {
      title: 'Email Sender',
      isConfidential: false,
      techStack: ['WPF', 'c#'],
      cover: 'Gmail_Logo.png',
      description:
        'The project is made in WPF and c# which describe how to send emails using Gmail in 2023 with Google Auth and the gmail API. Seeing a lot of people struggles to find how to do it properly i decided to create a public repo for that.',
      url: 'https://github.com/Schandroid243/WPF_Email_Sender_With_Gmail_in_c-'
    },
    {
      title: 'Daurecard App',
      techStack: ['Flutter', 'GetX', 'Node JS', 'Express.js', 'MySQL'],
      isConfidential: true,
      description: `Daurecard is a full stack app which help encoding vCards informations.
      Here's the key technical features:
                1. the capability to register, modify, deactivate, and generate vCard files containing user contact information. Notably, this system allows for the creation of up to 5 different profiles for each contact, resulting in the generation of up to 5 distinct vCards per contact.
                2. This API is integrated into an Android mobile application developed using Flutter. The application is built upon a robust architecture that facilitates user authentication (login), contact creation if not already existing, and the subsequent creation of one or multiple profiles. Once a profile is created, the application enables the encoding of the corresponding vCard download link onto an NFC-enabled smart card.
                3. Utilizing an algorithm designed for proximity detection, the application can detect nearby NFC smart cards. It offers the functionality to overwrite previous data and write the vCard information onto the smart card. Utilizing an NFC-enabled smartphone, users can effortlessly scan the smart card, triggering the automatic download of the vCard. Adding another profile simply requires selection within the application interface and encoding it onto the smart card..`,
      cover: 'daurecard.jpg'
    },
    {
      title: 'My Portfolio',
      techStack: ['Nuxt JS'],
      cover: 'my_portfolio.png',
      description:
        "This marks the first iteration of my portfolio, showcasing my current body of work. Created within a limited timeframe, I've laid the groundwork for further enhancements. I envision enriching it with additional sections and engaging micro-interactions in the near future.",
      isConfidential: false,
      url: 'https://github.com/Schandroid243/My-Portfolio'
    },
    {
      title: 'Borne du coin',
      techStack: ['Flutter', 'GetX', 'Django', 'MySQL'],
      isConfidential: true,
      description: `Conceived and executed a sophisticated 'command station' Android kiosk application, developed in Flutter, tailored for screens larger than 15 inches. Its key technical features include:

      1. Employing GetX for robust state management, this advanced system interfaces seamlessly with a Bluetooth thermal printer for invoice printing while dynamically detecting printer connectivity changes.

      2. Behind the scenes, the application intricately integrates with a Django Rest manipulation, cutting-edge intelligently reverts to an idle state after two hours of user inactivity.

      3. The system's technical architecture includes a secure popup interface requiring a code input, granting authorized technical personnel access to configuration settings for printer reconnection. Furthermore, stringent regex validations are applied to ensure data accuracy, specifically preventing erroneous phone number inputs during user information entry.

      4. Strict operational timeframes are enforced, limiting commands to specified hours (before 8 am and after 6 pm), enhancing operational efficiency and control.`,
      cover: 'standBorne.png'
    },
    {
      title: 'Face Recognition Brain',
      techStack: ['React', 'Node JS', 'Express.js', 'PostgreSQL'],
      isConfidential: false,
      description: `The aim for this project is to build a facial image recognition web app using the latest technology trends. To complete the project, the below user stories needed to be fulfilled:

      I can can upload an image, click on a button and have the faces (if any are found) detected with a square box
      I am able to register
      I am able to login and logout
      There is an image upload counter that tells each user the total number of image uploads that they have done
      The page UI is different when the user is logged in
      Project Approach
      For this full-stack web application, I created the front end components and UI using React, JavaScript, CSS & HTML. This involved creating the signin, register and the home (logged in) screens.
      The next part was creating the backend of this project using node.js and ensuring that the GET, POST and PUT requests would properly function handling the API calls, as well as handling the data. Later on, the data would be connected to a database.
      The last part of the web app was to build a relational database using PostgreSQL to retrieve, store and update each user's data. All these aspects were connected together and tested to ensure each part works.
      Made with HTML, CSS, JavaScript, React, Node.js, Express.js & PostgreSQL
      Complied Using Babel Preview`,
      cover: 'smart_brain.png',
      url: 'https://github.com/Schandroid243/facerecognitionbrain'
    },
    {
      title: 'Auri-Archive',
      techStack: ['WPF', 'MVVM', 'c#', 'Sql Server'],
      isConfidential: true,
      description: `Conceived and executed an intuitive electronic archiving software employing advanced algorithms to simplify digital data management and preservation using WPF and c#. Its key technical features include:

      1. Secure Storage: Utilizes byte array conversion and reconstruction algorithm exclusively within its internal PDF reader, ensuring confidentiality and integrity of sensitive data.

      2. Intelligent Indexing: Employs intelligent indexing for swift and precise retrieval of archived documents, allowing users to recreate physical archive structures using a tree view algorithm. The tree view algorithm creates a parent location and can attach a collection of child location to it but it can also creates only parent locations based on your need.

      3. Multi-format Compatibility: Supports and can import PDF files, converting them into byte array and then saving them. It can also digitizes paper documents by scanning and saving them in PDF format, then converting them into byte arrays.

      4. Advanced Customization: Offers customizable options tailored to individual or organizational needs, ensuring a flexible and adaptive user experience.

      5. Synchronization and Backup: Enables database backups generating .bak files for SqlServer and .sql files for MySql.

      6. Licensing Security: Accepts a license file containing activation keys employing triple-layer encryption (AES 256-bit and a unique RSA signature key) to validate the license provider, ensuring system date integrity for software usage.

      7. Advantages include increased efficiency in data retrieval, reinforced data security measures, and adaptability to specific user or organizational requirements.`,
      cover: 'Auri-Archive.png'
    }
  ]
}
