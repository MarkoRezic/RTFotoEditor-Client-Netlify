

const Contact = () => {
    return (
        <div>
            <div className="blog-header">
                <div className="container btrans">
                    <h1 className="text-center"><strong>Contact</strong></h1>
                </div>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-sm-12 blog-main">

                        <div className="blog-post">
                            <hr className="round" />
                            <p className="blog-post-meta">Zadnje ažurirano 31. studenog 2020.</p>
                            <div className="row">
                                <div className="col-5">

                                    <form>

                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1" className="white-text">Message:</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                                        </div>
                                    </form>

                                    <button type="submit" name="button">Send</button>

                                </div>
                                <div className="col-6">
                                    <p>Marko Rezić</p>
                                    <p>Tel: +387 63 000-000</p>
                                    <p>e-mail: markorezic1999@gmail.com</p>
                                    <hr />
                                    <p>Toni Jelonjić</p>
                                    <p>Tel: +387 63 000-000</p>
                                    <p>e-mail: tole.jelonjic@gmail.com</p>
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

export default Contact;