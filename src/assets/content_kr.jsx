/* ========한글 내용============= */
import Work1 from "./RAIN.png"
import Work2 from "./COMM.png"
import Work3 from "./DB.png"
import Work4 from "./RMS.png"
import Work5 from "./ALERT.png"
import Work6 from "./PORT.png"

/* header */
export const navKr = 
    {
      logo: "Woo",
      menu1: "홈",
      menu2: "프로필",
      menu3: "타임라인",
      menu4: "스킬",
      menu5: "포트폴리오",
      menu6: "경험",
      menu7: "기타",
      menu8: "연락",
    }

/* home */
export const homeKr = 
    {
      txt: "안녕하세요, 제 이름은",
      title: "우정호",
      subtitle: "웹 개발자",
      description: "안녕하세요, 저는 한국에 사는 초보 개발자 우정호입니다. 만나서 반갑고 좋은 시간 보내세요.",
      button: "연락",
      scrollbtn: "밑으로 스크롤 해주세요",
    }

/* profile */
export const profileKr = 
    {
      title: "프로필",
      subtitle: "나의 소개",
      description: "저는 초보 웹 개발자로서 조직에 잘 적응하고 사람들과 잘 어울리며 책임감이 강해서 제 일에 최선을 다하려고 노력합니다. 또한 높이 올라갈수록 스스로 오지 않았다는 것을 알기 때문에 겸손해지려고 노력합니다.",
      title1: "적응력",
      subtitle1: "잘 어울리는",
      title2: "책임감",
      subtitle2: "최선을 다하는",
      title3: "겸손함",
      subtitle3: "과신하지 않는",
      button: "이력서 다운로드",
    }

/* timeline */
export const timelineKr = 
    {
      title: "타임라인",
      subtitle: "나의 성장일지",

      gr_icon: "교육",
      gr_title1: "대학교",
      gr_subtitle1: "백석대학교 컴퓨터공학부 - 천안",
      gr_cal1: "2017 - 2023",
      gr_title2: "고등학교",
      gr_subtitle2: "홍천 고등학교 - 용인",
      gr_cal2: "2014 - 2016",
      gr_title3: "중학교",
      gr_subtitle3: "성서 중학교 - 용인",
      gr_cal3: "2011 - 2013",
      gr_title4: "초등학교",
      gr_subtitle4: "성서 초등학교 - 용인",
      gr_cal4: "2010 - 2010",
      gr_title5: "초등학교",
      gr_subtitle5: "천천 초등학교 - 수원",
      gr_cal5: "2007 - 2010",
      gr_title6: "초등학교",
      gr_subtitle6: "화서 초등학교 - 수원",
      gr_cal6: "2005 - 2006",

      ex_icon: "경험",
      ex_title1: "비제이월드",
      ex_subtitle1: "인턴 근무 경험",
      ex_cal1: "2022 - 2022",
      ex_title2: "가마로 닭강정",
      ex_subtitle2: "주방 직원 근무",
      ex_cal2: "2021 - 2022",
      ex_title3: "육군",
      ex_subtitle3: "국방의무 수행",
      ex_cal3: "2019 - 2021",
      ex_title4: "쿠팡",
      ex_subtitle4: "물류센터 관리직 근무",
      ex_cal4: "2018 - 2019",
      ex_title5: "물고기자리",
      ex_subtitle5: "주방 직원 근무",
      ex_cal5: "2017 - 2017",

    }

/* skills */
export const skillKr = 
    {
      title: "스킬",
      subtitle: "나의 역량 수준",

      Fr_title: "프론트엔드",
      Fr_name1: "HTML",
      Fr_level1: "중급",
      Fr_name2: "JavaScript",
      Fr_level2: "중급",
      Fr_name3: "CSS",
      Fr_level3: "기초",
      Fr_name4: "React",
      Fr_level4: "중급",
      Fr_name5: "Vue",
      Fr_level5: "기초",
      Fr_name6: "BottStrap",
      Fr_level6: "기초",

      Bc_title: "백엔드",
      Bc_name1: "NodeJS",
      Bc_level1: "상급",
      Bc_name2: "MySQL",
      Bc_level2: "중급",
      Bc_name3: "JAVA",
      Bc_level3: "기초",
      Bc_name4: "Express",
      Bc_level4: "중급",
      Bc_name5: "Linux",
      Bc_level5: "기초",
      Bc_name6: "Python",
      Bc_level6: "중급",
    }

