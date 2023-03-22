import JoinError from "@/components/Preview/JoinError/JoinError";
import Loader from "@/components/UI/LoaderCopy1/Loader";
import { AddFollowerApi } from "@/api/fetchApi";
import JoinSuccess from "../JoinSuccess/JoinSuccess";
import ShowInterestForm from "../ShowInterestForm/ShowInterestForm";
import s from "./FollowerModal.module.scss";

const FollowerModal = ({ setActive, t }) => {
  const { mutate: addFollower, status, error, reset } = AddFollowerApi();

  return (
    <div className={s.followermodal}>
      {status === "loading" ? (
        <Loader />
      ) : status === "error" ? (
        <JoinError setActive={setActive} t={t} reset={reset} />
      ) : status === "success" ? (
        <JoinSuccess setActive={setActive} t={t} reset={reset} />
      ) : (
        <ShowInterestForm
          addFollower={addFollower}
          setActive={setActive}
          t={t}
        />
      )}
    </div>
  );
};

export default FollowerModal;
