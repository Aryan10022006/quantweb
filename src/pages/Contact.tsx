import PageTransition from '../components/PageTransition'

const Contact = () => { 
    return (
        <PageTransition>
            <div className="container page-content">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <h1 className="text-center mb-4">Contact Us</h1>
                        <p className="text-center">This is the contact page of our website.</p>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default Contact
