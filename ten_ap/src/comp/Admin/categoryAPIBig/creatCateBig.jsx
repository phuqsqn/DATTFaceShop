import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import httpService from "../../service/http.service";
// function useQuery() {
//   const { search } = useLocation();
//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

const CreateBig = (props) => {
    const [cateBig, setCateBig] = useState([]);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" }); 


  const onSubmit = (data) => {
    httpService
    .post("api/categoryBig", { body: data })
    .then(data => setCateBig(data))
    navigate('/Admin/CategoryBig')

  }

  return (
    <>
      <div className="phudz">
        <form className="creat__form" onSubmit={handleSubmit(onSubmit)}>
          <h1>CREAT CATEGOREBIG</h1>
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
            placeholder="Enter your password"
            type="text"
            defaultValue={props.data?.link}
            {...register("link", {
              required: true,
            })}
          />
          {errors.link && <span>Link</span>}

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

export default CreateBig;