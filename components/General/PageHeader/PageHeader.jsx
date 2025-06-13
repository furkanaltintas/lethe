
const PageHeader = ({ title, preTitle }) => {
    return (
        <section className="s-pageheader pageheader">
            <div className="row">
                <div className="column xl-12">
                    <h1 className="page-title">
                        <span className="page-title__small-type text-pretitle">{title}</span>
                        {preTitle}
                    </h1>

                </div>
            </div>
        </section>
    )
}

export default PageHeader