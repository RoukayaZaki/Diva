import '../assets/styles/blogs.css'

type BlogCardProps = {
    id: number,
    title: string,
    image: string,
    description: string[],
};

function BlogCard({ id, title, image, description }: BlogCardProps) {
    let short : string = description[0];
    return (
        <div className="luxury-card">
            <img src={image} alt={title} className="luxury-card__image" />
            <div className="luxury-card__content">
                <h2 className="luxury-card__title">{title}</h2>
                <p className="luxury-card__description">{short}</p>
            </div>
        </div>
    );
}

export default BlogCard;