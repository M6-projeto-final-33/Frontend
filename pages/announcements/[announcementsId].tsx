import { NextPage } from "next";
import { IAd } from "../../interfaces/IAd";
import api from "../../services/api";
import Navbar from "../../components/Navbar";

export async function getStaticProps(context: any) {
  const { params } = context;

  const response = api.get(`/announcements/${params.id}/`);

  return {
    props: (await response).data,
  };
}

export async function getStaticPaths() {
  const response = api.get("/announcements/");

  const data: IAd[] = (await response).data;

  const paths = data.map((ad: IAd) => {
    return {
      params: {
        announcementsId: `${ad.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

const Announcements: NextPage = ({}) => {
  return (
    <>
      <Navbar />
      <main></main>
    </>
  );
};

export default Announcements;
