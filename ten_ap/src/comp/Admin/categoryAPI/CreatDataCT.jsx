import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './creatCate.css'
import { dark } from "@mui/material/styles/createPalette";
import httpService from "../../service/http.service";



const CreateCT = (props) => {
  const [cateBig, setCateBig] = useState([]);
const navigate = useNavigate();

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({ criteriaMode: "all" }); 


const onSubmit = (data) => {
  httpService
  .post("/api/categories/", { body: data })
  .then(data => setCateBig(data))
  navigate('/Admin/Categories')
  
}

return (
  <>
    <div className="phudz">
      <form className="creat__form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Thêm Danh Mục</h1>
        <label>Name</label>
        <br />
        <input
          placeholder="Enter your name"
          type="text"
          defaultValue={props.data?.name}
          {...register("name", {
            required: true,
          })}
        />
        {errors.name && <span>Name không được để trống</span>}

        <br />
        <label>Link</label>
        <br />
        <input
          placeholder="Enter your img"
          type="text"
          defaultValue={props.data?.img}
          {...register("img", {
            required: true,
          })}
        />
        {errors.img && <span>img không được để trống</span>}

        <br />
        <br />
        <button className="creatOK" type="submit">
          Creat
        </button>
        <Link className="comeback" to="/Admin/accounts">- Come back Accounts -</Link>
      </form>
    </div>
  </>
);
};

export default CreateCT;