import styled from "styled-components";


const Footer = () => {
    const Wrapper = styled.div`
        width: 100%;
        // height: 600px;
        border: 1px solid black;
        text-align: center;
        background-color: gray;
        color: white;
        font-weight: bolder;
        padding: 20px;
    `
    return (
        <Wrapper>
            All reserved regarding to the footer... The author is Mansur and the copyright is nothings
        </Wrapper>
    )
}

export {Footer};