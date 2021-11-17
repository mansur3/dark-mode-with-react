import styled from "styled-components";


const DarkLeft = () => {

    const Wrapper = styled.div`
    position: absolute;
    left: 0%;
    right: 94.38%;
    top: 0%;
    bottom: 0%;
    width: 81px;
    height: 1024px;
    
    background: black;
    color: white;
    box-shadow: 0px 0px 5px #E5E9F2;
    
    `
    const Image = styled.div`
    width: 40px;
    height: 40px;

     background : url("https://3.bp.blogspot.com/-ZDmUhMfvLCI/UeVxlchEg8I/AAAAAAAAnfY/t1FEyxjOIzw/s1600/Shahrukh+Khan+Latest+HD+Wallpapers+1.jpg");
    border-radius: 50%;
    background-repead : no-repeat;
    background-size : 40px 40px;
    margin-left: 20px;
    margin-top: 20px;
    float: left;
    `
    const Top = styled.div`
    
    `
    const Middle = styled.div`
        // border: 1px solid black;
        margin-top: 200px;
        
    `





    const Bottom = styled.div`
        margin-top: 200px;
    `
    return (
        <Wrapper>
            <Top>
                <Image />

            </Top>
            <Middle>
                <div style = {{textAlign: 'center'}}><img style = {{backgroundColor: "#679CF6", width: "81px", height: "70px", borderRadius: "5px"}} src = "https://cdn-icons.flaticon.com/png/128/2652/premium/2652712.png?token=exp=1637164225~hmac=f41a7aef3f04039befb6065b91f55505" alt = "network" /></div>
                <div style = {{textAlign: 'center'}}><img style = {{ backgroundColor: "gray",  width: "31px", height: "40px", borderRadius: "5px"}} src = "https://img.icons8.com/external-kmg-design-flat-kmg-design/72/external-sign-post-maps-navigation-kmg-design-flat-kmg-design.png" alt = "network" /></div>
                <div style = {{textAlign: 'center'}}><img style = {{ backgroundColor: "gray", width: "31px", height: "40px", borderRadius: "5px"}} src = "https://cdn-icons.flaticon.com/png/128/2022/premium/2022197.png?token=exp=1637164905~hmac=4e26810d78e6617dd2383a81a97da1e4" alt = "network" /></div>
                <div style = {{textAlign: 'center'}}><img style = {{ backgroundColor: "gray", width: "31px", height: "40px", borderRadius: "5px"}} src = "https://cdn-icons.flaticon.com/png/128/2594/premium/2594058.png?token=exp=1637164995~hmac=61a06da64caa855f7e21ad4e43223483" alt = "network" /></div>
                <div style = {{textAlign: 'center'}}><img style = {{ width: "51px", height: "40px", borderRadius: "5px"}} src = "https://t4.ftcdn.net/jpg/01/26/09/55/240_F_126095599_eFIP8OFYe2lZXCeaAqKsDFBWIoUqqqxL.jpg" alt = "network" /></div>
                <div style = {{textAlign: 'center'}}><img style = {{ width: "51px", height: "40px", borderRadius: "5px"}} src = "https://t4.ftcdn.net/jpg/01/13/94/83/240_F_113948390_gRY4UwSTxm2bNX8jD2oIjpEuwJPELTTr.jpg" alt = "network" /></div>
            </Middle>
            <Bottom>
            <div style = {{textAlign: 'center'}}><img style = {{ width: "51px", height: "40px", borderRadius: "5px"}} src = "https://cdn-icons-png.flaticon.com/128/190/190250.png" alt = "network" /></div>

            </Bottom>
        
        </Wrapper>
    )
}

export {DarkLeft};