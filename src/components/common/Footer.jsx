import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Noto300, PyeongBold } from "../../style/Common";

const Base = styled.footer`
    background-color: #0A1124;
  padding: 0 200px;

`;
const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
          border-bottom: 1px solid #acbacc;

`;
const FooterLogo = styled(Link)`
    text-decoration: none;
`; 
const LogoTitle = styled(PyeongBold)`
    font-size: 30px;
    color: #ACBACC;
`;
const SnsWrapper = styled.div``;
const SnsLink = styled.a``;
const SnsImg = styled.img``;
const FooterMiddle = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
`;
const CoarpImg = styled.img`
    height: 28px;
`;
const FooterBottom = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
`;
const CopyRightWrapper = styled.div``;
const CopyRight = styled(Noto300)`
    color: #ACBACC;
    font-size: 11px;
`;
const ContactWrapper = styled.div`
    align-items: flex-end;
`;
const Contact = styled(Noto300)`
    color: #ACBACC;
    font-size: 11px;
`;



export default function Footer() {
  return (
    <Base>
      <FooterTop>
        <FooterLogo>
          <LogoTitle>서문시장 야시장</LogoTitle>
        </FooterLogo>
        <SnsWrapper>
          <SnsLink href="https://www.facebook.com/nightseomun/">
            <SnsImg
              src="https://hwanyb.github.io/project_seomun/img/sns_f.png"
              alt="facebook"
            />
          </SnsLink>
          <SnsLink href="https://blog.naver.com/nightseomun">
            <SnsImg
              src="https://hwanyb.github.io/project_seomun/img/sns_b.png"
              alt="facebook"
            />
          </SnsLink>
        </SnsWrapper>
      </FooterTop>
      <FooterMiddle>
          <CoarpImg
            src="https://hwanyb.github.io/project_seomun/img/coperlogo%20(1).png"
            alt=""
          />
          <CoarpImg
            src="https://hwanyb.github.io/project_seomun/img/coperlogo%20(2).png"
            alt=""
          />
          <CoarpImg
            src="https://hwanyb.github.io/project_seomun/img/coperlogo%20(3).png"
            alt=""
          />
          <CoarpImg
            src="https://hwanyb.github.io/project_seomun/img/coperlogo%20(4).png"
            alt=""
          />
          <CoarpImg
            src="https://hwanyb.github.io/project_seomun/img/coperlogo%20(5).png"
            alt=""
          />
          <CoarpImg
            src="https://hwanyb.github.io/project_seomun/img/coperlogo%20(6).png"
            alt=""
          />
        </FooterMiddle>
      <FooterBottom>
          <CopyRightWrapper>
            <CopyRight>
              대구 동구 아양로 208-1 3층, 재단법인
              대구전통시장진흥재단ㆍ글로벌명품시장육성사업단
            </CopyRight>
            <CopyRight>
              Seomun Night Market Ⓒ2016 Daegu traditional Market Support Agency.
              All Rights Reserved
            </CopyRight>
          </CopyRightWrapper>
          <ContactWrapper>
            <Contact>contact | seomunmarket@sseomun.com</Contact>
          </ContactWrapper>
      </FooterBottom>
    </Base>
  );
}
