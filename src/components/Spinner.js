import React from "react";

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center" >
            <div
                className="spinner"
                // style={styles.spinner}
                className="spinner-border text-info"
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;