/* portpolio */
export const portfolioKr = 
    {
      title: "포트폴리오",
      subtitle: "나의 프로젝트",
      button: "자세히",
    }

export const projectsData = [
      {
        id: 1,
        image: Work1,
        title: "강수 사망교통사고 분석",
        category: "기타",
      },
      {
        id: 2,
        image: Work2,
        title: "명동 상권 분석",
        category: "기타",
      },
      {
        id: 3,
        image: Work3,
        title: "에어비앤비 데이터베이스 리버스 엔지니어링",
        category: "백",
      },
      {
        id: 4,
        image: Work4,
        title: "사내 요청 관리 시스템",
        category: "풀",
      },
      {
        id: 5,
        image: Work5,
        title: "침입방지 시스템",
        category: "기타",
      },
      {
          id: 6,
          image: Work6,
          title: "포트폴리오 사이트",
          category: "프론트",
        },
    ];
  
export const projectsNav = [
      {
          name: '모두',
      },
      {
          name: '풀',
      },
      {
          name: '프론트',
      },
      {
          name: '백',
      },
      {
          name: '기타',
      },
    ]


/* experience */
export const experienceKr = 
    {
      title: "경험",
      subtitle: "나의 경험",
      button: "더보기",

      title1: "전공",
      _title1: "경험",
      modaltitle1: "전공 경험",
      modaldescription1: "나의 전공과 업무와 관련하여 경험",
      modalinfo1_1: "백석대학교 컴퓨터공학과 졸업",
      modalinfo1_2: "회사 BJWORLD에서 인턴으로 일하면서 SI 업무에 대한 전반적인 이해와 실무 능력을 향상시키기 위해 노력했습니다.",

      title2: "수상",
      _title2: "경험",
      modaltitle2: "수상 경험",
      modaldescription2: "나의 전공 그리고 업무와 관련된 대회에서 수상, 참가한 경험",
      modalinfo2_1: "2021 IIBC 발명경진대회 아이디어 공모전 참가 및 장려상 수상",
      modalinfo2_2: "2021 IIBC 발명경진대회 아이디어 공모전 참가 및 참가상 수상",
      modalinfo2_3: "2022 사회문제 해결 미니 해커톤 SUPER LOCAL PROJECT 아이디어 공모전 참여 및 장려상 수상",

      title3: "기타",
      _title3: "경험",
      modaltitle3: "기타 경험",
      modaldescription3: "나의 전공 그리고 업무 외의 경험",
      modalinfo3_1: "People Service People(PSP) 청소년봉사동아리 활동 및 봉사활동",
      modalinfo3_2: "칼로스 대학 야구 클럽 활동 및 전국 대회 준우승",
      modalinfo3_3: "고등학교 창의력 동아리를 개설 및 2년간 동아리 부회장으로 활동",
      modalinfo3_4: "중/고등학교 배드민턴 동아리 부장 역임 및 용인시 대회 2등, 경기도 대회 2등",
    }

/* etc */
export const etcKr = 
    {
      
    }

/* contact */
export const contactKr = 
    {
      title: "연락",
      subtitle: "메시지 보내기",

      _title1: "나에게 연락하기",
      title1: "이메일",
      data1: "이메일로 연락",
      title2: "Whatsapp",
      data2: "휴대폰으로 연락",
      title3: "메싡저",
      data3: "메신저로 연락",

      _title2: "Gmail 보내기",
      tag1: "이름",
      place1: "이름을 입력해주세요.",
      tag2: "이메일",
      place2: "이메일을 입력해주세요.",
      tag3: "내용",
      place3: "내용을 입력해주세요.",

      button1: "보내기",
      button2: "전송"
    }

/* footer */
export const footerKr = 
    {
      title: "Jungho's Portfolio Web Site",
      link1: "프로필",
      link2: "포트폴리오",
      link3: "기타",
      copy: "JunghoWoo. All rigths reserved"
    }

