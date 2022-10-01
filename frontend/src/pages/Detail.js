import React from "react";
import Card from 'react-bootstrap/Card';
import Navbars from '../component/Navbars';
import Homes from '../image/home.png';
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { API, setAuthToken } from "../config/api";
function Detail() {

    let { id } = useParams();

    let { data: literaturs } = useQuery("productCache", async () => {
        const response = await API.get("/literatur/" + id);
        return response.data.data;
    });
    console.log("ini", literaturs);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
    
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const body = JSON.stringify({
            literatur_id: parseInt(id),
          });
          await API.post("/collection", body, config);
          navigate("/mycollection");
        } catch (error) {
          console.log(error);
        }
      };
  



    return (
        <>
            <div>
                <Navbars />
            </div>
            <div class="container">
                <div class="row bg-faded">
                    <div class="col-4">
                        <Card style={{ width: '18rem', height: "30rem" }}>
                            <Card.Img src={literaturs.attache} />
                            <Card.Body>
                                <Card.Title>{literaturs?.title}</Card.Title>
                                <Card.Text>
                                    BOOK
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small className="font-weight-bold text-lg text-uppercase">Management System<small className="font-weight-bold text-lg text-uppercase" > 2012</small></small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div class="col-6" style={{ backgrounColor: "black" }}>
                        <div style={{ backgrounColor: "black" }} className="text-light">
                            <h2>{literaturs?.title}</h2>
                            <br></br>
                            <p className='text-secondary'>Haris Astina</p>
                            <h2>Publication date</h2>
                            <br></br>
                            <p className='text-secondary'>April 2020</p>
                            <h2>Pages</h2>
                            <br></br>
                            <p className='text-secondary'>436</p>
                            <h2 className='text-danger'>ISBN</h2>
                            <br></br>
                            <p className='text-secondary'>9781789807554</p>
                            <button className='bg-danger text-light' >
                                Download
                            </button>
                        </div>
                    </div>
                    <div class="col-2">
                        <button className='bg-danger text-light'onClick={handleSubmit} >
                            Add My Collection
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detail