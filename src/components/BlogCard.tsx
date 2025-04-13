import '../assets/styles/blogs.css'
import { GoArrowRight} from 'react-icons/go';


type BlogCardProps = {
    id: string,
    title: string,
    image: string,
    description: string[],
};

function BlogCard({  title, image, description }: BlogCardProps) {
    let short: string = description[0];
    return (
        <div className="luxury-card">
            <div className='luxury-card__image'>

                <div style={{ position: 'relative' }}>
                    <img src={image} alt={title} className='luxury-card__image'/>
                    <GoArrowRight style={{ position: 'absolute', bottom: '20px', right: '20px', color: 'var(--cream)', fontSize: '2rem', zIndex: '100' }}/>
                </div>
                <div className='luxury-card__image-overlay'/>
            </div>

            <div className="luxury-card__content">
                <h2 className="luxury-card__title">{title}</h2>
                <p className="luxury-card__description">{short}</p>
            </div>
        </div>
    );
}

export default BlogCard;