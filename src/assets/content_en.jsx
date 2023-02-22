/* ========영문 내용============= */
import Work1 from "./RMS.PNG"
import Work2 from "./CMS.PNG"
import Work3 from "./PORT.PNG"
import Work4 from "./RAIN.PNG"
import Work5 from "./COMM.PNG"
import Work6 from "./DB.PNG"
import Work7 from "./ALERT.PNG"

import file1 from "./rms.pdf"
import file2 from "./rest api.pdf"
import file3 from "./RMS.PNG"
import file4 from "./rain.pdf"
import file5 from "./comm.pdf"
import file6 from "./airbnb.pdf"
import file7 from "./raspberrypi.pdf"

/* header */
export const navEn =
{
  logo: "Woo",
  menu1: "Home",
  menu2: "Profile",
  menu3: "Timeline",
  menu4: "Skills",
  menu5: "Portfolio",
  menu6: "Experience",
  menu7: "Hobby",
  menu8: "Contact",
}

/* home */
export const homeEn =
{
  txt: "hello, my name is",
  title: "Jungho Woo",
  subtitle: "Web Developer",
  description: "Hello, I'm Jungho Woo, a beginner developer living in Korea. Nice to meet you and have a good time.",
  button: "Contact",
  scrollbtn: "Scroll Down",
}

/* profile */
export const profileEn =
{
  title: "Profile",
  subtitle: "My introduction",
  description: "As a beginner web developer, I adapt well to the organization, get along well with people, and have a strong sense of responsibility, so I try to do my best in my job. Also, I try to be humble because the higher I climb, the more I know that I didn't come by myself.",
  title1: "Adaptable",
  subtitle1: "mingle with people",
  title2: "responsible",
  subtitle2: "do one's best",
  title3: "Modest",
  subtitle3: "not overconfident",
  button: "Download CV",
}

/* timeline */
export const timelineEn =
{
  title: "Timeline",
  subtitle: "My personel journey",

  gr_icon: "Education",
  gr_title1: "University",
  gr_subtitle1: "Baekseok University Department of Computer Engineering - Cheonan",
  gr_cal1: "2017 - 2023",
  gr_title2: "High School",
  gr_subtitle2: "Hongcheon High Schoo - Yongin",
  gr_cal2: "2014 - 2016",
  gr_title3: "Middle School",
  gr_subtitle3: "Seongseo Middle School - Yongin",
  gr_cal3: "2011 - 2013",
  gr_title4: "Elementary School",
  gr_subtitle4: "Seongseo Elementary School - Yongin",
  gr_cal4: "2010 - 2010",
  gr_title5: "Elementary School",
  gr_subtitle5: "Cheoncheon Elementary School - Suwon",
  gr_cal5: "2007 - 2010",
  gr_title6: "Elementary School",
  gr_subtitle6: "Hwaseo Elementary School - Suwon",
  gr_cal6: "2005 - 2006",

  ex_icon: "Experience",
  ex_title1: "BJ world",
  ex_subtitle1: "internship performance",
  ex_cal1: "2022 - 2022",
  ex_title2: "Gamaro Chicken Sweet and Sour Pork",
  ex_subtitle2: "restaurant employee",
  ex_cal2: "2021 - 2022",
  ex_title3: "ROKA",
  ex_subtitle3: "performance of military service",
  ex_cal3: "2019 - 2021",
  ex_title4: "Coupang",
  ex_subtitle4: "logistics center employee",
  ex_cal4: "2018 - 2019",
  ex_title5: "Pisces",
  ex_subtitle5: "restaurant part-time job",
  ex_cal5: "2017 - 2017",

}

/* skills */
export const skillEn =
{
  title: "Skills",
  subtitle: "My technical level",

  Fr_title: "Frontend",
  Fr_name1: "HTML",
  Fr_level1: "Intermediate",
  Fr_name2: "JavaScript",
  Fr_level2: "Intermediate",
  Fr_name3: "CSS",
  Fr_level3: "Basic",
  Fr_name4: "React",
  Fr_level4: "Intermediate",
  Fr_name5: "Vue",
  Fr_level5: "Basic",
  Fr_name6: "BootStrap",
  Fr_level6: "Basic",

  Bc_title: "Backend",
  Bc_name1: "Node.JS",
  Bc_level1: "Advanced",
  Bc_name2: "MySQL",
  Bc_level2: "Intermediate",
  Bc_name3: "JAVA",
  Bc_level3: "Basic",
  Bc_name4: "Express",
  Bc_level4: "Intermediate",
  Bc_name5: "Linux",
  Bc_level5: "Basic",
  Bc_name6: "Python",
  Bc_level6: "Intermediate",
}

/* portpolio */
export const portfolioEn =
{
  title: "Portfolio",
  subtitle: "My projects",
  button: "Detail",
}



