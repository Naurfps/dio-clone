import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 32px;
    font-style: normal;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 32px;
    font-style: normal;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 18px;
    font-style: normal;
    margin-bottom: 10px;
    line-height: 25px;
`

export const Text = styled.p`
    display: flex;
    flex-direction: row;
    gap: 8px;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 14px;
    font-style: normal;
    line-height: 19px;
    color: #FFFFFF;
`

export const LoginButton = styled.p`
    display: flex;
    flex-direction: row;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 14px;
    font-style: normal;
    line-height: 19px;
    color: #E23DD7;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: #FFFFFF;
    }
`
