import React, { useEffect, useState } from "react";
import httpService from "../service/http.service";
import UserProducts from "./product";
import HomeProduct from "../Admin/productAPI/get-product";
import './index.css'
import './Statistical.css'
import '../../img/z4815540120478_0c12c358ffeb3fd46e8d9cd93b71ba7c.jpg';
import storageService from "../service/storage.service";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Slideshow from './slider/SideEffectSlider';
import FadeSlideshow from "./slider/FadeEffectSlider";
import Statistical from "./Statistical-iteam";


const StatisticalLayout = () => {
    const [product, setProduct] = useState([])
    const navigate = useNavigate();
    const [cateBig, setCateBig] = useState([]);

    useEffect(() => {
        httpService.get("/api/categoryBig", {}).then(data => {
          setCateBig(data.data)
        })
      }, [])
      
    const handleLogOut = () => {
        storageService.remove("role")
        storageService.remove("access_token")
        navigate('/login')
        
    }

    useEffect(() => {
        httpService.get("/api/products/", {})
            .then((data) => {
                setProduct(data.data)
            })
    }, [])

    return (<>
        <div className="Sum_index">
            <div className="header_index">
                <div className="menu_header">
                    <div className="item_productt">
                        <h5><Link className="auth" to = '/login'>Login</Link></h5>
                    </div>
                    <div className="item_productt" >
                        <h5><Link className="auth" to = '/register'>Register</Link></h5>
                    </div>
                    <div className="item_productt">
                        {
                            storageService.get("role") &&
                            <h5 onClick={handleLogOut}>logout</h5>
                        }
                    </div>
                </div>
                <div className="menu_header2">
                  <div className="item_product"><a>message</a></div>
                  <div className="item_product"><a>Email</a></div>
                  <div className="item_product"><a>Phone</a></div>
                </div>
            </div>
            <div className="menu_index">
            <img
            className="logo_index"
              width={"190px"}
              src="https://goldidea.vn/upload/123/thiet-ke-logo-the-face-shop.png"
              alt=""
            />  
            <div>
          {cateBig && cateBig.length > 0 &&(
            <div className="cateBig">
          {cateBig.map((item)=>(
              <ul>
                <li><Link className="item_cate" to={item.link}>{item.name}</Link></li>
              </ul>
              ))}
              </div>
              )}
        </div>
                        <Link className="cart" to = '/cart'><img 
              width={"50px"}
              height={"50px"}
              src="https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_1280.png"
              alt=""
            /></Link>
            </div>
            <hr />
            <h1 className="name_statis">Lịch Sử Giao Dịch</h1>
            <div className="nav_statis">
                {<Statistical />}
            </div>
            <hr />
           <br></br>
            <div className="hover_logo">
                <ul>
                    <li><Link to ="https://www.facebook.com/profile.php?id=100054721666294">   <img
              width={"35px"}
              src="https://i.pinimg.com/474x/16/b8/22/16b82240a640db6fb6c18297fc1dcfd3.jpg"
              alt=""
            /></Link></li>
              <li><Link to ="https://www.facebook.com/profile.php?id=100054721666294">   <img
              width={"35px"}
              src="https://thumbs.dreamstime.com/z/youtube-logo-icon-voronezh-russia-november-square-black-color-164586300.jpg?w=768"
              alt=""
            /></Link></li>
             <li><Link to ="https://www.facebook.com/profile.php?id=100054721666294">   <img
              width={"35px"}
              src="https://thumbs.dreamstime.com/z/twitter-logo-bird-isolated-over-white-background-social-media-networking-communications-symbol-breaking-news-130861855.jpg?w=768"
              alt=""
            /></Link></li>
             <li><Link to ="https://www.facebook.com/profile.php?id=100054721666294">   <img
              width={"35px"}
              src="https://brasol.vn/wp-content/uploads/2022/09/logo-instagram-vector.jpg"
              alt=""
            /></Link></li>
                </ul>
            </div>
            <div className="footer_index">
                <div className="logo">
                <img
              width={"280px"}
              src="https://goldidea.vn/upload/123/thiet-ke-logo-the-face-shop.png"
              alt=""
            />  
                <h4>Địa Chỉ : <span>219/7 Trần Hưng Đạo TP.Đà Nẵng</span></h4>
                <h4>Số Điện Thoại: <span>0349090947</span></h4>
                <h4>Email : <span>Huynhngocphuqs@gmai.com</span></h4>
                <h4>Mở cửa từ 8:00 AM đến 9:00 PM tất cả các ngày trong tuần</h4>

                </div>
                <div className="menu">
                <h3>MENU</h3>
                <ul>
                    <li><Link className="menu_li">Trang chủ</Link></li>
                    <li><Link className="menu_li">Sản Phẩm</Link></li>
                    <li><Link className="menu_li">Tin Tức</Link></li>
                    <li><Link className="menu_li">Liên Hệ</Link></li>
                </ul>
                </div>
                <div className="menu"><h3>DANH MỤC</h3></div>
                <div className="menu"><h3>DỊCH VỤ</h3></div>
            </div>
            <div className="footer_hover">
                        <p>Coppy.@huynhngocphuqs@gmail.com</p>
            </div>
        </div>



    </>)
}
export default StatisticalLayout;