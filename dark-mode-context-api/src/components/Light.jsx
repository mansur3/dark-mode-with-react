
import styled from "styled-components";
import {User} from "./User";

const Light = () => {



    const Wrapper = styled.div`
        position: absolute;
        left: 8.47%;
        right: 70.14%;
        top: 11.04%;
        bottom: 38.77%;
        width: 500px;
        padding: 30px;
        
        background: #FFFFFF;
        box-shadow: 0px 1px 4px #E5E9F2;
        border-radius: 5px;
    `
    let obj = {
        name : "Nrupul Dev",
        add : "Banglore, India",
        level : "Professional Level 15",
        points : "4773",
        color: "#29CB97",
        width: "70%", 
        image : "https://th.bing.com/th/id/OIP.HEto-JEMp9Amgfx4r1zTdwHaKi?pid=ImgDet&w=149&h=211&c=7&dpr=1.75"
    }
    let obj2 = {
        name : "Prateek Dev",
        add : "Banglore, India",
        level : "Professional Level 11",
        points : "3223",
        color : "#4072EE",
        width: "50%", 
        image : "https://image.cnbcfm.com/api/v1/image/106216476-1572545404537gettyimages-1151703682.jpeg?v=1572545446"
    }
    let obj3 = {
        name : "Mark Dev",
        add : "Banglore, India",
        level : "Professional Level 11",
        points : "233",
        width: "30%", 
        color: "#B558F6",
        image : "https://image.cnbcfm.com/api/v1/image/106216476-1572545404537gettyimages-1151703682.jpeg?v=1572545446"
    }
    const Active = styled.div`
        width: 100%;
        height: 100px;
        padding: 30px;
    `

    return (
        <Wrapper>
            <Active>
                <div style = {{float: "left"}}>Active Users</div>
                <div style = {{float : "right"}}>for August 2020</div>
            </Active>
            <div style = {{marginTop: "-100px"}}>
                <User data = {obj} />
                <User data = {obj2}/>
                <User data = {obj3} />
            </div>

        </Wrapper>
    )
}
export {Light};