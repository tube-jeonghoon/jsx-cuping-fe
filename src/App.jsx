import "./App.css";
import pinIcon from "./assets/pin.svg";
import cancelIcon from "./assets/cancel.svg";
import cuppingLogo from "./assets/cupping-logo.svg";
import beanImg from "./assets/bean.png";
import beniImg from "./assets/beni.svg";
import { useState } from "react";

function App() {
  // 로그인이 되었는지 확인
  const [loggedin, setLoggedin] = useState(false);

  // 전체, 위치 버튼 클릭 시 토글
  const [isAllSelected, setIsAllSelected] = useState(true);
  const [isLocationSelected, setIsLocationSelected] = useState(false);

  // 신맛, 쓴맛, 단맛, 탄맛, 디카페인 클릭 시 토글
  const [isSshinSelected, setIsSshinSelected] = useState(false);

  // "전체" 버튼 클릭 시 토글
  const handleToggleAll = () => {
    setIsAllSelected(true);
    setIsLocationSelected(false);
  };

  // "위치순" 버튼 클릭 시 토글
  const handleToggleLocation = () => {
    setIsAllSelected(false);
    setIsLocationSelected(true);
  };

  // 신맛 태그 클릭 토글
  const handleToggleShin = () => {
    setIsSshinSelected(!isSshinSelected);
  };

  return (
    <div className="main-container w-9/12 flex flex-col">
      <div className="header w-full flex justify-between p-10">
        <div className="logo m-2 relative z-10 flex justify-center items-center">
          <button>
            <img
              src={cuppingLogo}
              className="w-[5rem] desktop1600:w-[8rem] desktop1700:w-[12rem]"
              alt="커핑로고"
            />
          </button>
        </div>
        {loggedin ? (
          <div className="function-bar flex">
            <div className="signup primary-color-text m-2 p-2 relative z-10">
              <button>회원가입</button>
            </div>
            <div className="login primary-color-bg m-2 px-4 py-2 rounded-lg relative z-10">
              <button>로그인</button>
            </div>
          </div>
        ) : (
          <div className="function-bar flex">
            <div className="profile-img">
              <img src={beniImg} alt="" className="w-8 mr-2" />
            </div>
            <div className="mypage primary-color-text font-bold relative z-10">
              <button>마이 페이지</button>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="main-contents w-full flex justify-center items-center flex-col mt-[-5rem]">
        <div className="search-bar mb-[4rem]">
          <div className="primary-color-text pb-4 pl-2 flex">
            <img src={pinIcon} alt="" className="w-[14px]" />
            <button>서울특별시 강남구</button>
          </div>
          <input
            type="text"
            className="search-bar-input w-[50rem] my-2 p-4 border-2 rounded-[15px] border-black"
            placeholder="찾으시는 원두를 입력해 주세요."
          />
        </div>
        <div className="content-text flex text-5xl mb-[4rem]">
          <div>지금&nbsp;</div>
          <div className="primary-color-text">여기, 내 취향&nbsp;</div>
          <div>으로 찾는 원두</div>
        </div>
        <div className="card-contents w-full">
          <div className="sorting-btn-area w-full grid grid-cols-2">
            <div className="sorting-btn-right flex">
              <div
                className={`sorting-btn primary-color-bg text-white border-1 m-2 px-2 py-1 rounded-[10px] ${
                  isAllSelected ? "" : "opacity-30"
                }`}
                onClick={handleToggleAll}
              >
                <button>전체</button>
              </div>
              <div
                className={`sorting-btn primary-color-bg text-white border-1 m-2 px-2 py-1 rounded-[10px] ${
                  isLocationSelected ? "" : "opacity-30"
                }`}
                onClick={handleToggleLocation}
              >
                <button>위치순</button>
              </div>
            </div>

            <div className="sorting-btn-left flex justify-end">
              <span
                className={`m-2 px-4 py-1 border-2 rounded-[10px] text-[12px] ${
                  isSshinSelected
                    ? "primary-color-bg text-white"
                    : "border-black opacity-20"
                }`}
                onClick={handleToggleShin}
                cursor="pointer"
              >
                <button>신맛</button>
              </span>
              <div
                className="sorting-btn-tag flex items-center
              text-[12px] border-2 border-black m-2 px-4 py-1 rounded-[10px] opacity-20"
              >
                <button>쓴맛</button>
              </div>
              <div
                className="sorting-btn-tag flex items-center
              text-[12px] border-2 border-black m-2 px-4 py-1 rounded-[10px] opacity-20"
              >
                <button>단맛</button>
              </div>
              <div
                className="sorting-btn-tag flex items-center
              text-[12px] border-2 border-black m-2 px-4 py-1 rounded-[10px] opacity-20"
              >
                <button>탄맛</button>
              </div>
              <div
                className="sorting-btn-tag flex items-center
              text-[12px] border-2 border-black m-2 px-4 py-1 rounded-[10px] opacity-20"
              >
                <button>디카페인</button>
              </div>
            </div>
          </div>

          <div className="cards grid grid-cols-3">
            {/* // ----- Card ----- // */}
            <div className="card m-2 shadow-md border border-gray-300 rounded-lg">
              <div className="card-picture">
                <img src={beanImg} alt="" />
              </div>
              <div className="card-name grid grid-cols-9">
                <div className="bean-name text-xl p-2 col-span-6 font-semibold">
                  에티오피아 예가체프
                </div>
                <div className="flex justify-end p-2 col-span-3">
                  <div className="stars mx-2">⭐️ 4</div>
                  <div className="heart mx-2">❤️</div>
                </div>
              </div>
              <div className="card-labels p-2 flex">
                <div className="card-label border-2 rounded-[5px] px-2 mr-2 text-[1rem]">
                  #신맛
                </div>
                <div className="card-label border-2 rounded-[5px] px-2 mr-2 text-[1rem]">
                  #디카페인
                </div>
              </div>
            </div>
            <div className="card m-2 shadow-md border border-gray-300 rounded-lg opacity-30">
              <div className="card-picture">
                <img src={beanImg} alt="" />
              </div>
              <div className="card-name grid grid-cols-2">
                <div className="bean-name text-xl p-2">콜롬비아 프리수모</div>
                <div className="flex justify-end p-2">
                  <div className="stars mx-2">⭐️ 3</div>
                  <div className="heart mx-2">❤️</div>
                </div>
              </div>
              <div className="card-labels p-2 flex">
                <div className="card-label border-2 rounded-[5px] px-2 mr-2 text-[1rem]">
                  #단맛
                </div>
                <div className="card-label border-2 rounded-[5px] px-2 mr-2 text-[1rem]">
                  #디카페인
                </div>
              </div>
            </div>
            {console.log("1")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
