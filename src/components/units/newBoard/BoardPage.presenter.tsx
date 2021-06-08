import {Title, Box, TitleWrapper, Semititle, Semittitlewrapper, Memo, SemititleWrapper, Semittitlewrapper2,
        Post, Semepost, YouWrapper, Link, Linkwrapper, PhotoWrapper, Photo, PhotoBtnWrapper, MainRadio,
        MainRadioLabel, Enrollment, EnrollmentWapper, MainWrarper, Twowrapper, Nametext, FourWrapper, Body,
        Container, PostSearch, Star, Cancel,} from './BoardPage.style';

export default function BoardPageUI({handleChangeInput, handleClickCreateBoard, handleListPage, data, hadleUpdateBoard}) {
  
    return (
        <Container>
        <Box>
            <TitleWrapper>
            {!data ? <Title>게시물 등록</Title> : <Title>게시물 수정</Title>}
            </TitleWrapper>
            <Body>
            <FourWrapper>
                <Twowrapper>
                <Semititle>
                    작성자 <Star>*</Star>
                </Semititle>
                <Nametext
                    type="text"
                    placeholder="이름을 적어주세요."
                    name="writer"
                    onChange={handleChangeInput}
                    defaultValue = {data ? data.fetchBoard.writer : ""}
                ></Nametext>
                </Twowrapper>
                <Twowrapper>
                    <Semititle>비밀번호</Semititle>
                <Nametext
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    name="password"
                    onChange={handleChangeInput}
                ></Nametext>
                </Twowrapper>
            </FourWrapper>
            <Semititle>제목</Semititle>
            <Semittitlewrapper2>
                <Semittitlewrapper
                placeholder="제목을 입력해주세요."
                name="title"
                onChange={handleChangeInput}
                defaultValue = {data ? data.fetchBoard.title : ""}
                ></Semittitlewrapper>
            </Semittitlewrapper2>
            <SemititleWrapper>
                <Semititle>내용</Semititle>
            </SemititleWrapper>
            <Semittitlewrapper2>
                <Memo
                placeholder="내용을 작성해주세요."
                name="content"
                onChange={handleChangeInput}
                defaultValue = {data? data.fetchBoard.contents : ""}
                ></Memo>
            </Semittitlewrapper2>
            <Semittitlewrapper2>
                <Semititle>주소</Semititle>
            </Semittitlewrapper2>
            <Semittitlewrapper2>
                <Post placeholder="07250"></Post>
                <PostSearch>우편번호 검색</PostSearch>
            </Semittitlewrapper2>
            <Semittitlewrapper2>
                <Semepost></Semepost>
            </Semittitlewrapper2>
            <Semittitlewrapper2>
                <Semepost></Semepost>
            </Semittitlewrapper2>
            <YouWrapper>
                <Semititle>유튜브</Semititle>
            </YouWrapper>
            <Linkwrapper>
                <Link placeholder="링크를 복사해주세요."></Link>
            </Linkwrapper>
            <PhotoWrapper>
                <Semititle>사진첨부</Semititle>
            </PhotoWrapper>
            <PhotoBtnWrapper>
                <Photo>
                <div>+</div>Upload
                </Photo>
                <Photo>
                <div>+</div>Upload
                </Photo>
                <Photo>
                <div>+</div>Upload
                </Photo>
            </PhotoBtnWrapper>
            <MainWrarper>
                <Semititle>메인설정</Semititle>
            </MainWrarper>
            <Semittitlewrapper2>
                <MainRadio type="radio" id="you" name="Main"></MainRadio>
                <MainRadioLabel htmlFor="you">유튜브</MainRadioLabel>
                <MainRadio type="radio" id="img" name="Main"></MainRadio>
                <MainRadioLabel htmlFor="img">사진</MainRadioLabel>
            </Semittitlewrapper2>
            </Body>
            <EnrollmentWapper>
                <Cancel onClick={handleListPage}>취소하기</Cancel>       
                {!data ? <Enrollment onClick={handleClickCreateBoard}>등록하기</Enrollment> : <Enrollment onClick={hadleUpdateBoard}>수정하기</Enrollment>}
            </EnrollmentWapper>
        </Box>
        </Container>
    );
}
