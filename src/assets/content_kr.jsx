/* ========한글 내용============= */
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
export const navKr =
{
  logo: "Woo",
  menu1: "홈",
  menu2: "프로필",
  menu3: "타임라인",
  menu4: "스킬",
  menu5: "포트폴리오",
  menu6: "경험",
  menu7: "취미",
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
    title: "사내 요청 관리 시스템",
    category: "풀",

    project: "프로젝트명",
    summarytitle: "개요",
    content: "주요내용",
    per: "인원",
    time: "기간",
    env: "개발환경",
    lang: "사용언어",

    projectname: "사내 요청 관리 시스템",
    summary: "인턴 직무 수행 중 기존 사내 통합 관리시스템(CMS)에는 외부에서의 요청을 등록하고 관리할 수 있는 API가 존재하지 않아 요청은 메신저로 수신 받고 해당 데이터는 액셀 파일 데이터로 별도 관리하고 있었는데 이러한 불편함을 개선하고자 요청 관리 시스템 서버(RMS)를 개발하여 요청 데이터를 별도의 DB와 서버에서 관리",
    majorcontent: "기존 Java로 구성된 CMS 서버의 서버 API로써 기능하며, 요청 등록 폼은 CMS에서 구현. API는 폼에 입력된 정보의 DB 업데이트와 콘솔창에서의 업데이트 정보 출력, CMS로의 요청 업로드 상태 전송 등을 주요 기능으로 담당하며 CMS에서 요청 사항의 수정, 복사 및 삭제 시 이를 DB에 업데이트하는 CRUD 기능 역시 수행. 추가로 Node.js의 미들웨어를 활용한 단일 및 다중 파일의 업로드와 같이 동작하며 요청 사항과 첨부 파일은 각각 별도의 DB에서 운영됨. 앞서 언급한 목록의 수정, 복사, 삭제 버튼 및 기능은 CMS에서 구현, 트랜잭션 처리로 쿼리문 구동 중 에러 발생 시 전체 롤백 수행",
    person: "2명",
    usetime: "약 30일",
    environment: "Eclipse, Sourcetree, Putty, MySQL, VSC, Git",
    language: "JavaScript, Node.js, express, SQL",
    button: "프로젝트 파일 다운로드",
    file: file1
  },
  {
    id: 2,
    image: Work2,
    title: "요청 관리 REST API",
    category: "풀",
    
    project: "프로젝트명",
    summarytitle: "개요",
    content: "주요내용",
    per: "인원",
    time: "기간",
    env: "개발환경",
    lang: "사용언어",

    projectname: "요청 관리 REST API",
    summary: "인턴 근무 중 본사 관리 아래의 사이트로부터 수정요청 사항이 발생할 경우 해당 사이트 담당자는 카톡이나 전화로 개발팀으로 요청을 하고 처리가 완료될 경우 다시 해당 사이트 담당자에게 연락해 처리 여부를 알려 주고 있어 업무 진행에 불편함이 존재하여 각 사이트 관리자메뉴에 요청사항 메뉴를 신설해 요청 내역이 관리되도록 구현할 예정, 서버는 Node.js를 주요 언어로 개발 할 예정이나 본사에는 해당 언어로 개발 가능한 개발자가 없으므로 학습 후 서버를 시범 구현을 요청 받음",
    majorcontent: "요청 사항은 업체 명, 주소, 대표번호, APIKEY 값을 항목으로 CRUD 동작을 수행, 요청 사항은 DB에 업로드 되며 루트 화면의 버튼을 통하여 수정 및 삭제가 가능, 요청 등록 시 Express 라이브러리를 활용한 파일의 서버로의 업로드가 가능하며 요청 사항과는 별도의 DB에 업로드, 요청 사항은 루트 화면의 상세 보기에서 확인이 가능하며, 해당 화면의 파일 보기 버튼을 통한 팝업 화면에서 파일의 다운로드가 가능, 모든 요청 사항 및 첨부 파일 정보는 서버의 콘솔을 통하여 확인 가능.",
    person: "1명",
    usetime: "약 30일",
    environment: "MySQL, VSC",
    language: "JavaScript, Node.js, express, SQL, HTML5, EJS, CSS3",

    button: "프로젝트 파일 다운로드",
    file: file2
  },
  {
    id: 3,
    image: Work3,
    title: "포트폴리오 사이트",
    category: "프론트",
    
    project: "프로젝트명",
    summarytitle: "개요",
    content: "주요내용",
    per: "인원",
    time: "기간",
    env: "개발환경",
    lang: "사용언어",

    projectname: "포트폴리오 사이트",
    summary: "해당 사이트는 포트폴리오와 간단한 자기소개 및 이력서의 기능을 하는 사이트로 프로필, 타임라인, 스킬, 포트폴리오, 경험, 연락 등의 메뉴를 포함",
    majorcontent: "React를 활용한 SPA 사이트, PC와 태블릿 그리고 스마트폰에서의 출력이 가능한 반응형 홈페이지 처리, 스크립트와 SCSS를 활용하여 스크롤 시 백그라운드 컬러 전환 기능, 프로필 사진에 CSS 애니메이션 적용, 버튼 팝업 창 구현, emailjs 라이브러리를 활용한 메일 전송 기능 포함, React router를 활용한 영한 전환 버튼 구현, netlify를 통한 사이트 배포",
    person: "1명",
    usetime: "약 3주",
    environment: "VSC, Sourcetree, Git",
    language: "HTML, CSS, SCSS, React.js, JavaScript",
    button: "프로젝트 파일 다운로드",
    file: file3
  },
  {
    id: 4,
    image: Work4,
    title: "강수 사망교통사고 분석",
    category: "기타",
    
    project: "프로젝트명",
    summarytitle: "개요",
    content: "주요내용",
    per: "인원",
    time: "기간",
    env: "개발환경",
    lang: "사용언어",

    projectname: "강수 사망교통사고 분석",
    summary: "강수와 사망교통사고 간의 상관관계를 분석하기 위하여 가설을 세우고 이를 검증하는 것이 프로젝트의 주요 목표임. 추가적으로 강수 시 사망교통사고가 다발하는 구역을 특정하는 것을 두 번째 목표로 설정하고 프로젝트를 진행하였음",
    majorcontent: "파이썬을 활용한 데이터 분석은 기상청에서 제공하는 ASOS 종관 기상 관측 데이터와 도로교통공단에서 제공하는 사망교통사고 데이터를 활용하였으며 http 방식으로 openAPI 인증키를 이용하여 json 형식으로 데이터를 추출한 이후 CSV 형식으로 저장하여 사용하였음. 결론적으로 ‘강수날 일반 차량보다 화물차의 사고가 증가할 것이다.’, ‘강수량이 높을수록 사고가 많이 발생할 것이다.’라는 가설은 사실이라는 것을 검증할 수 없었으며 ‘강수날 교통사고는 야간에 더 많이 발생할 것이다.’, ‘강수날 교통사고는 안전운전을 하지 않아서 발생한 사고가 가장 많을 것이다.’라는 가설에 대해서는 어느정도 입증이 가능하다는 결론을 내릴 수 있었음. 추가적으로 신갈IC, 경부고속도로(용인), 설문교~봉일천교, 고봉로 등이 사고가 다발하는 위험구간임을 특정할 수 있었음.",
    person: "1명",
    usetime: "약 30일",
    environment: "Colab",
    language: "Python",
    button: "프로젝트 파일 다운로드",
    file: file4
  },
  {
    id: 5,
    image: Work5,
    title: "명동 상권 분석",
    category: "기타",
    
    project: "프로젝트명",
    summarytitle: "개요",
    content: "주요내용",
    per: "인원",
    time: "기간",
    env: "개발환경",
    lang: "사용언어",

    projectname: "사내 요청 관리 시스템",
    summary: "명동 상권의 전반적인 분석과 매출액 증가-코로나19의 영향 유무 확인을 위한 프로젝트로, Python 기반의 빅데이터 분석에 네이버 API와 서울 열린 데이터 광장, 네이버 광고 서비스 등에서 제공하는 빅데이터를 분석 자료로 사용하였음.",
    majorcontent: "파이썬을 활용한 데이터 분석으로 유동인구, 업종, 매출, 상권주도 업종의 분석과 워드 클라우드 출력, 네이버 검색 데이터 분석 등을 통하여 명동 상권의 전반적인 분석을 진행하였음. 추가로 매출액-코로나 19 간의 상관관계의 분석을 진행하여 유의미한 영향을 끼쳤다는 결론을 내릴 수 있었으며 상권 내에서 코로나19로 인한 수혜 업종과 피해 업종을 도출해낼 수 있었음.",
    person: "1명",
    usetime: "약 30일",
    environment: "Jupyter Notebook",
    language: "Python",
    button: "프로젝트 파일 다운로드",
    file: file5
  },
  {
    id: 6,
    image: Work6,
    title: "에어비앤비 역기획",
    category: "백",
    
    project: "프로젝트명",
    summarytitle: "개요",
    content: "주요내용",
    per: "인원",
    time: "기간",
    env: "개발환경",
    lang: "사용언어",

    projectname: "에어비앤비 역기획",
    summary: "기존에 출시된 어플인 에어비앤비 어플을 리버스 엔지니어링하는 프로젝트로 요구사항 수집, 개념적 설계, 논리적 설계의 과정을 거쳐 물리적 설계를 통하여 에어비앤비의 데이터베이스를 유사 구현하는 것에 목적이 있음. 물리적 설계 과정에서 예약 완료자 명단 혹은 저 평점 숙소 등과 같은 특수한 조건은 뷰를 통하여 출력하였으며 실제 발생 가능한 질문을 예상하여 DB 조회 작업을 진행함  ",
    majorcontent: "에어비앤비 어플을 참고하여 요구사항을 수집하였고 해당 요구사항에 맞춰 ERD 작성을 진행하였음. 논리적 설계 과정에서 호스트ID, 이름, 닉네임 등의 애트리뷰트는 가상의 숙소와 사용자를 만들어 작성하였으며 물리적 설계 단계에서는 ERD에서 작성한 릴레이션에 맞추어 테이블을 생성하였음. 동시에 특수한 조건을 가진 데이터의 조회는 뷰를 통하여 출력하였으며, 예상 질문의 경우 테이블 조인과 like 함수, 연산자를 활용하여 데이터를 조회하였음.",
    person: "1명",
    usetime: "약 30일",
    environment: "MSSQL",
    language: "SQL",
    button: "프로젝트 파일 다운로드",
    file: file6
  },
  {
    id: 7,
    image: Work7,
    title: "침입방지 시스템",
    category: "기타",
    
    project: "프로젝트명",
    summarytitle: "개요",
    content: "주요내용",
    per: "인원",
    time: "기간",
    env: "개발환경",
    lang: "사용언어",

    projectname: "침입방지 시스템",
    summary: "근거리 접근 시, LED와 소리 부저를 통한 침입방지 시스템을 구현",
    majorcontent: "디버깅 시 콘솔에 시작 문구 출력하고 모듈 간 충돌 방지를 위한 GPIO핀의 초기화를 진행, 초음파 센서를 이용하여 초음파 송신 시간과 수신 시간의 차를 이용하여 전방 물체와의 거리를 인식, 전방 물체와의 거리가 10cm 이하 시 빨간색 LED와 소리 부저를 통한 경고음이 출력, 물체의 거리가 10cm를 벗어나면 LED와 부저 종료",
    person: "2명",
    usetime: "약 30일",
    environment: "Putty, Raspberry pi, VSC",
    language: "Linux, Python",
    button: "프로젝트 파일 다운로드",
    file: file7
  }
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
  modaldescription1: "나의 전공 관련한 경험",
  modalinfo1_1: "백석대학교 컴퓨터공학과 졸업",
  modalinfo1_2: "회사 BJWORLD에서 인턴으로 일하면서 SI 업무에 대한 전반적인 이해와 실무 능력을 향상시키기 위해 노력했습니다.",

  title2: "수상",
  _title2: "경험",
  modaltitle2: "수상 경험",
  modaldescription2: "나의 전공 관련 대회에서 수상, 참가한 경험",
  modalinfo2_1: "2021 IIBC 발명경진대회 아이디어 공모전 장려상 수상 -> 원격 의료 지원 서비스 구축",
  modalinfo2_2: "2021 IIBC 발명경진대회 아이디어 공모전 단체상 수상",
  modalinfo2_3: "2022 사회문제 해결 미니 해커톤 SUPER LOCAL PROJECT 아이디어 공모전 참여 및 장려상 수상 -> 긴급 차량 진입로 확보 서비스 구축",

  title3: "기타",
  _title3: "경험",
  modaltitle3: "기타 경험",
  modaldescription3: "나의 전공 외의 대외 경험",
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

