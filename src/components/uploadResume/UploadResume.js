import React, { useMemo, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./uploadResume.module.css";
import { ToastContainer, toast, Flip } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import allActions from "../../store";
import PageLoader from "../pageLoader/PageLoader";
import { useSelector } from "react-redux";

// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "80px 20px",
  borderWidth: 3,
  borderRadius: 3,
  borderColor: "black",
  borderStyle: "dashed",
  backgroundColor: "#FFFFFF",
  color: "#000000",
  outline: "none",
  transition: "border .24s ease-in-out",
  width: "100%",
  justifyContent: "center",
  margin: "auto",
  position: "relative",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
const UploadResume = () => {
  const ab = useSelector((state) => state.getCandidateResultsReducer.loading);
  console.log("ffffffff", ab);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [fieldState, setFieldState] = useState(false);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    fileRejections,
    open,
  } = useDropzone({
    accept:
      "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    multiple: false,
    noClick: true,
    noKeyboard: true,
  });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {Math.round((file.size / (1024 * 1024)) * 10) / 10} Mb
    </li>
  ));
  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));
  const handleClose = () => {
    fileRejections[0] === null ? setShow(true) : setShow(false);
  };
  const handleSetField = () => {
    if (fieldState === false) {
      setFieldState(true);
    } else {
      setFieldState(false);
    }
  };
  const handleShow = () => setShow(true);
  const handleResume = (e) => {
    e.preventDefault();
    console.log("xxx", acceptedFiles[0] ? acceptedFiles[0] : null);
    dispatch(
      allActions.getCandidateResultsActions.getCandidateResults(
        acceptedFiles[0],
        navigate
      )
    );
  };
  useEffect(() => {
    toast.success("Resume uploaded", {
      limit: 1,
      toastId: "123",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles[0]]);
  useEffect(() => {
    handleShow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileRejections[0]]);
  return (
    <div className="container">
      <div className={styles.dropZoneSect}>
        {ab === true ? (
          <>
            <PageLoader />
          </>
        ) : (
          <form onSubmit={handleResume}>
            {fieldState === false ? (
              <div
                {...getRootProps({
                  style,
                  className: "dropzone",
                  onClick: (evt) =>
                    // eslint-disable-next-line no-sequences
                    evt.preventDefault(),
                })}
              >
                <img
                  src="/assets/images/DropZoneMidImg.png"
                  alt=""
                  className={styles.DropZoneMidImg}
                />

                <input {...getInputProps()} />
                <h3 className={styles.dragZoneHeading}>Drag & drop </h3>
                <p className={styles.dropZoneContent}>
                  your resume here or{" "}
                  <button
                    type="button"
                    onClick={open}
                    className={styles.clickHereBtn}
                  >
                    browse
                  </button>{" "}
                  <br />
                  or{" "}
                  <button
                    type="button"
                    className={styles.pasteBtn}
                    onClick={handleSetField}
                  >
                    paste it
                  </button>
                </p>
                <img
                  src="/assets/images/DropZoneRightImg.png"
                  alt=""
                  className={styles.DropZoneRightImg}
                />
              </div>
            ) : (
              <div className={styles.textArea}>
                <textarea
                  className={`form-control `}
                  id="exampleFormControlTextarea1"
                  rows="12"
                ></textarea>
                <button onClick={handleSetField} className={styles.closeBtn}>
                  <img src="/assets/icons/delete.png" alt="" />
                </button>
                {/* <button className={styles.back} onClick={handleSetField}>
              back
            </button> */}
              </div>
            )}
            <aside>
              {fileRejectionItems[0] ? (
                <div>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Oh no!!! Invalid File type</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              ) : acceptedFiles[0] ? (
                <>
                  <h4 className={styles.ResumeReportHeader}>Resume</h4>
                  <ul className={styles.ResumeReportList}>{files}</ul>
                  <ToastContainer
                    toastId={123}
                    className={styles.ToastContainer}
                    draggable={true}
                    transition={Flip}
                    autoClose={3000}
                    closeOnClick={true}
                    useLazyContainer={true}
                  />
                </>
              ) : null}
            </aside>
            <div className="d-flex justify-content-center mt-5">
              <input
                type="submit"
                className="global-btn"
                value="Upload Resume"
              />
              {/* <Link
              to="/resume-report"
              className="global-btn"
              value="Upload Resume"
            >
              Upload Resume
            </Link> */}
              {/* Upload Resume
            </input> */}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UploadResume;
