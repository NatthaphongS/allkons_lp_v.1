import styled from 'styled-components';
import { Popover } from 'antd';

const FooterContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0.5rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media only screen and (max-width: 991px) {
    padding: 0.5rem 2rem;
  }
`;
const FooterBackground = styled.div`
  /* background-color: #80808034; */
  background: linear-gradient(#80808000, #050505b7);
`;

const ContactContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PopUpContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  row-gap: 0.5rem;
  column-gap: 2rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DownFooter = styled.div`
  display: flex;
  justify-content: space-around;
  color: #929292;
  font-size: 1rem;
  text-align: center;
  gap: 1rem;
  flex-wrap: wrap;
  /* margin-top: 0.3rem; */
  p {
    white-space: nowrap;
  }
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
    p {
      white-space: wrap;
    }
  }
`;
const TextContact = styled.div`
  color: white;
  display: flex;
  gap: 2rem;
  margin: 0 auto;
  p {
    white-space: nowrap;
  }
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const PopShow = styled.div`
  background-color: #5a5a5a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 10px;
  padding: 5px 15px;
  flex: 0 0;
  cursor: pointer;
  img {
    width: 30px;
  }
  @media only screen and (max-width: 991px) {
    width: 200px;
  }
`;

const QRImage = styled.img`
  width: 100%;
`;

const qrPopUpContent = (selection) => {
  return <QRImage src={`./qr-${selection}.png`} />;
};

export default function PageFooter() {
  return (
    <FooterBackground>
      <FooterContainer>
        <ContactContainer>
          <TextContact>
            <p>Contact us</p>
            <div>
              <p>Tel : +66 2 6110290</p>
              <p>Email : admin@allkonsone.com</p>
            </div>
          </TextContact>
          <PopUpContainer>
            <Popover content={qrPopUpContent('shopee')}>
              <PopShow>
                <img src="/shopee.png" />
                <p>Shopee</p>
              </PopShow>
            </Popover>
            <Popover content={qrPopUpContent('lazada')}>
              <PopShow>
                <img src="/lazada.png" />
                <p>Lazada</p>
              </PopShow>
            </Popover>
            <Popover content={qrPopUpContent('line')}>
              <PopShow>
                <img src="/line.png" />
                <p>Line</p>
              </PopShow>
            </Popover>
            <Popover content={qrPopUpContent('facebook')}>
              <PopShow>
                <img src="/facebook.png" />
                <p>Facebook</p>
              </PopShow>
            </Popover>
          </PopUpContainer>
        </ContactContainer>

        <DownFooter>
          <p>Change for growth by ALLKONS ONE</p>
          <p>Copyright Allkons One Company Limited. All rights reserved.</p>
        </DownFooter>
      </FooterContainer>
    </FooterBackground>
  );
}