export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Request management system",
    category: "Full",

    project: "Project Name",
    summarytitle: "Summary",
    content: "Major content",
    per: "Personnel",
    time: "Period",
    env: "Development env",
    lang: "Language",

    projectname: "Request management system",
    summary: "As there was no API for registering and managing external requests during internship performance, requests were received through messenger and data was managed separately as accelerator file data. To improve this inconvenience, a request management system server (RMS) was developed and managed in a separate DB and server.",
    majorcontent: "It functions as a server API for CMS servers configured with existing Java, and the request registration form is implemented in CMS. The API is responsible for updating DB of information entered in the form, outputting update information from the console window, and sending request upload status to CMS. It also performs CRUD function that updates DB when request is modified, copied, and deleted from CMS. In addition, it works like uploading single and multiple files using Node.js middleware, and requests and attachments are operated in separate DBs, respectively. Modifying, copying, deleting buttons and functions of the aforementioned list are implemented by CMS, and complete rollback is performed in the event of an error while running query statements through transaction processing.",
    person: "Two people",
    usetime: "About 30days",
    environment: "Eclipse, Sourcetree, Putty, MySQL, VSC, Git",
    language: "JavaScript, Node.js, express, SQL",
    button: "Project file download",
    file: file1
  },
  {
    id: 2,
    image: Work2,
    title: "Request Management REST API",
    category: "Full",
    
    project: "Project Name",
    summarytitle: "Summary",
    content: "Major content",
    per: "Personnel",
    time: "Period",
    env: "Development env",
    lang: "Language",

    projectname: "Request Management REST API",
    summary: "If a request for modification is made from a site under HQ management during internship, the site manager calls the development team via Kakao Talk or phone, and when processing is completed, the site manager will have a menu to manage the request.",
    majorcontent: "Request is CRUD operation based on company name, address, representative number, APIKEY value, request is uploaded to DB, can be modified and deleted through root screen button, upload file to server using Express library, request can be checked in detailed view of root screen, and all attachment information can be downloaded from the console.",
    person: "One people",
    usetime: "About 30days",
    environment: "MySQL, VSC",
    language: "JavaScript, Node.js, express, SQL, HTML5, EJS, CSS3",

    button: "Project file download",
    file: file2
  },
  {
    id: 3,
    image: Work3,
    title: "Portfolio site",
    category: "Front",
    
    project: "Project Name",
    summarytitle: "Summary",
    content: "Major content",
    per: "Personnel",
    time: "Period",
    env: "Development env",
    lang: "Language",

    projectname: "Portfolio site",
    summary: "It is a site that functions as a portfolio and brief self-introduction and resume, including menus such as profiles, timelines, skills, portfolios, experiences, contacts, etc.",
    majorcontent: "React-enabled responsive home page processing, script and SCSS for scrolling background color switching, CSS animation applied to profile picture, button pop-up window implementation, mail transfer using email js library implementation, English conversion button implementation via netlify site",
    person: "One people",
    usetime: "About 3weeks",
    environment: "VSC, Sourcetree, Git",
    language: "HTML, CSS, SCSS, React.js, JavaScript",

    button: "Project file download",
    file: file3
  },
  {
    id: 4,
    image: Work4,
    title: "Analysis of Precipitation Death Traffic Accidents",
    category: "Etc",
    
    project: "Project Name",
    summarytitle: "Summary",
    content: "Major content",
    per: "Personnel",
    time: "Period",
    env: "Development env",
    lang: "Language",

    projectname: "Analysis of Precipitation Death Traffic Accidents",
    summary: "The main goal of the project is to establish and verify a hypothesis to analyze the correlation between precipitation and death traffic accidents. In addition, the second goal was to identify areas where fatal traffic accidents occur frequently during precipitation, and the project was carried out.",
    majorcontent: "Data analysis using Python used ASOS weather observation data provided by the Korea Meteorological Administration and death traffic accident data provided by the Korea Highway Traffic Authority. Data were extracted in json format using openAPI authentication key using http method and stored in CSV format. In conclusion, the hypothesis that 'more accidents of trucks than ordinary vehicles on a precipitation day' and 'the higher the precipitation, the more accidents will occur' could not be verified, and the hypothesis that 'the precipitation day traffic accidents will occur at night' and 'the precipitation day traffic accidents will be caused by not driving safely' could be concluded to some extent. Additionally, Singal IC, Gyeongbu Expressway (Yongin), and Questionnaire Bridge~It was possible to specify that Bongilcheongyo Bridge and Gobong-ro were dangerous areas with frequent accidents.",
    person: "One people",
    usetime: "About 30days",
    environment: "Colab",
    language: "Python",

   button: "Project file download",
    file: file4
  },
  {
    id: 5,
    image: Work5,
    title: "Analysis of Myeongdong Commercial District",
    category: "Etc",
    
    project: "Project Name",
    summarytitle: "Summary",
    content: "Major content",
    per: "Personnel",
    time: "Period",
    env: "Development env",
    lang: "Language",

    projectname: "Analysis of Myeongdong Commercial District",
    summary: "It is a project to analyze the overall analysis of Myeong-dong commercial district and check the impact of COVID-19, and big data provided by Naver API, Seoul Open Data Plaza, and Naver Advertising Service were used as analysis data for Python-based big data analysis.",
    majorcontent: "Through data analysis using Python, the overall analysis of Myeong-dong commercial district was conducted through analysis of floating population, industry, sales, and commercial district-led industries, word cloud output, and Naver search data analysis. In addition, it was possible to conclude that it had a significant impact by analyzing the correlation between sales and COVID-19, and to derive the beneficiary and damaged industries from COVID-19 within the commercial district.",
    person: "One people",
    usetime: "About 30days",
    environment: "Jupyter Notebook",
    language: "Python",

   button: "Project file download",
    file: file5
  },
  {
    id: 6,
    image: Work6,
    title: "Airbnb Station Planning",
    category: "Back",
    
    project: "Project Name",
    summarytitle: "Summary",
    content: "Major content",
    per: "Personnel",
    time: "Period",
    env: "Development env",
    lang: "Language",

    projectname: "Airbnb Station Planning",
    summary: "It is a project to reverse engineer the previously released application, Airbnb, and aims to similarly implement Airbnb's database through physical design through the process of collecting requirements, conceptual design, and logical design. During the physical design process, special conditions such as reserved list or low-rated accommodation were printed through the view, and DB inquiry was carried out in anticipation of actual questions.",
    majorcontent: "Requirements were collected by referring to the Airbnb application and ERD was prepared according to the requirements. In the logical design process, attributes such as host ID, name, and nickname were created by creating virtual accommodation and users, and in the physical design stage, tables were created according to the relationship created by ERD. At the same time, data with special conditions was inquired through a view, and in the case of expected questions, data was inquired using table joins, like functions, and operators.",
    person: "One people",
    usetime: "About 30days",
    environment: "MSSQL",
    language: "SQL",

   button: "Project file download",
    file: file6
  },
  {
    id: 7,
    image: Work7,
    title: "Intrusion prevention system",
    category: "Etc",
    
    project: "Project Name",
    summarytitle: "Summary",
    content: "Major content",
    per: "Personnel",
    time: "Period",
    env: "Development env",
    lang: "Language",

    projectname: "Intrusion prevention system",
    summary: "Implementation of an intrusion prevention system through LEDs and sound buzzers when approaching close range",
    majorcontent: "Initialize GPIO pins to prevent collision between modules during debugging, use ultrasonic sensors to recognize the distance from the front object using the difference between ultrasonic transmission time and reception time, red LED and sound buzzer output when the distance is less than 10cm, and LED and buzzer end when the object is outside 10cm.",
    person: "Two people",
    usetime: "About 30days",
    environment: "Putty, Raspberry pi, VSC",
    language: "Linux, Python",

   button: "Project file download",
    file: file7
  }
];

