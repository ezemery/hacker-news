import { useContext, useState, useEffect } from "react";
import { search } from "../../services";
import OpengraphReactComponent from "opengraph-react";
import { Loading } from "../Loading";
import { FetchStore } from "../../Context/store";

import { Header, Container, Center } from "./styles";

export const Home = () => {
  const { error, fetchDataAsync, loading, stories } = useContext(FetchStore);
  const [url, setUrl] = useState([]);

  useEffect(() => {
    fetchDataAsync();
    return () => {};
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (stories.length > 0) {
        for (let i = 0; i < 10; i++) {
          const result = await search(stories[i]);
          setUrl((previous) => [...previous, result]);
        }
      }
    }
    fetchData();

    return () => {};
  }, [stories]);
  console.log(url);

  return (
    <div>
      <Header>
        <Container><h1>Top 10 Hacker News Reader</h1></Container>
      </Header>

        <Center >
        {url.map((data) => {
            return <OpengraphReactComponent
                    site={data.url}
                    appId={process.env.REACT_APP_ACCESS_KEY}
                    loader={Loading}
                    size={"large"}
                    />
            })}
        </Center>
     
    </div>
  );
};
