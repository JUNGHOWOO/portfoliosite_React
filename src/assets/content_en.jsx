/* ========영문 내용============= */
import Work1 from "./RAIN.png"
import Work2 from "./COMM.png"
import Work3 from "./DB.png"
import Work4 from "./RMS.png"
import Work5 from "./ALERT.png"
import Work6 from "./PORT.png"

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
      Fr_name6: "BottStrap",
      Fr_level6: "Basic",

      Bc_title: "Backend",
      Bc_name1: "NodeJS",
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
          title: "Death Traffic Accidents in Precipitation",
          category: "Etc",
        },
        {
          id: 2,
          image: Work2,
          title: "Commercial Area Analysis",
          category: "Etc",
        },
        {
          id: 3,
          image: Work3,
          title: "AirBNB Database Reverse Enginnering",
          category: "Back",
        },
        {
          id: 4,
          image: Work4,
          title: "Company Request Management System",
          category: "Full",
        },
        {
          id: 5,
          image: Work5,
          title: "Intrusion Prevention System",
          category: "Etc",
        },
        {
            id: 6,
            image: Work6,
            title: "Portfolio site",
            category: "Front",
          },
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
      modaldescription1: "What I experienced in relation to my major and work.",
      modalinfo1_1: "Graduated from the Department of Computer Engineering at Baekseok University",
      modalinfo1_2: "While working as an intern at the company BJWORLD, I tried to improve my overall understanding of SI work and practical skills",

      title2: "Award-winning ",
      _title2: "Experience",
      modaltitle2: "Award-winning Experience",
      modaldescription2: "My experience of winning and participating in a contest related to my major",
      modalinfo2_1: "Participation in the 2021 IIBC Invention Contest Idea Contest and Winner of the Encouragement Award",
      modalinfo2_2: "Participate in the 2021 IIBC Invention Contest Idea Contest and win the participation award",
      modalinfo2_3: "Participate in the 2022 Social Problem Solving Mini Hackathon SUPER LOCAL PROJECT Idea Contest and win the Encouragement Award",

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




