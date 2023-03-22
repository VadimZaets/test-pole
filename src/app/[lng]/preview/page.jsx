"use client";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import Layout from "@/components/layout/Layout";
import Modal from "@/components/UI/Modal/Modal";
import PreviewPage from "@/components/Preview/PreviewPage/PreviewPage";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FollowerModal from "@/components/Preview/FollowerModal/FollowerModal";

export default function Preview({ params: { lng } }) {
  const [active, setActive] = useState(false);
  const { t } = useTranslation(lng, "preview");
  return (
    <>
      <Header lng={lng} t={t} />
      <Layout>
        <PreviewPage setActive={setActive} lng={lng} />
        <Modal active={active}>
          <FollowerModal setActive={setActive} t={t} />
        </Modal>
      </Layout>
      <Footer setActive={setActive} t={t} />
    </>
  );
}
