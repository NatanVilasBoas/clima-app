import styled from "styled-components";
import { Suspense, memo, useCallback, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import wheaterService from "../../services/wheater";
import Card from "../Card/Card";

const Context = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: background 0.5s ease;
`

const Content = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 3vh;
  height: 75vh;
  flex: 1;
`

const ClimaText = styled.p`
  font-size: 32px;
  color: white;
`


const RespAPI = ({ search }) => {
    const [loading, setLoading] = useState(false);
    const [clima, setClima] = useState({});

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await wheaterService.buscarLocalCode(search);
            const respClima = await wheaterService.buscarClima(response[0].Key);
            setClima(respClima);
        } catch (err) {
            console.error(`Error fetching city data: ${err}`);
        } finally {
            setLoading(false);
        }
    }, [search])

    useEffect(() => {
        if (!search) return;

        fetchData();

    }, [search, fetchData]);

    return (
        <Suspense fallback={<Loader />}>
            <Context>
                {/* {loading ?
                    (<Content>
                        <Loader />
                    </Content>) :
                    Object.keys(clima).length > 0 ? (
                        <Card>
                            <div>
                                {`${clima[0].Temperature.Metric.Value}°C`}
                            </div>
                            <div>

                            </div>
                        </Card>
                    ) : (<Content>
                        <h2>Seja bem-Vindo</h2>
                        <ClimaText>Pesquise por sua cidade</ClimaText>
                    </Content>)
                } */}
                <Card/>
            </Context>
        </Suspense >
    )
}

export default memo(RespAPI);