export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'Full',
  },
  {
    name: 'Front',
  },
  {
    name: 'Back',
  },
  {
    name: 'Etc',
  },
]


/* experience */
export const experienceEn =
{
  title: "Experience",
  subtitle: "What i experienced",
  button: "View More",

  title1: "Major",
  _title1: "Experience",
  modaltitle1: "Major Experience",
  modaldescription1: "My major-related experience",
  modalinfo1_1: "Graduated from the Department of Computer Engineering at Baekseok University",
  modalinfo1_2: "While working as an intern at the company BJWORLD, I tried to improve my overall understanding of SI work and practical skills",

  title2: "Award-winning ",
  _title2: "Experience",
  modaltitle2: "Award-winning Experience",
  modaldescription2: "My experience of winning and participating in a competition related to my major",
  modalinfo2_1: "2021 IIBC Invention Competition Award for Encouragement -> Establishment of Telemedicine Support Service",
  modalinfo2_2: "2021 IIBC Invention Contest Idea Contest Awarded Group Award",
  modalinfo2_3: "2022 Social Problem Solving Mini Hackathon Participation in SUPER LOCAL PROJECT Idea Contest and Award for Encouragement -> Establishment of an emergency vehicle access road securing service",

  title3: "Other",
  _title3: "Experiences",
  modaltitle3: "Other Experiences",
  modaldescription3: "What I experienced in without my major and work.",
  modalinfo3_1: "People Service People (PSP) Youth Volunteer Club activities and volunteer activities",
  modalinfo3_2: "KALOS College Baseball Club Activities and National Tournament Runner-up",
  modalinfo3_3: "Opening a creative club in high school and working as a vice president of the club for two years",
  modalinfo3_4: "During middle and high school years, I was the head of the badminton club for two years",
}

/* etc */
export const etcEn =
{

}

/* contact */
export const contactEn =
{
  title: "Contact",
  subtitle: "Send Message",

  _title1: "Talk to me",
  title1: "Email",
  data1: "Contact by email",
  title2: "Whatsapp",
  data2: "Contact by phone",
  title3: "Messenger",
  data3: "Contact by messenger",

  _title2: "Send gmail",
  tag1: "Name",
  place1: "Insert your name",
  tag2: "Email",
  place2: "Insert your email",
  tag3: "Content",
  place3: "Please enter the contents",

  button1: "Send",
  button2: "Send Message"
}

/* footer */
export const footerEn =
{
  title: "Jungho's Portfolio Web Site",
  link1: "Profile",
  link2: "Portfolio",
  link3: "Etc",
  copy: "JunghoWoo. All rigths reserved"
}




