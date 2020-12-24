import {Form, Row} from 'react-bootstrap';

const Editor = () => {
    return (
        <div>
            <div className="blog-header">
                <div className="container btrans">
                    <h1 className="text-center"><strong>Foto Editor</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-sm-12 blog-main">

                        <div className="blog-post">
                            <Form as={Row}>
                                <Form.Group>
                                    <Form.File className="fileUpload" id="exampleFormControlFile1" label="Upload photo" />
                                </Form.Group>
                            </Form>
                            <button type="Submit" name="button">Download</button>
                            <hr className="round" />
                            <p className="blog-post-meta">Zadnje ažurirano 31. studenog 2020.</p>
                            <div className="row">
                                <div className="col-1 holder-buttons">
                                    <button type="button" name="button" className="edit-button"></button>
                                    <button type="button" name="button" className="edit-button"></button>
                                    <button type="button" name="button" className="edit-button"></button>
                                    <button type="button" name="button" className="edit-button"></button>
                                    <button type="button" name="button" className="edit-button"></button>
                                    <button type="button" name="button" className="edit-button"></button>
                                    <button type="button" name="button" className="edit-button"></button>
                                    <button type="button" name="button" className="edit-button"></button>
                                </div>
                                <div className="col-6 placeholder">

                                </div>
                                <div className="col-4 holder-sliders">
                                    <div className="d-flex justify-content-center my-4">
                                        <span className="mr-2 mt-0 white-text">0</span>
                                        <form className="range-field w-100">
                                            <input className="border-0 slider" type="range" min="0" max="255" />
                                        </form>
                                        <span className="ml-2 mt-0 white-text">255</span>
                                    </div>

                                    <div className="d-flex justify-content-center my-4">
                                        <span className="mr-2 mt-0 white-text">0</span>
                                        <form className="range-field w-100">
                                            <input className="border-0 slider" type="range" min="0" max="255" />
                                        </form>
                                        <span className="ml-2 mt-0 white-text">255</span>
                                    </div>

                                    <div className="d-flex justify-content-center my-4">
                                        <span className="mr-2 mt-0 white-text">0</span>
                                        <form className="range-field w-100">
                                            <input className="border-0 slider" type="range" min="0" max="255" />
                                        </form>
                                        <span className="ml-2 mt-0 white-text">255</span>
                                    </div>
                                </div>

                            </div>
                            <hr className="round" />
                        </div>




                        <div className="blog-post">
                            <h5 className="w">Link Vizije</h5>
                            <p className="blog-post-meta">Zadnje ažurirano 8. studenog 2020. <strong> <a className="alink" href="https://docs.google.com/document/d/141DHijMdyPfeffnDDo_hYwJRKfGQT5NC6UDfMsEDl3Y/edit?usp=sharing" target="_blank" rel="noreferrer">Vizija</a> </strong></p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editor;