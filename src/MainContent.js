import styled from 'styled-components';

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem 1rem;
  max-width: 1440px;
  margin: 0 auto;
`;

const HeroContainer = styled.div`
  display: flex;
  width: 90%;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 1400px) {
    width: 80%;
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5%;
`;

const ImageBorderAnimate = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0);
  overflow: hidden;
  border-radius: 20px;
  padding: 3rem;
  clip-path: polygon(
    0% 0%,
    0% 100%,
    1% 100%,
    /* a1 */ 1% 5%,
    1.5% 3.5%,
    2% 2.5%,
    2.5% 2%,
    /* a2 */ 97.5% 2%,
    98% 2.5%,
    98.5% 3.5%,
    99% 5%,
    /* a3 */ 99% 95%,
    98.5% 96.5%,
    98% 97.5%,
    97.5% 98%,
    /* a4 */ 2.5% 98%,
    2% 97.5%,
    1.2% 96%,
    1% 95%,
    /* stop */ 1% 100%,
    100% 100%,
    100% 0%
  );
  img {
    width: 100%;
  }
  &::before {
    content: '';
    position: absolute;
    width: 110%;
    height: 70%;
    background: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 10%,
      rgba(208, 222, 33, 1) 20%,
      rgba(79, 220, 74, 1) 30%,
      rgba(63, 218, 216, 1) 40%,
      rgba(47, 201, 226, 1) 50%,
      rgba(28, 127, 238, 1) 60%,
      rgba(95, 21, 242, 1) 70%,
      rgba(186, 12, 248, 1) 80%,
      rgba(251, 7, 217, 1) 90%,
      rgba(255, 0, 0, 1) 100%
    );
    box-shadow: 0 0 20px rgb(8, 8, 8);
    animation: animate 5s linear infinite;
  }
  /* &::after {
    content: '';
    position: absolute;
    inset: 2px;
    border: 16px;
    background-color: transparent;
  } */
  @keyframes animate {
    0% {
      transform: rotate(0deg) scaleY(0);
    }
    70% {
      transform: rotate(359deg) scaleY(2);
    }
    90% {
      transform: rotate(359deg) scaleY(2);
    }
    100% {
      transform: rotate(719deg) scaleY(0);
    }
  }
`;

const HeroLogoConatiner = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 60%;
    animation: rotation 15s infinite linear;
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }
`;

const MainText = styled.div`
  color: white;
  font-size: calc(0.5em + 1vw);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  h1 {
    text-align: center;
    white-space: pre-line;
    word-wrap: break-word;
  }
  @media only screen and (max-width: 991px) {
    padding: 2rem 2rem;
  }
`;

export default function MainContent() {
  return (
    <ContentContainer>
      <HeroContainer>
        <HeroImageContainer>
          <ImageBox>
            <ImageBorderAnimate>
              <img src="\hero_image.png" />
            </ImageBorderAnimate>
            <HeroImage src="\hero_image.png" />
          </ImageBox>
        </HeroImageContainer>
        <HeroLogoConatiner>
          {/* <img src="\main_logo.png" /> */}
          <img src="\fix_logo.png" />
        </HeroLogoConatiner>
      </HeroContainer>
      <MainText>
        <h1>แหล่งรวมตัวพันธมิตรธุรกิจการก่อสร้าง</h1>
        <h1>เพื่อร่วมกันสร้างผลประโยชน์ร่วมกันทุกฝ่าย</h1>
      </MainText>
    </ContentContainer>
  );
}
