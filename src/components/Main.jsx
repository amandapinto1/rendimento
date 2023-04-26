import React, {useEffect, useState} from 'react';
import {getNotas} from '../Services';
import { useParams } from "react-router-dom";
import Header from './Header';
import Body from './Body';
import Icon, { LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";


const Main = (props) => {
  const navigate = useNavigate();

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const {usuario} = useParams();

    const getInfo = async (user) => {
      setLoading(true);
      var result = await getNotas(user);
      if(result.return.length > 0){
      setData(result.return.sort((a,b) => (a.codHabilitacao > b.codHabilitacao) ? 1 : -1));
      setLoading(false);
      }else{
        navigate('/');
      }

    }

    useEffect(() => {
      getInfo(usuario)
    },[usuario]);

  return (
    loading == true ? <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}><div><LoadingOutlined style={{fontSize:'160px', color:'#009240'}}/></div></div> : (<>
    <Header/>
    {data && <Body data={data}/>}
    <div style={{height:'20px'}}></div>
    </>)
  )
}

export default Main