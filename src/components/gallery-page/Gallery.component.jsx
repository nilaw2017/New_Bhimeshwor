import {Component} from "react"
import {GalleryIntro} from './../main-intro/MainIntro.component'
import './gallery.component.css'

export default class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            images:[]
        }
    }

    componentDidMount() {
        fetch(`https://bhimeshor.herokuapp.com/api/galleries?populate=CardImage`)
        // fetch(`http://localhost:1337/api/galleries?populate=CardImage`)
        .then((res)=> {
            if(res.status >=400) {
                console.log("Something Went Wrong")
            } return res.json(); 
        })
        .then((content)=> {
            this.setState({
                images: content.data
            })
        })
    }
    render() {
        console.log("GALLERY >>",this.state.images)
        return(
            <section>
                <GalleryIntro/>
                <article className="d-flex justify-content-center text-bold mt-5">
                    <span className="menu-header text-pri text-xl acme">
                    GALLERY
                    </span>
                </article>

                <section className="d-flex flex-wrap pr-5 pl-5 justify-content-around mt-5">
                    {
                        this.state.images.map(({id, attributes})=> (
                            <div className="col-xl-4 col-md-6 col-12 mt-4 card p-0 shadow position-relative" key={id}>
                                <img alt="gallery-img" src={`${process.env.DATABASE_URL}${attributes.CardImage.data.attributes.url}`} />
                                <div className="card-soul position-absolute width-100 height-100 gradient-glassmorphism text-white d-flex justify-content-center align-items-center">
                                    <span>{attributes.Message}</span>
                                </div>
                            </div>
                        ))}
                </section>
            </section>
        )
    }
}