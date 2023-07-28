import MB01 from '../assets/img/MB01.png';
import MB02 from '../assets/img/MB02.png';
import MB03 from '../assets/img/MB03.png';
import Shopping01 from '../assets/img/Shopping01.png';
import Shopping02 from '../assets/img/Shopping02.png';
import Shopping03 from '../assets/img/Shopping03.png';
import Shopping04 from '../assets/img/Shopping04.png';
import todo01 from '../assets/img/todo01.png';
import todo02 from '../assets/img/todo02.png';
import Youtube01 from '../assets/img/Youtube01.png';
import Youtube02 from '../assets/img/Youtube02.png';
import Youtube03 from '../assets/img/Youtube03.png';
import NetFlix01 from '../assets/img/NetFlix01.png';
import NetFlix02 from '../assets/img/NetFlix02.png';
import NetFlix03 from '../assets/img/NetFlix03.png';

export const projects = [
    {
        title: 'Todo',
        skile: ['Mui', 'Uuid', 'styled-components'],
        url: 'https://silo9506.github.io/mui_todo/',
        img: [todo01, todo02],
        git: 'https://github.com/silo9506/mui_todo',
        about: (
            <>
                Mui와 로컬스토리지를 연습하기 위해 만든 Todo 프로젝트입니다.
                <br />
                할일 추가 및 수정 삭제 가 주요 기능이며 다크모드 및 달성상태에 따른 필터가 존재합니다.
            </>
        ),
    },
    {
        title: 'movieAndBook',
        skile: ['Mui', 'redux', 'Axios'],
        url: 'https://silo9506.github.io/movieAndBook/',
        img: [MB01, MB02, MB03],
        git: 'https://github.com/silo9506/movieAndBook',
        about: (
            <>
                redux Thunk 와 Intersection Observer Api를 연습하기 위해 만든 영화 및 도서 검색 프로젝트 입니다.
                <br />
                영화검색은 Tmdb, 도서검색은 네이버 오픈api를 사용하였습니다. Css는 Mui에서 제공하는 컴포넌트를 사용하여
                만들었으며 커스텀이 필요한경우 styled components를 이용하였습니다. 네이버 오픈api의 경우 cors가 발생하여
                CORS Anywhere와 Heroku를 이용하였습니다.
            </>
        ),
    },
    {
        title: 'Youtube',
        skile: ['TailwindCss', 'TanStackQuery', 'Axios', 'React-router-dom'],
        url: 'https://silo9506.github.io/dreamcoding/',
        img: [Youtube01, Youtube02, Youtube03],
        git: 'https://github.com/silo9506/dreamcoding',
        about: (
            <>
                TanStackQuery와 TailwindCss를 연습하기 위해 만든 유튜브 클론 프로젝트 입니다.
                <br />
                인기비디오, 비디오 검색, 비디오 재생 기능을 사용할 수 있으며 , TanStackQuery를 통해 검색 및 페이지
                이동시 api호출을 최소화 하였습니다. 검색결과는 Intersection Observer Api를 이용한 무한스크롤로
                구현하였습니다.
            </>
        ),
    },
    {
        title: 'Shopping mall',
        skile: ['TailwindCss', 'Axios', 'Firestore', 'Cloudinary'],
        url: 'https://silo9506.github.io/dream-shopping/',
        img: [Shopping01, Shopping02, Shopping03, Shopping04],
        git: 'https://github.com/silo9506/dream-shopping',
        about: (
            <>
                firebase를 연습하기 위해 만든 쇼핑몰 프로젝트 입니다.
                <br />
                파이어스토어의 리얼타임데이터베이스와 Authentication을 사용하여 회원가입 및 제품 등록권한을
                부여하였습니다. 로그인 및 회원가입 후 판매자 권한을 얻을 수 있으며 권한이 있을경우 제품을 등록할 수
                있습니다.
            </>
        ),
    },
    {
        title: 'NetFlix',
        skile: ['framer-motion', 'Axios', 'recoil', 'styled-components', 'React-router-dom'],
        url: 'https://silo9506.github.io/framer_motion/',
        img: [NetFlix01, NetFlix02, NetFlix03],
        git: 'https://github.com/silo9506/framer_motion',
        about: (
            <>
                framer-motion과 recoil을 연습하기 위해 만든 넷플릭스 클론코딩 프로젝트 입니다.
                <br />
                카테고리에 맞는 영화 슬라이더와 영화검색이 주 기능이며, framer-motion의 layoutId를 통해 슬라이더에서
                튀어나오는 모달을 만들었습니다.
            </>
        ),
    },
];
